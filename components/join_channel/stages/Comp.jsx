import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comp = () => {
    return (
        <div className="comp-stage">

            <div className="icon">
                <FontAwesomeIcon
                    icon={faCheck}
                    style={{ fontSize: 40, color: "rgb(66, 200, 66)" }}
                />
            </div>
            <div className="text">
                ثبت نام شما با موفقیت انجام شد.<br/>
                شما <span>200</span> سکه از مدیر کانال بابت خوش آمد گویی دریافت کردید<br/>
                شما می توانید بازی عصر مافیا را با یکی از روش های زیر دانلود کنید
            </div>
            <ul className="links">
            <li>
                <div className="download-icon">
                    <img src="https://www.iranroid.com/wp-content/uploads/2019/02/Bazaar-Icon.png" alt="" />
                </div>
                <div className="text">
                    دانلود از بازار
                </div>
            </li>
            <li>
            <div className="download-icon">
                    <img src="https://barato.ir/wp-content/uploads/2018/03/myket.png" alt="" />
                </div>
                <div className="text">
                    دانلود از مایکت
                </div>
            </li>
            <li>
            <div className="download-icon">
                    <img src="https://cdn.pixabay.com/photo/2016/12/18/13/45/download-1915753_960_720.png" alt="" />
                </div>
                <div className="text">
                    دانلود مستقیم
                </div>
            </li>
            </ul>

        </div>
    );
}

export default Comp;