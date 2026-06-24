// Chunk 4: Add WebSocket client to the editor container
// Purpose: Connect to WebSocket server and prepare for syncing
"use client";


import { useState, useCallback } from "react";
import Editor from "./Editor";
import { useWebSocket } from "@/lib/useWebSocket";

export default function EditorContainer() {
  const [text, setText] = useState("");

  // Handle incoming WebSocket messages
  const handleMessage = useCallback((msg: string) => {
    console.log("Received from server:", msg);
  }, []);

  // Connect WebSocket
  const { send } = useWebSocket(handleMessage);

  return (
    <Editor text={text} setText={setText} />
  );
}
