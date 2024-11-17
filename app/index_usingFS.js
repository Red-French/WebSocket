// This is two servers, handling different protocols (http, ws), sharing the same port

// The WebSocket server is "attached" to the HTTP server. This means both servers share
// the same port (8082), and they handle different types of requests:
//   HTTP requests are served by the HTTP server.
//   WebSocket requests (ws://) are handled by the WebSocket server.

import http from "http";
import { WebSocketServer } from "ws";
import fs from "fs";
import path from "path";

// HTTP server
const server = http.createServer((req, res) => {
  const filePath = path.resolve("./public/index.html");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading the page");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

// WebSocket server
const wss = new WebSocketServer({ server });
wss.on("connection", (socket) => {
  console.log("New client connected.");
  socket.send("Welcome to the WebSocket server!");

  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`Roger that! ${message}`);
  });

  socket.on("close", () => {
    console.log("Client has disconnected.");
  });
});

server.listen(8082, () => {
  console.log(
    "HTTP server and WebSocket server running on http://localhost:8082"
  );
});
