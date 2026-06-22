import React from 'react';
import QuadBox from '../content/QuadBox';
import quadBoxData from '../../data/quadBoxData';

const QuadBoxSection = () => {
  return (
    <section className="px-4 md:px-6 py-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {quadBoxData.map((data, index) => (
          <QuadBox key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default QuadBoxSection;
