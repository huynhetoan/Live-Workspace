// Chunk 3: Lift state up for WebSocket syncing
// Purpose: Store text state in a parent component so WebSockets can access it later

import { useState } from "react";
import Editor from "./Editor";

export default function EditorContainer() {
  const [text, setText] = useState("");

  return (
    <Editor text={text} setText={setText} />
  );
}
