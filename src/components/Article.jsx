export default function Article({ article }) {
  return (
    <article className="mb-10 pb-6 border-b border-gray-300">
      <h2 className="text-2xl font-semibold mb-1">{article.title}</h2>
      <p className="text-sm text-gray-500 mb-4">
        {new Date(article.date).toLocaleString()}
      </p>
      <img
        src={article.image}
        alt="Illustration"
        className="w-full max-w-xl mx-auto h-auto rounded-md mb-4 object-cover"
      />
      <p className="text-gray-800">{article.content}</p>
    </article>
  );
}
