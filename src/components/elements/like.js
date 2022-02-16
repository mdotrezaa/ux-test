import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Like = ({ data }) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
    {
      like
        ? toast("Produk dihapus dari Favorit.")
        : toast("Kamu Berhasil Menambahkan Favorit.");
    }
  };

  return (
    <>
      <ToastContainer
        position='bottom-center'
        hideProgressBar={true}
        theme={"dark"}
      />
      <span className='btn-heart' onClick={handleClick}>
        {like ? (
          <i class='bx bxs-heart' style={{ color: "red" }}></i>
        ) : (
          <i class='bx bx-heart'></i>
        )}
      </span>
    </>
  );
};
