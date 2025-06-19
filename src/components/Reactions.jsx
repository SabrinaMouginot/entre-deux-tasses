import { useState } from "react";

export default function Reactions() {
  const [reactions, setReactions] = useState({
    "👍": 0,
    "👏": 0,
    "🤝": 0,
    "❤️": 0,
    "💡": 0,
    "😄": 0,
  });

  const handleReact = (emoji) => {
    setReactions((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + 1,
    }));
  };

  return (
    <div className="flex flex-wrap gap-3 items-center text-xl mb-6">
      {Object.entries(reactions).map(([emoji, count]) => (
        <button
          key={emoji}
          onClick={() => handleReact(emoji)}
          className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition"
        >
          <span>{emoji}</span>
          <span className="text-sm text-gray-600">{count}</span>
        </button>
      ))}
    </div>
  );
}
