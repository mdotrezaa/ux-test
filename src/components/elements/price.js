import React from "react";
import data from "../data/dummy.json";

export const Price = ({ data }) => {
  const totalDiscount = (discount) => {
    return Math.abs((1 - discount / 100).toFixed(2));
  };
  return (
    <div className='price--tag'>
      {data.discount > 0 ? (
        <div className='discount'>
          <div>
            <span className='discount--tag'>{data.discount + "%"}</span>
            <span className='real--price'>Rp {data.price}</span>
          </div>
          <span className='price'>
            Rp {data.price * totalDiscount(data.discount)}
          </span>
        </div>
      ) : (
        <span className='real--price'>Rp {data.price}</span>
      )}
    </div>
  );
};
