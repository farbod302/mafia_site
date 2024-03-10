import "./lp.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
const LandPage = () => {
    return (
        <div className="lp">
            <div className="content container">
                <div className="main-content">
                    <div className="title">
                        عصر مافیا
                    </div>
                    <div className="sub-title">
                        بازی جذاب مافیا با امکانات و شخصی سازی های فوق العاده هم اکنون رایگان در دسترس شماست
                    </div>
                    <ul className="list">
                        <li>برگزاری تورنمنت با جوایز نقدی</li>
                        <li>قابلیت ورود به بازی به عنوان گرداننده یا بیننده</li>
                        <li>صد ها آواتار , انیمیشن و ویس لاین مختلف</li>
                    </ul>
                    <div className="downlod-tip">
                        هم اکنون دانلود کنید و از بازی لذت ببرید
                    </div>
                    <div className="download-box">
                        <div className="each-download">
                            <a target="_blank" href="https://myket.ir/app/ir.greendex.mafia?utm_source=search-ads-gift&utm_medium=cpc"><img src="https://myket.ir/core/images/logo/get2-fa-reflect-01.png" /> </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandPage;