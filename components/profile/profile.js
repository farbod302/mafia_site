import Helper from "@container/helper.js"

const _profile = {
    async get_user_data(setData) {

        const token = localStorage.getItem("token")
        if (!token) return
        let promises = [
            Helper.server_post_request(`user/profile`, { token }),
            Helper.server_post_request(`user/items_list`, { token }),
        ]
        let datas = await Promise.all(promises)
        setData({ profile: datas[0].data || [], items: datas[1].data.items || [] })
    }
}

export default _profile