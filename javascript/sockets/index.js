const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
let people = [];

io.on("connection", (socket) => {
  console.log("new connection");
  people.push(socket.id);
  console.log(people);
  socket.on("disconnect", () => {
    people = people.filter((p) => p !== socket.id);
    console.log("disconnected");
  });
  socket.on("chatmsg", (msg) => {
    console.log(socket.id);
    const person = people.filter((p) => p !== socket.id );
    console.log(person);
    io.to(person[0]).emit("chatmsg",msg);
    console.log(msg);
  });
});

server.listen(8080, () => {
  console.log("Listening...");
});

