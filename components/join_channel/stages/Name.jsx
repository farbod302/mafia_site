"use client"

import { useState } from "react";

const Name = ({setStage}) => {
    
    const [loade,setLoade]=useState(false)

    const regist=(e)=>{
        e.preventDefault()
        setLoade(true)
        setStage(prv=>prv+1)
    }

    return (
        <form className="name-stage" onSubmit={(e)=>{regist(e)}}>
            <div>
                <div className="label">
                    نام کاربری خود را وارد کنید
                </div>
                <div className="name-input">
                    <input type="text" />
                </div>
                <div className="confirm-button">
                    <button>
                        {loade ? "درحال ثبت نام":"ادامه"}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Name;