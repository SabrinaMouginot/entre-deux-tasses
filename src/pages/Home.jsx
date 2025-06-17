import { useState } from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import Footer from "../components/Footer";
import NewArticleModal from "../components/NewArticleModal";
import { articles } from "../data/articles";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Header />

      {/* Bouton + */}
      <div className="flex justify-end items-center px-4 mt-4">
        <button
          onClick={() => setShowModal(!showModal)}
          className="flex items-center gap-2 text-black hover:text-gray-700"
        >
          <span
            className={`text-2xl inline-block transition-transform duration-300 ${showModal ? "rotate-45" : "rotate-0"}`}
          >
            +
          </span>
          <span className="text-sm">
            NOUVEL ARTICLE
          </span>
        </button>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Liste des articles */}
        {sortedArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modale */}
      {showModal && <NewArticleModal onClose={() => setShowModal(false)} />}
    </>
  );
}

