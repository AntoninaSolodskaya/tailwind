import React, { useState, useEffect } from "react";

const data = [
  { id: 1, title: "test" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
  { id: 4, title: "test4" },
  { id: 5, title: "test5" },
  { id: 6, title: "test6" },
  { id: 7, title: "test6" },
  { id: 8, title: "test6" },
  { id: 9, title: "test6" },
  { id: 10, title: "test6" },
  { id: 11, title: "test11" },
  { id: 12, title: "test12" },
  { id: 13, title: "test13" },
  { id: 14, title: "test14" },
  { id: 15, title: "test15" },
  { id: 16, title: "test16" },
  { id: 17, title: "test16" },
  { id: 18, title: "test16" },
  { id: 19, title: "test126" },
  { id: 20, title: "test20" }
];

const Todo = () => {
  const [posts, setPosts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  //const isDisable = posts.length > pageNumbers.length;
  const isActive = pageNumbers.some(active => active === currentPage);
  console.log(isActive);
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {currentPosts.map(item => (
        <div key={item.id} className="post">
          <h3>
            {item.title} - {item.id}
          </h3>
        </div>
      ))}

      <nav className="flex">
        {pageNumbers.map((number, i) => {
          const act = currentPage === number;
          return (
            <div key={i}>
              <button
                type="button"
                //disabled={true}
                className={`py-2 px-4 mx-2 rounded-full text-gray-400 ${
                  act ? "bg-pink-500" : "bg-purple-600"
                }`}
                // ${
                //   isDisable
                //     ? "bg-purple-600 opacity-25 pointer-events-none"
                //     : "bg-purple-600"
                // }`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </div>
          );
        })}
      </nav>
    </>
  );
};

export default Todo;
