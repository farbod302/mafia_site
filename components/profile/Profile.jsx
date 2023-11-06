"use client"

import { useEffect, useState } from "react";
import "./style.scss"
import _profile from "./profile";
import Helper from "@container/helper";

const Profile = () => {

    const [data, setData] = useState({
        profile: {},
        items: []
    })

    useEffect(() => {

        _profile.get_user_data(setData)

    }, [])

    return (
        <div className="profile">
            <div className="content container">
                <div className="title">
                    پروفایل
                </div>
                <div className="head">
                    <div className="image">

                        <div className="img">
                            hi
                        </div>

                    </div>
                    <div className="info">
                        <ul>
                            <li>
                                <div className="label">
                                    نام:
                                </div>
                                <div className="data">
                                    {data.profile.idenity?.name}
                                </div>
                            </li>
                            <li>
                                <div className="label">
                                    امتیاز:
                                </div>
                                <div className="data">
                                    {data.profile.ranking?.rank}
                                </div>

                            </li>
                            <li>
                                <div className="label">
                                    رتبه:
                                </div>
                                <div className="data">
                                    24567 از 2345356 نفر
                                </div>

                            </li>
                            <li>
                                <div className="label">
                                    Win Rate:
                                </div>
                                <div className="data">
                                    {(() => {
                                        try {
                                            const { win, lose } = data.profile.points
                                            return win / (win + lose) || 0
                                        }
                                        catch {
                                            return 0
                                        }
                                    })()
                                    }
                                </div>

                            </li>
                            <li>
                                <div className="label">
                                    Win / Lose / Total:
                                </div>
                                <div className="data ltr">
                                    {(() => {
                                        try {
                                            const { win, lose } = data.profile.points
                                            return `${win} / ${lose} / ${win + lose}`
                                        }
                                        catch {
                                            return "0 / 0 / 0"
                                        }
                                    })()
                                    }
                                </div>

                            </li>
                        </ul>
                    </div>

                </div>
                <div className="profile-nav">
                    <div className="active-profile-nav">آیتم های من</div>
                    <div>دستاورد های من</div>
                </div>
                <div className="list">
                    <ul className="items-list">
                        
                        {data.items.map(item =>
                            <li key={item._id}>
                                <div className="image">
                                    <img src={`${Helper.BASE_URL}/files/${item.image}`} alt="" />
                                </div>
                                <div className="inf">
                                    <div className="name">
                                        {item.name}
                                    </div>
                                    <div className="choose ">
                                        انتخاب برای پروفایل
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;