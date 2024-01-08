import ArticlesList from "@/components/ArticlesList";

 export async function getData() {
  const req = await fetch(`http://localhost:2000/articles`);
  const data = await req.json();
  return data;
}

async function Articles() {
  const articles = await getData();
  return (
    <div>
      <h1 className="mb-4 text-2xl">Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}

export default Articles;
