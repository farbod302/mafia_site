"use client"

import Helper from "@container/helper"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import "./style.scss"
import AddItem from "./pages/AddItem"
import Transactions from "./pages/Transactions"
import ShopTr from "./pages/Shops"
import Charts from "@components/charts/Charts"
const Admin = ({ items }) => {
    const router = useRouter()
    const [auth, setAuth] = useState(false)
    const check_password = async () => {
        let password = sessionStorage.getItem("password")
        if (!password) router.push("/admin_log_in")
        else {
            const data = await Helper.server_post_request("admin/log_in", { password })
            if (!data.status) {
                sessionStorage.removeItem("password")
                router.push("/admin/log_in")
            } else {
                setAuth(true)
            }
        }
    }

    useEffect(() => { check_password() }, [])

    const [page, setPage] = useState(0)

    const check_nav = () => {
        let elements = document.querySelectorAll(".nav-list")
        elements.forEach(element => element?.classList.remove("active-nav"))
        elements[page]?.classList.add("active-nav")
    }

    useEffect(() => { check_nav() }, [page,auth])
    useEffect(() => {
        let elements = document.querySelectorAll(".nav-list")
        elements.forEach((element, index) => { element.addEventListener("click", () => { setPage(index) }) })
    }, [])

    const stages = [
        <AddItem items={items} />,
        <ShopTr />,
        <Transactions />,
        <Charts/>
    ]
    if (!auth) return <div>Auth...</div>
    return (
        <div className="admin">
            <div className="admin-nav">
                <div className="container">
                    <ul>
                        <li className="nav-list" onClick={()=>{setPage(0)}}>افزودن آیتم</li>
                        <li className="nav-list" onClick={()=>{setPage(1)}}>مدیریت آواتار اختصاصی</li>
                        <li className="nav-list" onClick={()=>{setPage(2)}}>فروش سکه</li>
                        <li className="nav-list" onClick={()=>{setPage(3)}}>مدیریت منابع</li>
                    </ul>
                </div>
            </div>
            <div className="pages">
                <div className="container">
                    {stages[page]}
                </div>
            </div>
        </div>
    );
}

export default Admin;