import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeaderBord = () => {
    return (
        <div className="leader-bord">
            <div className="content container">
                <div className="chart">
                    <div className="chart-content">
                        <div className="chart-head">
                            <div>نفرات برتر شهر</div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faChessKing}
                                    style={{fontSize:30}}
                                />
                            </div>
                            <div>مشاهده همه ...</div>
                        </div>
                        <div className="player-list">
                            <ul className="each-player">
                                <li>رتبه</li>
                                <li></li>
                                <li>نام</li>
                                <li>امتیاز</li>
                                <li>تعدادبازی</li>
                            </ul>
                            {Array(10).fill(0).map((player, index) =>
                                <ul key={index} className="each-player each-player-list">
                                    <li>{index + 1}</li>
                                    <li>
                                        <div className="img">
                                            <img src={index <= 6 ? `images/avatars/${index}.png` : "/images/mafia.png"} alt="" />
                                        </div>
                                    </li>
                                    <li>فربود علی اکبری</li>
                                    <li className="score">1856</li>
                                    <li className="score">345</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeaderBord;