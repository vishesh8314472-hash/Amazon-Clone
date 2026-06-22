import React from 'react';

const ProductBox = ({ data, onPrev, onNext }) => {
  return (
    <div className="bg-white p-4 flex flex-col h-[380px]">
      <h2 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-1">
        {data.title}
      </h2>

      <div className="relative flex-1 overflow-hidden bg-gray-50 group">
        <img
          src={data.productImage}
          alt={data.productName}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <button
          onClick={onPrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          aria-label="Previous"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border border-gray-300 rounded-full w-7 h-7 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
          aria-label="Next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="mt-3 space-y-0.5">
        <p className="text-sm text-gray-800 font-medium leading-snug line-clamp-2">
          {data.productName}
        </p>
        <div className="flex items-baseline gap-2 mt-1">
          <span className="text-base font-bold text-gray-900">{data.price}</span>
          <span className="text-sm text-gray-400 line-through">{data.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
