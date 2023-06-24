"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"
import { faAngleDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Shop = () => {



    const toggle_filter = (index) => {
        let elements = document.querySelectorAll(".each-filter")
        // elements.forEach(element => element.classList.remove("active-filter"))
        elements[index].classList.toggle("active-filter")
    }

    const [filters, setFilters] = useState({
        persent: 5
    })

    return (
        <div className="shop">
            <div className="content container">
                <div className="title">
                    فروشگاه
                </div>
                <div className="shop-main-container">
                    <div className="filters">
                        <div className="cart-container">
                            <div className="sub-title">
                                فیلتر ها
                            </div>
                            <div className="each-filter" >
                                <div className="visibel" onClick={() => { toggle_filter(0) }}>
                                    <div>دسته بندی</div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                        />
                                    </div>
                                </div>
                                <ul className="filter-content">

                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            آواتار
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            انیمیشن
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            ویس لاین
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="each-filter" >
                                <div className="visibel" onClick={() => { toggle_filter(1) }}>
                                    <div>کتگوری</div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                        />
                                    </div>
                                </div>
                                <ul className="filter-content">

                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            انیمه
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            فیلم و سریال
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            بازی های رایانه ای
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            شخصیت های تاریخی
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            ورزش
                                        </div>
                                    </li>
                                    <li>
                                        <div className="check">
                                            <input type="checkbox" />
                                        </div>
                                        <div className="list-label">
                                            ابر قهرمان ها
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="each-filter">
                                <div className="visibel" onClick={() => { toggle_filter(2) }}>
                                    <div>رنج قیمت</div>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faAngleDown}
                                        />
                                    </div>
                                </div>
                                <ul className="filter-content">

                                    <div className="label-container">
                                        <div>کمترین : 5 سکه</div>
                                        <div>بیشترین:1000 سکه</div>
                                    </div>
                                    <div className="input-range">
                                        <input type="range" defaultValue={5} min={5} max={1000} onChange={(e) => { setFilters(prv => { return { ...prv, persent: e.target.value } }) }} />
                                    </div>
                                    <div className="label-status">
                                        از 5 سکه تا {filters.persent} سکه
                                    </div>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="cart-container">
                            <div className="items-container">

                                {Array(7).fill(0).map((e, index) =>
                                    <div className="each-item">
                                        <div className="img">
                                            <img src={`/images/avatars/${index}.png`} alt="" />
                                        </div>
                                        <div className="name">
                                            Geralt of Rivia
                                        </div>
                                        <div className="info">
                                            <div className="categori">
                                                Game , Anime
                                            </div>
                                            <div className="price">
                                                30 MVC
                                            </div>
                                        </div>
                                        <div className="buttons">
                                            <div className="add-to-cart">
                                                <FontAwesomeIcon
                                                    icon={faShoppingCart}
                                                />
                                            </div>
                                            <div className="show-detile">
                                                مشاهده کالا
                                            </div>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shop;