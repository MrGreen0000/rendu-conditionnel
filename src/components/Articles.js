import Article from "./Article";

function Articles({ displayArticle }) {
  const articles = [
    {
      title: "Un titre",
      content: "Un contenu",
    },
    {
      title: "Un titre 2",
      content: "Un contenu 2",
    },
    {
      title: "Un titre 3",
      content: "Un contenu 3",
    },
  ];
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {articles.map((article) => (
        <div className="mb-20">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Articles;
