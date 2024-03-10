
const Helper = {
    // BASE_URL: "http://mafia.altf1.ir:4090",
    BASE_URL: "https://mafia.gamingverse.ir",
    // BASE_URL: "http://localhost:4090",
    async server_get_request(path) {
        const  data  = await fetch(`${this.BASE_URL}/${path}`, {
            method: "GET"
        })
        let res=await data.json()
        return res
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

    },
    pick_input_value(id){
        let element=document.querySelector("#"+id)
        return element?.value || ""
    }
}


export default Helper