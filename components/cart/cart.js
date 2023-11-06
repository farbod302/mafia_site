const { default: Helper } = require("@container/helper")

const _cart = {
    async fetch_user_cart() {
        const token = localStorage.getItem("token")
        if (!token) return false
        const data = await Helper.server_post_request("user/user_cart", { token })
        if (!data.status) return false
        return data.data
    },

    async remove_from_cart(id) {
        const token = localStorage.getItem("token")
        if (!token) return false
        const data = await Helper.server_post_request("user/remove_from_cart", { token, item:id })
        if (!data.status) return false
        return true
    },

    async finlaize(){
        const token = localStorage.getItem("token")
        if (!token) return false
        const data = await Helper.server_post_request("user/shop_finalize", { token })
        if (!data.status) return false
        return true
    }
}

export default _cart    