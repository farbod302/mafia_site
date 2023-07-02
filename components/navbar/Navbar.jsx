"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.scss"
import "./style.scss"
import { useContext, useEffect, useState } from "react";
import { Context } from "@container/Context";
import SelectedItem from "@components/selected-item/SelectedItem";
const Navbar = () => {
    const [token, setToken] = useState(null)
    const context = useContext(Context)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) setToken(token)
    }, [context.navUpdater])


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
                        {token ?
                            <FontAwesomeIcon
                                icon={faUser}
                                style={{ fontSize: "1rem", color: "#fff" }}
                            />
                            :
                            <div>ورود / ثبت نام</div>
                        }
                    </div>
                </div>
               {context.item ?  <SelectedItem />:null}

            </nav>
        </body>
    );
}

export default Navbar;