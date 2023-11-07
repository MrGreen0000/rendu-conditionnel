import Article from "./Article";

function Articles() {
  const articles = [
    {
      title: "Un titre",
      content: "Un contenu",
      published: true,
    },
    {
      title: "Un titre 2",
      content: "Un contenu 2",
      published: false,
    },
    {
      title: "Un titre 3",
      content: "Un contenu 3",
      published: false,
    },
  ];
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>
      {articles.map((p) => (
        <Article key={p.title} title={p.title} content={p.content} />
      ))}
    </div>
  );
}

export default Articles;
