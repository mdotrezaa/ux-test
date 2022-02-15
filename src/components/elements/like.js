import React, { useState } from "react";

export const Like = ({ data }) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
  };

  return (
    <span className='btn-heart' onClick={handleClick}>
      {like ? (
        <i class='bx bxs-heart' style={{ color: "red" }}></i>
      ) : (
        <i class='bx bx-heart'></i>
      )}
    </span>
  );
};
