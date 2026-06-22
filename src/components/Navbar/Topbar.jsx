import React, { useState } from "react";
import { Link } from "react-router-dom";
import amazonLogo from "../../assets/amazon_logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

const Topbar = ({ cartCount = 0 }) => {
  const [language, setLanguage] = useState("EN");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: "EN", label: "English" },
    { code: "HI", label: "Hindi" },
    { code: "PN", label: "Punjabi" },
  ];
  return (
    <div className="bg-gray-900 w-full font-sans">
      <div className="flex flex-wrap md:flex-nowrap items-center md:justify-between px-2 sm:px-4 py-2 text-white gap-2 sm:gap-3">
        {/* LEFT: Logo + Location */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 order-1">
          {/* Logo */}
          <Link
            to="/"
            className="cursor-pointer border border-transparent hover:border-white px-1 sm:px-2 py-1 transition-all no-underline"
          >
            <img
              src={amazonLogo}
              alt="Amazon Logo"
              className="h-8 sm:h-10 object-contain"
            />
          </Link>

          <div className="flex items-center gap-1 cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all">
            <HiOutlineLocationMarker size={20} className="flex-shrink-0" />
            <div className="text-xs leading-tight">
              <p className="text-gray-400">Deliver to</p>
              <p className="font-semibold">Ghaziabad</p>
            </div>
          </div>
        </div>

        {/* CENTER: Search Bar */}
        <div className="flex w-full md:w-auto md:flex-1 md:max-w-[600px] order-3 md:order-2 md:mx-3">
          <select className="bg-gray-300 text-black text-xs sm:text-sm px-2 sm:px-3 py-2 outline-none rounded-l-md font-normal flex-shrink-0">
            <option>All</option>
          </select>

          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-1 px-3 py-2 outline-none text-black bg-white text-sm placeholder-gray-500"
          />

          <button className="bg-[#febd69] hover:bg-[#f3a847] px-3 sm:px-5 py-2 text-black font-semibold rounded-r-md text-sm transition-colors cursor-pointer flex-shrink-0">
            Search
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 order-2 md:order-3 ml-auto md:ml-0">
          <Link
            to="/account"
            className="text-xs cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all no-underline text-white"
          >
            <p className="text-gray-400">Hello, sign in</p>
            <p className="font-semibold leading-tight">Account</p>
          </Link>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="text-xs cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all text-white flex items-center gap-1"
            >
              <span className="font-semibold">{language}</span>
              <span>▼</span>
            </button>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-1 bg-white text-black rounded shadow-lg z-50 min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguageDropdown(false);
                    }}
                    className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors ${
                      language === lang.code ? "bg-gray-200 font-semibold" : ""
                    }`}
                  >
                    {lang.code} - {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/orders"
            className="hidden md:flex flex-col text-xs cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all no-underline text-white"
          >
            <p className="text-gray-400">Returns</p>
            <p className="font-semibold leading-tight">& Orders</p>
          </Link>

          <Link
            to="/cart"
            className="flex items-center gap-1 cursor-pointer border border-transparent hover:border-white px-2 py-1 transition-all no-underline text-white relative"
          >
            <FiShoppingCart size={22} className="flex-shrink-0" />
            <div className="hidden sm:flex flex-col items-start">
              <span className="font-semibold text-sm">Cart</span>
              {cartCount > 0 && (
                <span className="text-xs text-yellow-400 font-bold">
                  ({cartCount})
                </span>
              )}
            </div>
            {cartCount > 0 && (
              <span className="sm:hidden absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
