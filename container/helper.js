
const Helper = {
    BASE_URL: "http://localhost:4090",
    async server_get_request(path) {
        const { data } = await fetch(`${this.BASE_URL}/${path}`, {
            method: "GET"
        })
        console.log(data);
        return data
    },
    async server_post_request(path, body) {
        const res = await fetch(`${this.BASE_URL}/${path}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()
        return data

    }
}


export default Helper