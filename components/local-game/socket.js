import { toast } from "react-toastify"

const { io } = require("socket.io-client")

const _socket = {
    connection(setDeck, setStage, setCart) {
        const socket = io("http://185.44.112.9:4090")
        this.socket = socket
        socket.on("get_deck", ({ data }) => {
            setDeck(data)
        })

        socket.on("error", ({ data }) => {
            toast.error(data.msg)
            setStage(0)
        })

        socket.on("cart", ({ data }) => {
            setStage(2)
            setCart(data)
        })

    },

    connect_to_game(name, game_id, setStage) {
        if (!this.socket) return this.connect_to_game(name, game_id, setStage)
        this.socket.emit("handle_local_game", {
            op: "join_local_game",
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