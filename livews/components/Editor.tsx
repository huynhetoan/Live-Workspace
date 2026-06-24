// Chunk 2: Add typing state
// Purpose: Store the user's text in React state so we can sync it later

import { useState } from "react";

export default function Editor() {
  // Local state for the text the user types
  const [text, setText] = useState("");

  return (
    <textarea
      className="w-full h-screen p-4 text-lg outline-none resize-none"
      placeholder="Start typing..."
      value={text} // textarea shows the state
      onChange={(e) => setText(e.target.value)} // update state on typing
    />
  );
}
