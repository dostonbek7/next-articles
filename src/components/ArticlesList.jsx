import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function ArticlesList({ articles }) {
  return (
    <>
      {articles && (
        <ul className="flex flex-col md:flex-row items-center gap-3">
          {articles.map((article) => {
            const { id, title, author, image, body } = article;
            return (
              <li key={id} className="max-w-sm md:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={image} alt="images" />
                <div className="p-5">
                  <h5 className="mb-2 text-xl text-nowrap font-semibold tracking-tight text-gray-800 dark:text-white">
                    {title}
                  </h5>
                  <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">Author: <span className="font-medium text-xl">{author}</span></h5>
                  <p className=" line-clamp-5 mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {body}
                  </p>
                  <Link
                    href={`/articles/${article.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more <FaArrowRightLong className="ml-2"/>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ArticlesList;