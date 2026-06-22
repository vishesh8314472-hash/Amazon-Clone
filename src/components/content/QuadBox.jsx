import React from "react";
import { Link } from "react-router-dom";
import MiniGridItem from "./MiniGridItem";

const QuadBox = ({ data }) => {
  return (
    <div className="bg-white p-4 flex flex-col h-[380px]">
      <h2 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-1">
        {data.title}
      </h2>

      <div className="grid grid-cols-2 gap-3 flex-1">
        {data.items.slice(0, 4).map((item, index) => (
          <MiniGridItem key={index} item={item} />
        ))}
      </div>

      <Link
        to="/product"
        className="mt-3 text-sm text-[#007185] hover:text-[#C7511F] hover:underline transition-colors duration-150"
      >
        {data.linkText}
      </Link>
    </div>
  );
};

export default QuadBox;
