import TotalCounter from './utilities/TotalCounter';
import { useState } from 'react';

const TotalComponent: React.FC = () => {
  /* const total = TotalCounter(); */
  const total = TotalCounter();
  return (
    <div className="w-full flex text-center justify-center">
      <p className="font-bold text-xl max-[768px]:text-base ">
        Total Price:{total}$
      </p>
    </div>
  );
};

export default TotalComponent;
