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
        position: "تولید محتوا"
    },
    {
        img: "",
        name: "پیمان یوسفی",
        position: "مدیر پروژه"
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
                        تیم ما در حوضه های مختلف بلاک چین,کریپتو و بازی سازی فعالیت داشته و از سال 2019 فعالیت خود را شروع کرده<br />
                        راه های ارتباط با  مجموعه گرین ورس:<br />
                        <div className="links">
                            <div className="each-link">
                                <div className="icon">
                                    <FontAwesomeIcon
                                        icon={faGlobe}
                                    />
                                </div>
                                <div className="value">
                                    greenverse.ir
                                </div>
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
                            <div className="each-link">
                                <div className="icon">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                    />
                                </div>
                                <div className="value">
                                    0243-533-4343
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        some image
                    </div>
                </div>
                <div className="team-info">
                    <div className="label">
                        معرفی اعضا
                    </div>
                    <div className="members">
                        {team.map(member => {
                            const { name, image, position } = member
                            return (
                                <div className="each-member">
                                    <div className="image">
                                        {image}
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