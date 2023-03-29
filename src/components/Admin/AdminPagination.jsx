import React from "react";

const AdminPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center">
      <ul className="mx-auto self-center flex justify-center items-center gap-2 max-w-md  text-gray-500 dark:text-gray-400 h-20 p-4">
        {pageNumbers.map((number) => (
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px self-center">
              <li key={number}>
                <a
                  onClick={() => paginate(number)}
                  href="#"
                  className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {number}
                </a>
              </li>
            </ul>
          </nav>
        ))}
      </ul>
    </nav>
  );
};

export default AdminPagination;
