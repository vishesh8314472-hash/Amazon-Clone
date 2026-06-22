import React from 'react';
import ProductBar from '../content/ProductBar';
import productBarData from '../../data/productBarData';

const ProductBarSection = () => {
  return (
    <section className="px-4 md:px-6 flex flex-col gap-3">
      {productBarData.map((data, index) => (
        <ProductBar key={index} data={data} />
      ))}
    </section>
  );
};

export default ProductBarSection;
