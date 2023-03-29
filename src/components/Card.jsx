import React from "react";
const Card = (props) => {
  const { src, content } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center flex-col">
      <img src={src} className="w-full h-[150px]" />
      <h2>{content}</h2>
    </div>
  );
};
export default Card;
