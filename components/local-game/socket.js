const { io } = require("socket.io-client")

const _socket = {
    connection(setDeck, setStage, setCart, game_id) {
        const socket = io("http://192.168.1.107:4090")
        this.socket = socket
        socket.on("get_deck", ({ data }) => {
            setDeck(data)
        })

        socket.on("error", ({ data }) => {
            alert(data.msg)
        })

        socket.on("cart", ({ data }) => {
            setStage(2)
            setCart(data)
        })

    },

    connect_to_game(name, game_id, setStage) {

        this.socket.emit("handle_local_game", {
            op: "join_game",
            data: {
                name,
                game_id
            }
        })
        setStage(1)

    },

    get_deck() {
        this.socket.emit("get_deck")
    }
}


export default _socket