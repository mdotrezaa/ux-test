import React, { useEffect, useRef, useState } from "react";
import data from "../../components/data/dummy.json";
import { ItemTitle, Text } from "../../components/elements/text";
import { Card } from "../../components/card";
import { Slide } from "../../components/slide";
import { useParams } from "react-router-dom";
import { Section } from "../../components/section";
import { Category } from "../../components/elements/category";
import { Price } from "../../components/elements/price";
import Button from "../../components/elements/button";
import { Like } from "../../components/elements/like";
import { Modal } from "../../components/modal";
import FormInput from "../../components/elements/forminput";
import { Cart } from "../../components/cart";

function ProductDetail(props) {
  const [content, setContent] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);
  const { id } = useParams();
  const detail = data.find((item) => item.id == id);
  console.log(detail);

  return (
    <div className='detail-wrap'>
      <Section>
        <div className='detail-inside'>
          <Text headingLevel='span' size={"lg"} type={"bold"}>
            {detail.title}
          </Text>
          <Category data={detail.category} />
          <Price data={detail} />
        </div>
        <Like />
      </Section>
      <Section>
        <div className='detail-inside'>
          <Text headingLevel='span' size={"md"} type={"bold"}>
            Deskripsi Produk
          </Text>
          <p>{detail.desc.substring(0, 100) + "..."}</p>
          <Button
            onClick={() => {
              setDisplayModal(true);
              setContent(1);
            }}
            variant='clear'>
            Selengkapnya
          </Button>
        </div>
      </Section>
      <Section>
        <div className='detail-inside'>
          <div className='detail-title'>
            <Text headingLevel='span' size={"md"} type={"bold"}>
              Pengiriman Tercepat
            </Text>
            <Button variant='clear'>Lihat Semua</Button>
          </div>
          <Slide data={data} sort='badges' badges='' />
        </div>
      </Section>
      <Button
        onClick={() => {
          setDisplayModal(true);
          setContent(2);
        }}
        variant='primary'
        size='lg'
        position='fixed'>
        Tambah Ke Troli
      </Button>

      <Modal
        title={content == 1 ? "Deskripsi Produk" : "Informasi Pesanan"}
        show={displayModal}
        onHide={() => setDisplayModal(false)}>
        {content == 1 ? detail.desc : <Cart data={detail} />}
      </Modal>
    </div>
  );
}

export default ProductDetail;
