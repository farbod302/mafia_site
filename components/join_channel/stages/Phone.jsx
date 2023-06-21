"use client"

import { useState } from "react";

const Phone = ({setStage}) => {


    const [load, setLoad] = useState(0)

    const send_code = (e) => {
        e.preventDefault()
        setLoad(1)
    }

    const verfy_code = (e) => {
        e.preventDefault()
        setLoad(2)
    }

    const next_stage=(e)=>{
        e.preventDefault()

        setStage(prv=>prv+1)
    }


    return (
        <form className="phone-stage"
            onSubmit={load === 0 ?
                (e) => { send_code(e) } :load === 1?
                (e) => { verfy_code(e) }:
                (e) => { next_stage(e) }

            }
                
                >
            <div>
                <div className="label">
                    {load === 2 ? "کد تایید ارسال شده را" : "شماره تماس خود را"} وارد کنید
                </div>
                {
                    load === 2 ?
                        <div className="phone-input">
                            <div className="rigth">
                                <input type="number" />
                            </div>
                        </div> :
                        <div className="phone-input">
                            <div className="left">
                                +98
                            </div>
                            <div className="rigth">
                                <input type="number" />
                            </div>
                        </div>

                }
                {load < 2 ?
                    <div className="confirm-button">
                        <button >
                            {load === 1 ? "درحال ارسال کد تایید" : "ادامه"}
                        </button>
                    </div> :
                    <div className="confirm-button">
                        <button >
                            مرحله بعد
                        </button>
                    </div>
                }
            </div>
        </form>
    );
}

export default Phone;