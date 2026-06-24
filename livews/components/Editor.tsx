// Chunk 1: Basic text editor UI
// Purpose: Render a full-screen textarea for typing
export default function Editor() {
  return (
    <textarea
      className="w-full h-screen p-4 text-lg outline-none resize-none"
      placeholder="Start typing..."
    />
  );
}
