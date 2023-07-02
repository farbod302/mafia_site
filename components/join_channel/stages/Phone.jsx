"use client"

import _registion from "@components/registion/registion";
import { Context } from "@container/Context";
import { useRouter } from "next/navigation";

import { useContext, useState } from "react";
const Phone = () => {



    let router = useRouter()
    const [subStage, setSubStage] = useState(0)
    const [loade, setLoade] = useState(false)
    const [phone, setPhone] = useState(false)
    const [isExist, setIsExist] = useState(false)
    const context = useContext(Context)
    const First = () => {
        const send_code = async (e) => {
            e.preventDefault()
            if (loade) return
            setLoade(true)
            let phone = "0" + document.querySelector("#phone").value
            setPhone(phone)
            const { data } = await _registion.check_phone(phone)
            if (data.is_exist) {
                setLoade(true)
                await _registion.send_verfication_code(phone)
                setLoade(false)
                setSubStage(2)
                setIsExist(true)
            }
            else {
                setLoade(false)
                setSubStage(1)
                setIsExist(false)

            }
        }
        return (
            <form
                onSubmit={(e) => { send_code(e) }}
            >
                <div className="label">
                    شماره تماس خود را وارد کنید
                </div>
                <div className="phone-input">
                    <div className="left">
                        +98
                    </div>
                    <div className="rigth">
                        <input type="number" id="phone" />
                    </div>
                </div>
                <div className="confirm-button">
                    <button >
                        {loade ? "درحال برسی" : "ادامه"}
                    </button>
                </div>
            </form>
        )
    }


    const Name = () => {

        const sign_up = async (e) => {
            e.preventDefault()
            const name = document.querySelector("#name").value
            if (loade) return
            setLoade(true)
            const fetch_data = await _registion.sign_up(phone, name)
            const { status } = fetch_data
            setLoade(false)
            if (status) {
                setSubStage(2)
            }
        }
        return (

            <form
                onSubmit={(e) => { sign_up(e) }}
            >
                <div className="label">
                    نام خود را وارد کنید
                </div>
                <div className="phone-input">

                    <div className="rigth">
                        <input type="text" id="name" />
                    </div>
                </div>
                <div className="confirm-button">
                    <button >
                        {loade === 1 ? "درحال ارسال کد تایید" : "ادامه"}
                    </button>
                </div>
            </form>
        )
    }

    const Code = () => {
        const check_code = async (e) => {
            e.preventDefault()
            if (loade) return
            setLoade(true)
            let code = document.querySelector("#code").value
            const data = await _registion.check_code(isExist, code, phone)
            if (!data.status) return setLoade(false)
            localStorage.setItem("token", data.data.token)
            context.setNavUpdater(prv => !prv)
            router.push("/")
        }
        return (

            <form
                onSubmit={(e) => { check_code(e) }}
            >
                <div className="label">
                    کد تایید را وارد کنید
                </div>
                <div className="phone-input">

                    <div className="rigth">
                        <input type="number" id="code" />
                    </div>
                </div>
                <div className="confirm-button">
                    <button >
                        {loade === 1 ? "درحال تایید" : "ادامه"}
                    </button>
                </div>
            </form>
        )
    }


    const stages = [
        <First />,
        <Name />,
        <Code />
    ]


    return (
        <div className="phone-stage">
            {stages[subStage]}
        </div>
    );
}

export default Phone;