"use client"

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from 'next/navigation'

import "./style.scss"
import _socket from "./socket";
import { toast } from "react-toastify";

const LocalGame = () => {

    const [show, setShow] = useState(false)
    const [stage, setStage] = useState(0)
    const [cart, setCart] = useState(null)
    const [deck, setDeck] = useState(null)
    const searchParams = useSearchParams()
    const navigate = useRouter()

    const show_cart = () => {
        const img = document.querySelector(".img")
        setTimeout(() => {
            setShow(!show)
        }, 150)
        img.classList.toggle("rotate")

    }


    const connect_to_game = () => {
        const game_id = searchParams.get("game_id") || null
        if (!game_id) return toast.error("شناسه بازی نامعتبر است")
        const name = document.querySelector(".name").value
        if (!name) return toast.error("نام خود را وارد کنید")
        _socket.connect_to_game(name,game_id,setStage)
    }


    useEffect(() => {
        _socket.connection(setDeck, setStage, setCart)
    }, [])
    return (
        <div className="local-game">
            <div className="local-content">
                <div className="head_title">
                    بازی با دوستان
                </div>
                <div className="main-content">
                    {stage === 0 ?

                        <div className="name_input">
                            <div className="label">
                                نام خود را وارد کنید
                            </div>
                            <div className="input">
                                <input type="text"  className="name"/>
                            </div>
                            <div className="button">
                                <button onClick={connect_to_game}>
                                    شروع بازی
                                </button>
                            </div>
                        </div>


                        : stage === 1 ?

                            <div>
                                deck
                            </div>
                            :
                            <div className="img rotate" onClick={show_cart}>
                                {show ?
                                    <div className="role">{cart.name}</div> :
                                    <img src="/images/card.jpg" alt="" />
                                }

                            </div>
                    }
                </div>
                <div className="action" onClick={show_cart}>
                    در انتظار شروع بازی
                </div>
            </div>
        </div>
    );
}

export default LocalGame;