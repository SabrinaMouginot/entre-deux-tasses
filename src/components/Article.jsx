import Comment from "./Comment";
import Reactions from "./Reactions";
import { useEffect, useRef, useState } from "react";
import ImpressionCounter from "./ImpressionCounter";

export default function Article({ article, user, onLogin }) {
  const [views, setViews] = useState(0);
  const articleRef = useRef(null);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);


  useEffect(() => {
      const node = articleRef.current;
      
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasBeenSeen) {
            setViews((prev) => prev + 1);
            setHasBeenSeen(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [hasBeenSeen]);

  return (
    <article ref={articleRef} className="mb-10 pb-6 border-b border-gray-300">
      <h2 className="text-2xl font-semibold mb-1">{article.title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(article.date).toLocaleString()}
      </p>
      <p className="text-gray-800 mb-4">{article.content}</p>
      <img
        src={article.image}
        alt="Illustration"
        className="w-full max-w-xl mx-auto h-auto rounded-md mb-4 object-cover"
      />

      <ImpressionCounter count={views} />
      <Reactions />

      {user ? (
        <Comment />
      ) : (
        <div className="mt-6 bg-yellow-100 text-yellow-800 p-4 rounded text-sm text-center">
          <p>Veuillez vous connecter pour commenter.</p>
          <button
            onClick={onLogin}
            className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Se connecter
          </button>
        </div>
      )}
    </article>
  );
}
