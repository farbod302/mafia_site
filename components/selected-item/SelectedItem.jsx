import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
const SelectedItem = () => {
    return (
        <div className="selected-item">
            <div className="item-content container">
                <div className="close">
                    <FontAwesomeIcon
                        icon={faTimes}
                    />
                </div>
                <div className="title">
                    مشخصات کالا
                </div>
                <div className="main-content">
                    <div className="rigth">
                        <div className="img">
                            <img src="/images/avatars/1.png" alt="" />
                        </div>
                    </div>
                    <div className="left">
                        <div className="name tac">
                            Artor Morgan
                        </div>
                        <div className="info">
                            <div className="label">
                                کتگوری:
                            </div>
                            <div className="info-text">
                                Game , Anime
                            </div>
                        </div>

                        <div className="info">
                            <div className="info-text tac">
                                این عکس بر روی عکس پروفایل شما در بازی نمایش داده خواهد شد
                            </div>

                        </div>
                        <div className="price">
                            <div>قیمت:</div>
                            <div className="price-self tac ltr">
                                300 MVC
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                            />
                            افزودن به سبد خرید
                        </div>
                        <div className="sub-title tac">
                            کالا های مشاهبه
                        </div>
                        <div className="sugestion">
                            <div>
                                <div className="img">
                                    <img src="/images/avatars/4.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="img">
                                    <img src="/images/avatars/2.png" alt="" />
                                    
                                </div>
                            </div>
                            <div>
                                <div className="img">
                                    <img src="/images/avatars/3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;