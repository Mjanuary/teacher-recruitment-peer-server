const express = require("express");
const cors = require("cors");
const { ExpressPeerServer } = require("peer");

const SERVER_PORT = 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const server = require("http").Server(app);

app.get("/peer-server", (req, res) => {
  res.send({ msg: "Welcome to the peer server" });
});

server.listen(SERVER_PORT, () => {
  console.log(`Peer Server is running on port ${SERVER_PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

peerServer.on("connection", (client) => {
  // console.log(
  //   "succesfully connecter to peer js server ------------------------------ "
  // );
  // console.log(client.id);
});

app.use("/peerjs", peerServer);
