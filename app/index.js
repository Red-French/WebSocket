// This is two servers, handling different protocols (http, ws), sharing the same port

// The WebSocket server is "attached" to the HTTP server. This means both servers share
// the same port (8082), and they handle different types of requests:
//   HTTP requests are served by the HTTP server.
//   WebSocket requests (ws://) are handled by the WebSocket server.

import express from "express";
import { WebSocketServer } from "ws";
import http from "http";

// Express server
const app = express();
const port = process.env.PORT || 8082;
app.use(express.static("public")); // Serve static files from 'public' directory

// The WebSocketServer from the ws library expects an http.Server or https.Server instance,
// not an Express instance. Express does not directly expose the underlying HTTP server, so
// you must create an HTTP server explicitly and bind it with Express then pass it to the
// WebSocket server.
const server = http.createServer(app); // create HTTP server; bind with Express for WebSocketServer to use

// WebSocket server
const wsServer = new WebSocketServer({ server });

wsServer.on("connection", (socket) => {
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

server.listen(port, () => {
  console.log(`HTTP and WebSocket server running on http://localhost:${port}`);
});
