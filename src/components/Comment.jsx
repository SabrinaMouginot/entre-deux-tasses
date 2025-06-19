import { useState } from "react";

export default function Comment() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setComments((prev) => [...prev, comment.trim()]);
    setComment("");
  };

  return (
    <div className="mt-6">
      {/* Liste des commentaires */}
      {comments.length > 0 && (
        <div className="mb-4">
          <h3 className="text-sm font-semibold">Pseudo</h3>
            {comments.map((c, index) => (
              <p key={index} className="list-disc list-inside text-sm text-gray-700 break-words">{c}</p>
            ))}
        </div>
      )}

      {/* Formulaire de commentaire */}
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Votre commentaire..."
          className="w-full p-2 border border-gray-300 rounded h-20"
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
