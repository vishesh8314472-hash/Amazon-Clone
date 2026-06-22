import React from "react";
import { Link } from "react-router-dom";

const MiniGridItem = ({ item }) => {
  return (
    <Link to="/product" className="no-underline">
      <div className="flex flex-col cursor-pointer group">
        <div className="w-full h-32 overflow-hidden bg-gray-100">
          <img
            src={item.img}
            alt={item.caption}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="mt-1.5 text-xs text-gray-800 font-medium leading-tight line-clamp-2">
          {item.caption}
        </p>
      </div>
    </Link>
  );
};

export default MiniGridItem;
