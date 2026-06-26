// Chunk 4: WebSocket client hook
// Purpose: Connect to WebSocket server and handle incoming messages
"use client";

import { useEffect, useRef } from "react";

export function useWebSocket(onMessage: (msg: string) => void) {
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Connect to WebSocket server
    const socket = new WebSocket("wss://fantastic-spork-5ggx96wgg7vghv4jp-3001.app.github.dev");
    socketRef.current = socket;

    socket.onopen = () => {
      console.log("WebSocket connected");
    };

    socket.onmessage = (event) => {
      onMessage(event.data);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };

    return () => {
      socket.close();
    };
  }, [onMessage]);

  // Function to send messages
  function send(msg: string) {
    socketRef.current?.send(msg);
  }

  return { send };
}
