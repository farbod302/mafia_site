"use client"
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Helper from "@container/helper";

const LeaderBord = () => {

    const [board, setBoard] = useState([])

    const get_leader_board = async () => {
        const {data} = await Helper.server_get_request("ranking")
        const {ranking}=data
        const clean_ranking=ranking.map(user=>{
            const {idenity,ranking:user_ranking,win,lose,avatar,session_rank}=user
            return {
                name:idenity,
                score:user_ranking.rank,
                cnt:win+lose,
                avatar:avatar.avatar
            }
        })
        setBoard(clean_ranking)
    }

    useEffect(() => {
        get_leader_board()
    }, [])


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
                                    style={{ fontSize: 30 }}
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
                            {board.map((player, index) =>
                                <ul key={index} className="each-player each-player-list">
                                    <li>{index + 1}</li>
                                    <li>
                                        <div className="img">
                                            <img src={`${Helper.BASE_URL}/${player.avatar}`} alt="" />
                                        </div>
                                    </li>
                                    <li>{player.name.slice(0,15)}</li>
                                    <li className="score">{player.score}</li>
                                    <li className="score">{player.cnt}</li>
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