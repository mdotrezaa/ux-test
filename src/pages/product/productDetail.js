import React, { useEffect, useRef, useState } from "react";
import data from "../../components/data/dummy.json";
import { ItemTitle, Title } from "../../components/elements/title";
import { Card } from "../../components/card";
import { Slide } from "../../components/slide";
import { useParams } from "react-router-dom";
import { Section } from "../../components/section";
import { Category } from "../../components/elements/category";
import { Price } from "../../components/elements/price";
import Button from "../../components/elements/button";
import { Like } from "../../components/elements/like";
import { Modal } from "../../components/modal";

function ProductDetail(props) {
  const [displayModal, setDisplayModal] = useState(false);
  const { id } = useParams();
  const detail = data.find((item) => item.id == id);
  console.log(detail);

  return (
    <div className='detail-wrap'>
      <Section>
        <div className='detail-inside'>
          <ItemTitle data={detail.title} />
          <Category data={detail.category} />
          <Price data={detail} />
        </div>
        <Like />
      </Section>
      <Section>
        <div className='detail-inside'>
          <h4>Deskripsi Produk</h4>
          <p>{detail.desc.substring(0, 100) + "..."}</p>
          <Button onClick={()=> setDisplayModal(true)} variant='clear'>
            Selengkapnya
          </Button>
        </div>
      </Section>
      <Section>
        <div className='detail-inside'>
          <div className='detail-title'>
            <h4>Pengiriman Tercepat</h4>
            <Button variant='clear'>
            Lihat Semua
          </Button>
          </div>
          <Slide data={data} sort='badges' badges='' />
        </div>
      </Section>
      <Button variant='primary' size='lg'>
        Tambah Ke Troli
      </Button>
      <Modal show={displayModal} onHide={()=> setDisplayModal(false)}>
        {detail.desc}
      </Modal>
    </div>
  );
}

export default ProductDetail;
