import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function BottomBar() {
  const items = [
    { name: "All", path: "/" },
    { name: "MX Player", path: "/mx-player" },
    { name: "Sell", path: "/sell" },
    { name: "BestSellers", path: "/bestsellers" },
    { name: "Mobiles", path: "/mobiles" },
    { name: "Today's Deals", path: "/deals" },
    { name: "Customer Service", path: "/customer-service" },
  ];

  return (
    <div className="bg-[#232f3e] text-white text-sm">
      <div className="flex items-center gap-4 px-4 py-2 overflow-x-auto">

        {/* 🔹 All Menu */}
        <div className="flex items-center gap-1 cursor-pointer hover:border border-white px-2 py-1 whitespace-nowrap">
          <AiOutlineMenu size={18} />
          <span className="font-semibold">All</span>
        </div>

        {/* 🔹 Menu Items */}
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="cursor-pointer hover:border border-white box-border px-2 py-1 whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}

      </div>
    </div>
  );
}

export default BottomBar;