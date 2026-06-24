// Chunk 3: Render the EditorContainer instead of Editor
// Purpose: Prepare the app for WebSocket syncing

import EditorContainer from "@/components/EditorContainer";

export default function Home() {
  return <EditorContainer />;
}
