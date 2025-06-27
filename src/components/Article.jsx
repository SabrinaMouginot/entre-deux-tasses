import Comment from "./Comment";
import Reactions from "./Reactions";
import { useEffect, useState } from "react";

export default function Article({ article }) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    // Simule une impression dès que l'article s'affiche
    setViews((prev) => prev + 1);
  }, []);

  return (
    <article className="mb-10 pb-6 border-b border-gray-300">
      <h2 className="text-2xl font-semibold mb-1">{article.title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(article.date).toLocaleString()}
      </p>
      <p className="text-xs text-gray-400 mb-4">{views} impressions</p>
      <img
        src={article.image}
        alt="Illustration"
        className="w-full max-w-xl mx-auto h-auto rounded-md mb-4 object-cover"
      />
      <p className="text-gray-800">{article.content}</p>

      <Reactions />
      <Comment />
    </article>
  );
}
