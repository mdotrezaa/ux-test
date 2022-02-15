import React from "react";

export const Stock = ({ data, count }) => {
  return (
    <div className='stock--tag'>
      {data.stock == "available" ? (
        <span className='available'>Stok {data.stockcount}+ </span>
      ) : (
        <span className='limited'>Stok {data.stockcount}</span>
      )}
    </div>
  );
};
