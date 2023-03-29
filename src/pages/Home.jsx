import { useState, useEffect } from "react";

import Posts from "../components/Posts";
import Pagination from "../components/Pagination";

import Carousel from "../components/Carousel";
import axios from "axios";
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3001/products")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Carousel className="z-[0]" />

      <hr className="w-full h-[1px] bg-zinc-400 mb-4 mt-4" />
      <Posts posts={currentPosts} loading={loading} className="mb-3" />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        className="mb-3"
      />
    </>
  );
}

export default App;
