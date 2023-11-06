
"use client"
import Helper from "@container/helper"
import "./style.scss"
import { useRouter } from "next/navigation"
const LogIn = () => {
    const router=useRouter()
    const log_in =async () => {
        const pass = document.getElementById("pass")
        const password = pass.value
        const data =await Helper.server_post_request("admin/log_in", { password })
        if (!data.status) { pass.value = "" }
        else{
            sessionStorage.setItem("password",password)
            router.push("/admin")
        }
    }
    return (
        <div className="admin-log-in">
            <div className="content">
                <div className="label">
                    Password
                </div>
                <div className="input">
                    <input type="password" id="pass"/>
                </div>
                <div className="button">
                    <button onClick={log_in}>
                        Dig In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;