import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss"

import { faGlobe, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"




const team = [
    {
        img: "",
        name: "فربد علی اکبری",
        position: "برنامه نویس سرور"
    },
    {
        img: "",
        name: "محمد حدادیان",
        position: "برنامه نویس اپلیکیشن"
    },
    {
        img: "",
        name: "مهدی آقامحمدی",
        position: "تولید محتوا و دیزاین"
    },
    {
        img: "",
        name: "پیمان یوسفی",
        position: "مدیر پروژه"
    },
    {
        img: "",
        name: "بهزاد احدی",
        position: "صداپیشه"
    },
    {
        img: "",
        name: "علی داودی",
        position: "کوچبنگ"
    },

]


const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="container">
                <div className="title">
                    درباره ما
                </div>
                <div className="about-us-content">
                    <div className="info">
                        این بازی توسط تیم Green verse طراحی و تقدیم شما شده است<br />
                        تیم ما از اواسط سال ۱۴۰۰ شروع به طراحی و برنامه نویسی این بازی کرده و در تاریخ یکم اسفند ۱۴۰۲ این بازی به انتشار رسید
                        راه های ارتباط با  مجموعه گرین ورس:<br />
                        <div className="links">
                            <div className="each-link">
                                <div className="icon">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                    />
                                </div>
                                <a className="value" href="https://greenverse.ir" target="_blank">
                                    greenverse.ir
                                </a>
                            </div>
                            <div className="each-link">
                                <div className="icon">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                    />
                                </div>
                                <div className="value">
                                    support@greenverse.ir
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className="image">
                        <img src="/images/green.png" alt="" />
                    </div>
                </div>
                <div className="team-info">
                    <div className="label">
                        معرفی اعضا
                    </div>
                    <div className="members">
                        {team.map((member,index) => {
                            const { name, image, position } = member
                            return (
                                <div className="each-member">
                                    <div className="image">
                                        <img src={`/images/about-us/${index}.jpg`} alt="" />
                                    </div>
                                    <div className="name">
                                        {name}
                                    </div>
                                    <div className="position">
                                        {position}
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;