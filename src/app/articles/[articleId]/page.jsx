import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

async function Article({ params }) {
  async function getDate() {
    const req = await fetch(
      `http://localhost:2000/articles/${params.articleId}`
    );
    const data = await req.json();
    return data;
  }
  const article = await getDate();
  return (
    <div>
      <Link
        className="inline-flex items-center px-3 mb-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        href="/articles"
      >
      <IoArrowBack className="mr-2"/> Back
      </Link>
      <div className="flex justify-center items-center mb-16">
      <li className="max-w-sm md:max-w-[800px] md: min-h-[400px] flex flex-col md:flex-row  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 list-none">
        <div className="w-full">
           <img className="rounded-t-lg h-full object-cover w-full" src={article.image} alt="images" />
        </div>
        <div className="p-5 md:max-w-[400px]">
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
           Title: <span className="font-semibold text-[#191919]">{article.title}</span>
          </h5>
          <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
            Author:
            <span className="ml-2 font-semibold">{article.author}</span>
          </h5>
          <p className=" line-clamp-[10] font-normal text-gray-700 dark:text-gray-400">
            {article.body}
          </p>
        </div>
      </li>
      </div>
    </div>
  );
}

export default Article;
