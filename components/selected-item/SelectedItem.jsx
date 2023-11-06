import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "@container/Context";
import Helper from "@container/helper";
const SelectedItem = () => {


    const context = useContext(Context)
    const [item, setItem] = useState({})
    const [rend, setRand] = useState([  ])
    const fetch_random_items = async (id) => {
        let random_items = await Helper.server_get_request("items/same_items/" + id)
        setRand(random_items.items)

    }
    useEffect(() => {
        const { item } = context
        fetch_random_items(item._id)
        setItem(item)
    }, [context.item])


    return (
        <div className="selected-item">
            <div className="item-content container">
                <div className="close" onClick={() => { context.setItem(null) }}>
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
                            <img src={`${Helper.BASE_URL}/files/${item.image}`} alt={item.name} />
                        </div>
                    </div>
                    <div className="left">
                        <div className="name tac">
                            {item.name}
                        </div>
                        <div className="info">
                            <div className="label">
                                کتگوری:
                            </div>
                            <div className="info-text">
                                {item.categorys?.toString() || ""}
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
                                {item.price} MVC
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
                            {rend.map(item =>
                                <div key={item.name} onClick={()=>{context.setItem(item)}}>
                                    <div className="img">
                                        <img src={`${Helper.BASE_URL}/files/${item.image}`} alt="" />
                                    </div>
                                </div>
                            )}
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedItem;