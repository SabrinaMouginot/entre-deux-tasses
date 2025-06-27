import { useState } from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import Footer from "../components/Footer";
import NewArticleModal from "../components/NewArticleModal";
import { articles as initialArticles } from "../data/articles";
import TagList from "../components/TagList";

export default function Home({ user }) {
  const [showModal, setShowModal] = useState(false);
  const [articleList, setArticleList] = useState(initialArticles);
  const [searchTags, setSearchTags] = useState([]);

  const isAdmin = user?.isAdmin;

  const handleAddArticle = (newArticle) => {
    setArticleList((prev) => [...prev, newArticle]);
    setShowModal(false);
  };

  const addTag = (tag) => {
    if (!tag.trim() || searchTags.includes(tag.trim().toLowerCase())) return;
    setSearchTags((prev) => [...prev, tag.trim().toLowerCase()]);
  };

  const removeTag = (tag) => {
    setSearchTags((prev) => prev.filter((t) => t !== tag));
  };

  const filteredArticles = articleList.filter((article) =>
    searchTags.every(
      (tag) =>
        article.title.toLowerCase().includes(tag) ||
        article.content.toLowerCase().includes(tag)
    )
  );

  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Header onAddTag={addTag} />

      {/* Zone des tags fixe sous le Header */}
      <TagList tags={searchTags} removeTag={removeTag} />

      {/* Bouton Nouvel article visible que pour admin */}
      {isAdmin && (
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
            <span className="text-sm">NOUVEL ARTICLE</span>
          </button>
        </div>
      )}

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Liste des articles */}
        {sortedArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </main>

      {/* Footer */}
      <Footer />

      {/* Modale */}
      {showModal && <NewArticleModal onClose={() => setShowModal(false)} onPublish={handleAddArticle} />}
    </>
  );
}

