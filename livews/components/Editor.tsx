// Chunk 3: Editor now receives text + setText from parent
// Purpose: Make Editor a controlled component for real-time syncing

interface EditorProps {
  text: string;
  setText: (value: string) => void;
}

export default function Editor({ text, setText }: EditorProps) {
  return (
    <textarea
      className="w-full h-screen p-4 text-lg outline-none resize-none"
      placeholder="Start typing..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}
