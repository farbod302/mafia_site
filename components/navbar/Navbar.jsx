"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faShoppingCart,
    faCoins
} from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss"
import "./style.scss"
import { useContext, useEffect, useState } from "react";
import { Context } from "@container/Context";
import SelectedItem from "@components/selected-item/SelectedItem";
import Helper from "@container/helper";
import { useRouter } from "next/navigation";
const Navbar = () => {

    const router = useRouter()
    const [profile, setProfile] = useState(null)
    const context = useContext(Context)
    useEffect(() => {
        const token = localStorage.getItem("token")
        fetch_profile(token)
    }, [context.navUpdater])

    const fetch_profile = async (token) => {
        if (!token) return
        const { data } = await Helper.server_post_request("user/land_screen_data", { token })
        setProfile(data)
    }


    useEffect(() => {
        let window_w = window.outerWidth
        if (window_w < 600) return
        let key = 120
        let font_size = window_w / key
        document.querySelector("html").style.fontSize = font_size + "px"
    }, [])





    const toggle_nav = () => {
        document.querySelector(".navbar").classList.toggle("nav-active")
    }
    return (
        <body>
            <nav className={`navbar ${style.nav} `}>
                <div className="content container">
                    <div className="rigth">
                        <ul onClick={toggle_nav}>
                            <li className="toggle-nav" >
                                <FontAwesomeIcon
                                    icon={faBars}
                                    style={{ fontSize: "1.3rem", color: "#fff" }}
                                />
                            </li>
                            <li>صفحه اصلی</li>
                            <li>فروشگاه</li>
                            <li>درباره ما</li>
                        </ul>
                    </div>
                    <div className="left">
                        {profile ?
                            <div className="nav-info">


                                <div className="coin" onClick={() => router.push("/gold")}>
                                    {profile.gold} MVC   <FontAwesomeIcon
                                        icon={faCoins}
                                        style={{ fontSize: "1.3rem", color: "#d44848" }}
                                    />
                                </div>

                                <div className="cart">
                                    <FontAwesomeIcon
                                        icon={faShoppingCart}
                                        style={{ fontSize: "1.3rem", color: "#fff" }}
                                    />
                                    <div className="cart_count">
                                        0
                                    </div>
                                </div>


                            </div>
                            :
                            <div>ورود / ثبت نام</div>
                        }
                    </div>
                </div>
                {context.item ? <SelectedItem /> : null}

            </nav>
        </body>
    );
}

export default Navbar;