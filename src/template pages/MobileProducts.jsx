import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { addCommas } from "@persian-tools/persian-tools";
import { baseUrl } from "../components/Axios";
import FiveStars from "../components/FiveStar";
import Image from "next/image";
import Link from "next/link";

const MobileProducts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/products`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  // Change page
  return (
    <ul className=" list-none grid grid-cols-12 gap-3 w-full  text-gray-500  dark:text-gray-400">
      {posts
        .filter((index) => index.phone === "true")
        .map((post) => (
          <li key={post.id} className="col-span-4 mx-auto ">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link href={`/:${post.id}`}>
                {" "}
                <div>
                  <Image className="p-8 rounded-t-lg" src={baseUrl + post.image} alt="product image" />
                </div>
              </Link>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{post.name} </h5>
                </a>
                <FiveStars />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {addCommas(`${post.price}`)}
                    </span>
                    <span className="text-lg font-bold text-zinc-600 dark:text-white">تومان </span>
                  </div>
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    افزودن به سبد{" "}
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default MobileProducts;
