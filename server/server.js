const express = require('express');
const path = require('path');
const socketIO = require("socket.io")
const http = require("http")

const app = express();
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

let io = socketIO(server)
io.on("connection", client => {
    console.log("Client connected")

    client.emit("sendMessage", {
        user: "Administrador",
        message: "Welcome to my App"
    })

    client.on("disconnect", () => {
        console.log("Client disconnected")
    })

    // Listen client
    client.on("sendMessage", data => {
        console.log(data)
    })
})

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Server running port ${ port }`);
});