"use client"

import { useEffect, useState } from "react";
import "./style.scss"
import _socket from "./socket";

const LocalGame = () => {

    const [show, setShow] = useState(false)
    const [stage, setStage] = useState(0)
    const [cart, setCart] = useState(null)
    const [deck, setDeck] = useState(null)


    const show_cart = () => {
        const img = document.querySelector(".img")
        setTimeout(() => {
            setShow(!show)
        }, 150)
        img.classList.toggle("rotate")

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

                        <div>
                            name
                        </div>


                        : stage === 1 ?

                            <div>
                                deck
                            </div>
                            :
                            <div className="img rotate" onClick={show_cart}>
                                {show ?
                                    <div className="role">{cart}</div> :
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