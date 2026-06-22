import React from "react";
import { Link } from "react-router-dom";

const ProductBar = ({ data }) => {
  return (
    <div className="bg-white px-4 pt-4 pb-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900 leading-tight">
          {data.title}
        </h2>
        <Link
          to="/product"
          className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline transition-colors duration-150 whitespace-nowrap"
        >
          See all
        </Link>
      </div>

      <div
        className="flex flex-row gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {data.images.map((item, index) => (
          <Link
            key={index}
            to="/product"
            className="no-underline flex-shrink-0 flex flex-col items-center gap-1.5 cursor-pointer group"
          >
            <div className="w-32 h-32 bg-gray-100 overflow-hidden">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-xs text-gray-800 font-medium text-center w-32 leading-tight line-clamp-2">
              {item.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductBar;
