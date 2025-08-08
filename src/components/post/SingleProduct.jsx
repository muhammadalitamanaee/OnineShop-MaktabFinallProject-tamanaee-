import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "../Axios";
import axios from "axios";
import { addCommas } from "@persian-tools/persian-tools";
import { cartAction } from "../../store/cart-store";
import SimilarProducts from "./SimilarProducts";
import { useDispatch } from "react-redux";
import Image from "next/image";
const ProductDetails = ({ product }) => {
  const [posts, setPosts] = useState([]);
  const { ProductId } = useParams();
  console.log(ProductId.split(":")[1]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);
  const [img, setImg] = useState();
  const [pictureData, setPictureData] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3001/products/${ProductId.split(":")[1]}`)
      .then((res) => {
        setPosts(res.data), setImage(res.data.image);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [ProductId]);

  const dispatch = useDispatch();
  const addProductHandler = (id, price, image, name, brand) => {
    dispatch(cartAction.addToCart({ id, price, image, name, brand }));
  };
  console.log(image);

  return (
    <>
      {!loading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex flex-col gap-10" dir="rtl">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[230px] w-[350px] rounded-lg bg-gray-100 mb-4">
                <div className="  rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <Image src={`${baseUrl}${image}`} className="w-full h-full" alt="" />{" "}
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {posts.name}{" "}
              </h2>
              <p className="text-gray-500 text-sm">
                تولید از شرکت{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  {posts.brand}{" "}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3 gap-2">
                    <span className="text-indigo-400 mr-1 mt-1">تومان</span>
                    <span className="font-bold text-indigo-600 text-3xl">{addCommas(` ${posts.price}`)} </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">تخفیف 12%</p>
                </div>
              </div>

              <p className="text-gray-500">
                Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum
                corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.
              </p>

              <div className="flex py-4 space-x-4 justify-center items-center gap-4">
                <div className="relative flex justify-center items-center gap-2">
                  <div className="text-center  block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    تعداد{" "}
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200  h-14 flex  justify-center items-center">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-[#046C4E] hover:bg-[#25866b] text-white"
                  onClick={() => {
                    addProductHandler(posts.id, posts.price, image, posts.name, posts.brand);
                  }}
                >
                  اضافه به سبد خرید{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-2">کالاهای مشابه</h2>
            <hr className="w-[150px] h-[7px] rounded-2xl bg-[#0D6EFD] mx-auto mb-2" />
            <SimilarProducts id={posts.id} brand={posts.brand} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
