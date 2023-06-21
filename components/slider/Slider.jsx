"use client"
import { faArrowLeft, faArrowRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Slider = () => {

    const [slider,setSlider]=useState(0)

    const move_slider=async (side)=>{
        if(slider+side < 0)return
        let window_width=window.innerWidth
        let view=0,rem_to_move=0
        if(window_width>1200){view=2;rem_to_move=31}
        else{view=1;rem_to_move=20}
        if(slider+side > 6-view) {
           move_slider((6-view) * -1)
           return
        }
        let element=document.querySelector(".show-all")
        element.style.transform=`translate(${(slider+side)*rem_to_move}rem)`
        setSlider(prv=>prv+side)
    }

  
    return (
        <div>
            <div className="slider-container">
                <div className="arrow-left" onClick={()=>{move_slider(1)}}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                    />
                </div>
                <div className="arrow-rigth" onClick={()=>{move_slider(-1)}}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                    />
                </div>
                <div className="show-all">
                    {Array(6).fill(0).map((slide, index) =>
                        <div className="each-slide" key={index}>
                            <div className="slide-image">
                                <div className="img">
                                    <img src={`images/avatars/${index}.png`} alt="" />
                                </div>
                            </div>
                            <div className="slide-info">
                                <div className="title">
                                    Lara Craft
                                </div>
                                <div className="info">
                                    <div className="label">
                                        Category:
                                    </div>
                                    <div>
                                        Game , Anime
                                    </div>
                                    <div className="label">
                                        Price:
                                    </div>
                                    <div className="price">
                                        12,000 TMN
                                    </div>
                                </div>
                                <div className="buttons">
                                    <div className="add-to-cart">
                                        <FontAwesomeIcon
                                            icon={faShoppingCart}
                                        />
                                    </div>
                                    <div className="open-avatar">
                                        مشاهده محصول
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Slider;