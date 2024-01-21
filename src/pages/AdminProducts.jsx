import React from "react";
import { useState, useEffect } from "react";
import EditProduct from "../components/Admin/EditProduct";
import AdminPosts from "../components/Admin/AdminPosts";

import AdminPagination from "../components/Admin/AdminPagination";

import axios from "axios";

export default function AdminProducts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [queryString, setQueryString] = useState(undefined);
  const [sortedProduct, setSortedProduct] = useState(false);
  const [postsPerPage] = useState(10);
  const queryStringHandler = (search) => {
    setQueryString(search), console.log(queryString);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/products${queryString ? `?name=${queryString}` : ""}`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [posts, queryString]);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // sorting product by price
  const sortProduct = () => {
    setSortedProduct(true);
  };

  // // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <AdminPosts
        posts={currentPosts}
        loading={loading}
        queryStringHandler={queryStringHandler}
        value={queryString}
        sortProduct={sortProduct}
        sortedProduct={sortedProduct}
      />
      <AdminPagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </>
  );
}
