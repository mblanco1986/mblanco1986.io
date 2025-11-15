// Servidor WebRTC muy básico con PeerJS
const express = require("express");
const { ExpressPeerServer } = require("peer");
const app = express();
const server = require("http").createServer(app);
const peerServer = ExpressPeerServer(server, { debug: true });

app.use("/peerjs", peerServer);
app.get("/", (req, res) => res.send("Servidor WebRTC activo."));

server.listen(3000);
