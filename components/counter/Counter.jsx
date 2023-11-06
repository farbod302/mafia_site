"use client"

import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faGamepad, faHistory, faUser } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ counter_data }) => {
    const titles = [
        {
            title: "بازی در حال اجرا",
            icon: faGamepad,
        },
        {
            title: "کاربر ثبت شده",
            icon: faUser,
        },
        {
            title: "دفعات دانلود",
            icon: faDownload,
        },
        {
            title: "بازی انجام شده",
            icon: faHistory,
        },
    ]

    const route_image=(e)=>{
        let image=document.querySelector(".revolver")
        const {clientHeight}=image
        const {clientX,clientY}=e
        let midY=clientHeight/2+100
        let midX=window.innerWidth/2
        
        let offX=((clientX-midX)/midX)*60
        let offY=((clientY-midY)/midY)*10

        image.style.transform=`rotateX(${-offY}deg) rotateY(${offX}deg)`
        // image.style.transform=``

        console.log({offX,offY});
    }

    return (
        <div className="counter" onMouseMove={(e)=>{route_image(e)}}>
            <div className="container ">
                <div className="title">
                    به جمع مافیاورس بپیوندید
                </div>
                <div className="revolver">
                    <div className="img">
                    <img src="images/revolver.png" alt="" />

                    </div>
                </div>
                <div className="content">

                    {titles.map((title, index) =>
                        <div className="each-counter" key={index}>
                            <div className="counter-icon">
                                <FontAwesomeIcon
                                    icon={title.icon}
                                    style={{color: "#dc2727" }}
                                />
                            </div>
                            <div className="counter-num">
                                {counter_data[index]}+
                            </div>
                            <div className="counter-title">
                                {title.title}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Counter;