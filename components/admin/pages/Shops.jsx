"use client"

import Helper from "@container/helper";
import { useEffect, useState } from "react";

const ShopTr = () => {

    const [list, setList] = useState([])
    const [update, setUpdate] = useState(false)
    const get_request = async () => {
        const { requests } = await Helper.server_get_request("admin/avatar_upload")
        const clean_requests = requests.map(e => {
            const { review_id, image } = e
            return { review_id, image }
        })
        setList(clean_requests)
        console.log({ clean_requests });
    }

    useEffect(() => {
        get_request()
    }, [update])

    const handel_avatar = async ({ review_id, status }) => {
        await Helper.server_post_request("admin/review_avatar", { review_id, status })
        setUpdate(!update)
    }

    return (
        <div>
            <div className="title">
                مدیریت آواتار اختصاصی
            </div>
            <div className="list-avatar">
                {list.map(file => {
                    return (
                        <div>
                            <div className="img">
                                <img src={file.image} alt="" />
                            </div>
                            <div className="op">
                                <button onClick={()=>{handel_avatar({review_id:file.review_id,status:true})}}>قبول</button>
                                <button onClick={()=>{handel_avatar({review_id:file.review_id,status:false})}}>رد کردن</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ShopTr;