const { default: Helper } = require("@container/helper")

const _registion = {
    async check_phone(phone) {
        const data = await Helper.server_post_request("registion/check", { phone })
        return data
    },
    async send_verfication_code(phone) {
        await Helper.server_post_request("registion/log_in", { phone })
    },

    async sign_up(phone, name) {
        const data = await Helper.server_post_request("registion/sign_up", { phone, name })
        console.log({ fetch_data: data });
        return data
    },

    async check_code(op, code, phone) {
        console.log({code,phone});
        const data = await Helper.server_post_request(
            `registion/${op ? "log_in_confirm_phone" : "sign_up_confirm_phone"}`,
            { code, phone }
        )
        return data

    }
}

export default _registion