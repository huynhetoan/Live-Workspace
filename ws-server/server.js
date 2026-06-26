// Chunk 5: WebSocket server for Codespaces
// Purpose: Accept WebSocket connections through the GitHub tunnel

import { WebSocketServer } from "ws";
import http from "http";

// Create an HTTP server (required for Codespaces)
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server running");
});

// Attach WebSocket server to the HTTP server
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (msg) => {
    console.log("Received:", msg.toString());
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// IMPORTANT: Listen on 0.0.0.0 so Codespaces can tunnel the port
server.listen(3001, "0.0.0.0", () => {
  console.log("WebSocket server running on ws://localhost:3001");
});
