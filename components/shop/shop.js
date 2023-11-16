import { toast } from "react-toastify"

const { default: Helper } = require("@container/helper")

const _shop = {

    async add_to_cart(id) {
        let token = localStorage.getItem("token")
        if (!token) return
        const data = await Helper.server_post_request("user/add_to_cart", { item:id, token })
        if(!data.status)return toast.error(data.msg)
        if (data && data.status) return true
    }
}


export default _shop