import React, { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import data from "../../components/data/dummy.json";
import { Text } from "../../components/elements/text";
import { Card } from "../../components/card";
import { Slide } from "../../components/slide";

function Product() {
  return (
    <div className='product-wrap wrap'>
      <Text headingLevel='h1'>Termurah di Seluruh Indonesia</Text>
      <Slide data={data} />

      <Text headingLevel='h1'>Produk Mobile Legends terpopuler</Text>
      <Slide data={data} sort='category' category='Mobile Legends' />
    </div>
  );
}

export default Product;
