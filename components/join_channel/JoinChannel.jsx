"use client"
import { useCallback, useState } from "react"
import style from "./join-channel.module.scss"
import "./join-channel.scss"
import Phone from "./stages/Phone"
import Name from "./stages/Name"
import Comp from "./stages/Comp"
const JoinChannel = ({ channel_data }) => {


    const [stage,setStage]=useState(0)

    const stages=useCallback([
        <Phone setStage={setStage}/>,
        <Name setStage={setStage}/>,
        <Comp/>
    ])
    return (
        <div className={`${style.main} join-channel`}>
            <div className={style.container}>
                <div className={style.content}>
                <div className="title">
                    Age of Mafia
                </div>
                <div className="chanel-avatar img">
                    <img src="https://static.theprint.in/wp-content/uploads/2021/06/binary-5137356_1280.jpg?compress=true&quality=80&w=376&dpr=2.6"/>
                </div>
                <div className="dis">
                    شما به کانال <span>{channel_data.channel_id}</span> در بازی عصر مافیا دعوت شدید<br/>
                    برای عضویت در این کانال مراحل ثبت نام را ادامه دهید
                </div>

                <div className="stages">
                {stages[stage]}
                </div>
                </div>
            </div>

        </div>
    );
}

export default JoinChannel;