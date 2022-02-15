import React, { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import data from "../../components/data/dummy.json";
import { Title } from "../../components/elements/title";
import { Card } from "../../components/card";
import { Slide } from "../../components/slide";

function Product() {
  return (
    <div className='product-wrap wrap'>
      <Title text={"Termurah di Seluruh Indonesia"} />
      <Slide data={data} />

      <Title text={"Produk Mobile Legends terpopuler"} />
      <Slide data={data} sort='category' category='Mobile Legends' />
    </div>
  );
}

export default Product;
