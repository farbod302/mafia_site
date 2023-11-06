"use client"
import { useEffect, useRef, useState } from "react";
import "./style.scss"

const Auth = ({ session }) => {
    const [start, setStart] = useState(false)


    return (
        <div className="auth">


            <div className="content">
                <div className="title">
                    احراز هویت رده سنی
                </div>

                {start ?
                    <div>
                        <Ai session={session} />
                    </div> :
                    <div>
                        <div className="info">

                            احراز هویت  با هوش مصنوعی  و در لحظه انجام شده و هیچ گونه اطلاعات یا تصویری از شما ثبت و ذخیره نمی شود<br />
                            بعد از کلیک روی دکمه شروع برنامه از شما اجازه دسترسی به دوربین تلفن همراه شما را درخواست می کند.روی اجازه دادن یا  allow کلیک کنید<br />
                            بعد از شروع کافیست ۵ ثانیه تلفن همراه خود را مقابل صورت خود نگه دارید تا سیستم سن شما را تخمین بزند<br />
                            در صورت تخمین سن بالای ۱۵ سال احراز هویت شما با موفقیت انجام خواهد شد
                           <div style={{
                            display:"grid",
                            placeItems:"center",
                            textAlign:"center",
                            margin:"2rem"
                           }}>
                           <button onClick={() => { setStart(true) }}>
                                شروع
                            </button>
                           </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}




import * as faceapi from 'face-api.js';
import Helper from "@container/helper";

const Ai = ({ session }) => {

    const [modelsLoaded, setModelsLoaded] = useState(false);
    const [captureVideo, setCaptureVideo] = useState(false);
    const [age, setAge] = useState(null)
    const [results, setResults] = useState([])
    const [end, setEnd] = useState(false)

    const videoRef = useRef();
    const videoHeight = 320;
    const videoWidth = 480;
    const canvasRef = useRef();


    const loadModels = async () => {

        const MODEL_URL = '/models';

        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
            faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
            faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
        ]).then(setModelsLoaded(true));
    }

    const start = async () => {
        const { status } = await Helper.server_post_request("user/check_session", { session_id: session })
        if (!status) {
            alert("session not valid")
            return window.location.replace("/")
        }
        await loadModels()
        startVideo()
    }

    useEffect(() => {

        start()

    }, []);


    useEffect(() => {
        if (results.length < 5) return
        closeWebcam()
        let final_result = results.reduce((a, b) => { return Number(+a + +b) }, 0)
        final_result = Math.round(final_result / results.length)
        Helper.server_post_request("user/confirm_auth", {
            session_id: session,
            age: final_result
        })
        setEnd(final_result)
    }, [results])

    const startVideo = () => {
        setCaptureVideo(true);
        navigator.mediaDevices
            .getUserMedia({ video: { width: "100%" } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    }

    const handleVideoOnPlay = () => {
        setInterval(async () => {
            try {
                if (canvasRef && canvasRef.current) {
                    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
                    const displaySize = {
                        width: videoWidth,
                        height: videoHeight
                    }

                    faceapi.matchDimensions(canvasRef.current, displaySize);

                    const detections = await faceapi.detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withAgeAndGender()
                    if (detections) {
                        const { age, gender } = detections
                        setAge(` ${gender} ${Math.round(age) + 1}`)
                        setResults(prv => prv.concat(age))
                        const resizedDetections = faceapi.resizeResults(detections, displaySize);

                        canvasRef && canvasRef.current && canvasRef.current.getContext('2d').clearRect(0, 0, videoWidth, videoHeight);
                        canvasRef && canvasRef.current && faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
                        // canvasRef && canvasRef.current && faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
                        canvasRef && canvasRef.current && faceapi.draw.drawContour(canvasRef.current, resizedDetections);
                    }
                }
            }
            catch {
                return
            }
        }, 1000)
    }

    const closeWebcam = () => {
        videoRef.current?.pause();
        videoRef.current?.srcObject.getTracks()[0].stop();
        setCaptureVideo(false);
    }

    return (
        <div>
            <div style={{ textAlign: 'center', padding: '10px' }}>
                {/* {
                    captureVideo && modelsLoaded ?
                        <button onClick={closeWebcam} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
                            Close Webcam
                        </button>
                        :
                        <button onClick={startVideo} style={{ cursor: 'pointer', backgroundColor: 'green', color: 'white', padding: '15px', fontSize: '25px', border: 'none', borderRadius: '10px' }}>
                            Open Webcam
                        </button>
                } */}
            </div>
            {
                captureVideo ?
                    modelsLoaded ?
                        <div>
                            <div style={{textAlign:"center",padding:"1rem",lineHeight:"2rem"}}>درحال تخمین سن,دوربین را برای چند ثانیه روبروی صورت خود نگه دارید</div>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                                <video ref={videoRef} height={videoHeight} width={videoWidth} onPlay={handleVideoOnPlay} style={{ borderRadius: '10px' }} />
                                <canvas ref={canvasRef} style={{ position: 'absolute' }} />
                            </div>
                        </div>
                        :
                        <div>loading...</div>
                    :
                    <>
                    </>
            }
            <div>
                {!end ? <div>
                    سن تخمینی:{age}
                </div> :
                    <div>
                        احراز هویت انجام شد.سن تخمینی شما {end}
                        <div className="back">
                            <button onClick={
                                ()=>{window.location.href="return://mafiaverse"}
                            }>
                                بازگشت به برنامه
                            </button>
                        </div>
                    </div>}
            </div>



        </div>
    );
}


export default Auth;