import Header from "../components/Header";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { articles } from "../data/articles";

export default function Home() {
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">
        {sortedArticles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </main>
      <Footer />
    </>
  );
}
