"use client"
import { useCallback, useState } from "react";
import "./style.scss"
import Phone from "@components/join_channel/stages/Phone";
import Name from "@components/join_channel/stages/Name";
const Registion = () => {

    const [stage, setStage] = useState(0)

    const stages = useCallback([
        <Phone setStage={setStage} />,
        <Name setStage={setStage}  redirect={true}/>,
    ])
    return (
        <div className="registion ">
            <div className="content container">
                <div className="regist-cart">
                    <div className="icon">
                        <div className="icon-self">
                            M
                        </div>
                    </div>
                    <div className="title">
                        ورود / ثبت نام
                    </div>
                    
                <div className="stages">
                {stages[stage]}
                </div>
                </div>
            </div>
        </div>
    );
}

export default Registion;