"use client"

import { useContext, useEffect, useState } from "react";
import "./style.scss"
import _cart from "./cart";
import { useRouter } from "next/navigation";
import Helper from "@container/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "@container/Context";

const Cart = () => {


    const [cart, setCart] = useState({})
    const context = useContext(Context)
    const router = useRouter()
    const fetch_cart = async () => {
        const items = await _cart.fetch_user_cart()
        console.log({ items });
        if (!items) return router.push("/")
        setCart(items)
    }

    useEffect(() => {
        fetch_cart()
    }, [])


    const remove_from_cart = async (id) => {
        const data = await _cart.remove_from_cart(id)
        if (data) {
            context.setNavUpdater(prv => !prv)
            fetch_cart()
        }

    }

    const finalize = async () => {
        const status = await _cart.finlaize()
        if (status) {
            context.setNavUpdater(prv => !prv)
            fetch_cart()
        }
    }

    return (
        <div className="user-cart">
            <div className="content container">
                <div className="main-content">
                    {!cart.cart?.length ?
                        <div className="tac">کالایی در سبد خرید شما مجود نمی باشد</div>
                        :
                        <>
                            <div className="items_list">
                                {cart.cart.map(item =>
                                    <div className="each-item" key={item._id}>
                                        <div className="img">
                                            <img src={`${Helper.BASE_URL}/files/${item.image}`} alt="" />
                                        </div>
                                        <div className="name">
                                            نام:   <span>{item.name}</span>
                                        </div>
                                        <div className="price">
                                            قیمت:  <span> {item.price}</span> MVC
                                        </div>
                                        <span className="trash" onClick={() => { remove_from_cart(item._id) }}>
                                            <div className="remove">
                                                <FontAwesomeIcon
                                                    icon={faTrash}
                                                />
                                            </div>
                                            حذف از سبد خرید

                                        </span>
                                    </div>
                                )}
                            </div>
                            <div className="total">
                                مجموع قیمت: <span> MVC {cart.price} </span>
                            </div>
                            <div className="pay">
                                <button onClick={finalize}>
                                    نهایی سازی خرید
                                </button>
                            </div>
                        </>


                    }
                </div>
            </div>
        </div>
    );
}

export default Cart;