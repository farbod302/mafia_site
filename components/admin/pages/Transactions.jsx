"use client"

import Helper from "@container/helper";
import { useEffect, useState } from "react";

const Transactions = () => {

    const [transactions, setTransactions] = useState([
        {
            user: "1234",
            gold_amount: 100,
            price: 32000,
            pay_from: "web",
            date: 1692169429894
        },
        {
            user: "1234",
            gold_amount: 100,
            price: 32000,
            pay_from: "app",
            date: 1692169429894
        }
    ])

    const date_convertor = (date) => {
        let s_date = new Date(date)
        let data_str = s_date.toLocaleDateString("fa-IR")
        return data_str
    }


    const price_convertor = (price) => {
        price = `${price}`
        let p_array = price.split("")
        for (let i = p_array.length - 3; i > 0; i = i - 3) {
            p_array.splice(i, 0, ",")
        }
        return "T " + p_array.join("")
    }

    const pays_list = async () => {

        const data = await Helper.server_post_request("admin/get_payments",
            {
                token: localStorage.getItem("token") || null
            })

        setTransactions(data.confirmed_pays)
    }

    useEffect(() => {
        // pays_list()
    }, [])


    return (
        <div>
            <ul className="tr_list">
                <li className="list-head">
                    <div>#</div>
                    <div>کد کاربر</div>
                    <div>مبلغ</div>
                    <div>تعداد سکه</div>
                    <div>پرداخت شده از</div>
                    <div>تاریخ</div>
                </li>
                {transactions.map((tr, i) => {
                    const { user, price, gold_amount, date, pay_from } = tr
                    return (
                        <li>
                            <div>{i + 1}</div>
                            <div>{user}</div>
                            <div>{price_convertor(price)}</div>
                            <div>{gold_amount}</div>
                            <div>{pay_from}</div>
                            <div>{date_convertor(date)}</div>
                        </li>
                    )
                })}
                <li className="total">
                    <div></div>
                    <div>مجموع</div>
                    <div>{price_convertor(transactions.reduce((a,b)=>a+b.price,0))}</div>
                    <div>{transactions.reduce((a,b)=>a+b.gold_amount,0)}</div>
                    <div>
                        {(()=>{
                            let web_pays=transactions.filter(e=>e.pay_from === "web").length
                            let app_pays=transactions.length-web_pays
                            return `web: ${web_pays} ; app: ${app_pays}`
                        })()}
                    </div>
                    <div></div>
                </li>
            </ul>
        </div>
    );
}

export default Transactions;