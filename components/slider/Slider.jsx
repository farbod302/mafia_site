"use client"
import { faArrowLeft, faArrowRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Context } from "@container/Context";
import Helper from "@container/helper";
import { toast } from "react-toastify";

const Slider = ({ items }) => {

    const [slider, setSlider] = useState(0)

    const move_slider = async (side) => {
        if (slider + side < 0) return
        let window_width = window.innerWidth
        let view = 0, rem_to_move = 0
        if (window_width > 1200) { view = 2; rem_to_move = 31 }
        else { view = 1; rem_to_move = 20 }
        if (slider + side > items.length - view) {
            move_slider((items.length - view) * -1)
            return
        }
        let element = document.querySelector(".show-all")
        element.style.transform = `translate(${(slider + side) * rem_to_move}rem)`
        setSlider(prv => prv + side)
    }
    const context = useContext(Context)

    const add_to_cart = async (id) => {
        let token = localStorage.getItem("token")
        if (!token) return
        const data = await Helper.server_post_request("user/add_to_cart", { item: id, token })
        if (!data.status) return toast.error(data.msg)
        context.setNavUpdater(prv => !prv)
        toast.success(data.msg)
        if (data && data.status) return true
    }


    return (
        <div>
            <div className="slider-container">
                <div className="arrow-left" onClick={() => { move_slider(1) }}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                    />
                </div>
                <div className="arrow-rigth" onClick={() => { move_slider(-1) }}>
                    <FontAwesomeIcon
                        icon={faArrowRight}
                    />
                </div>
                <div className="show-all">
                    {items.map((slide, index) =>
                        <div className="each-slide" key={index}>
                            <div className="slide-image">
                                <div className="img">
                                    <img src={`${Helper.BASE_URL}/files/${slide.image}`} alt={slide.name} />
                                </div>
                            </div>
                            <div className="slide-info">
                                <div className="title">
                                    {slide.name}
                                </div>
                                <div className="info">
                                    <div className="label">
                                        Category:
                                    </div>
                                    <div>
                                        {slide.categorys.toString()}
                                    </div>
                                    <div className="label">
                                        Price:
                                    </div>
                                    <div className="price">
                                        {slide.price} MVC
                                    </div>
                                </div>
                                <div className="buttons">
                                    <div className="add-to-cart" onClick={() => { add_to_cart(slide._id) }}>
                                        <FontAwesomeIcon
                                            icon={faShoppingCart}
                                        />
                                    </div>
                                    <div className="open-avatar" onClick={() => { context.setItem(slide) }}>
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