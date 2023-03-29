import React, { useState } from "react";

import Card from "./Card";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className=" list-none grid grid-cols-12 gap-3 w-full  text-gray-500  dark:text-gray-400">
      {posts.map((post) => (
        <Card
          id={post.id}
          name={post.name}
          price={post.price}
          image={post.image}
          brand={post.brand}
        />
      ))}
    </ul>
  );
};

export default Posts;
