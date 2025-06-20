import { useState } from "react";

export default function Reactions() {
  const emojis = ["👍", "👏", "🤝", "❤️", "💡", "😄"];

  const [reactions, setReactions] = useState(
    emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: 0 }), {})
  );

  const [clicked, setClicked] = useState(
    emojis.reduce((acc, emoji) => ({ ...acc, [emoji]: false }), {})
  );

  const handleReact = (emoji) => {
    const alreadyClicked = clicked[emoji];

    setReactions((prev) => ({
      ...prev,
      [emoji]: prev[emoji] + (alreadyClicked ? -1 : 1),
    }));

    setClicked((prev) => ({
      ...prev,
      [emoji]: !alreadyClicked,
    }));
  };

  return (
    <div className="flex flex-wrap gap-3 items-center text-xl mb-6">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          onClick={() => handleReact(emoji)}
          className={`flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100 transition ${clicked[emoji] ? "bg-gray-100" : "hover:bg-gray-100"
            }`}
        >
          <span>{emoji}</span>
          <span className="text-sm text-gray-600">{reactions[emoji]}</span>
        </button>
      ))}
    </div>
  );
}
