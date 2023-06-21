import "./lp.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faDownload, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
const LandPage = () => {
    return ( 
        <div className="lp">
            <div className="content container">
                <div className="main-content">
                    <div className="title">
                        مافیا ورس
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
                            <div className="icon">
                            <FontAwesomeIcon
                                icon={faShoppingBasket}
                                style={{ fontSize: "2rem", color: "#dc2727" }}
                            />
                            </div>
                            <div className="download-text">دانلود از بازار</div>
                        </div>
                        <div className="each-download">
                            <div className="icon">
                            <FontAwesomeIcon
                                icon={faDownload}
                                style={{ fontSize: "2rem", color: "#dc2727" }}
                            />
                            </div>
                            <div className="download-text">دانلود مستقیم</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default LandPage;