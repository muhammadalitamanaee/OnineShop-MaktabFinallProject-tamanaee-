import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../Axios";
import { Link } from "react-router-dom";
import "./similarProducts.css";
const SimilarProducts = ({ id, brand }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/products${brand ? `?brand=${brand}` : ""}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div class="flex overflow-x-auto w-full h-[350px] p-4 rounded-[32px] bg-gray-50">
      {products.map((product) => (
        <Link className="px-4 " key={product.id} to={`/:${product.id}`}>
          <div className="w-[255px] h-[170px] rounded-md">
            <img src={`${baseUrl}${product.image}`} className="w-full h-full" alt={product.name} />
          </div>
          <div className="text-center mt-2">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <div className="mb-2">
              <p value={product.price} />
            </div>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">جزییات</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SimilarProducts;
