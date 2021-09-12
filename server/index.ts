import express from "express";
import http from "http";
import cors from "cors";

const App = express();
const server = http.createServer(App);
const IO = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

App.use(cors());

const PORT = process.env.PORT || 5000;

App.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(PORT, () => console.log("Server is running!!!!!!!!!🚀"));
