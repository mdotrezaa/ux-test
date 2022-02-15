import React from "react";

export const DeliveryBadges = ({ data, count }) => {
  return (
    <div className='badges--tag'>
      {data.delivery && <span className='delivery--tag'>{data.delivery}</span>}
    </div>
  );
};
