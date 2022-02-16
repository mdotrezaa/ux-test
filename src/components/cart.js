import React, { useState } from "react";
import { ItemTitle } from "./elements/text";
import { Category } from "./elements/category";
import { Stock } from "./elements/stock";
import { Price } from "./elements/price";
import { DeliveryBadges } from "./elements/badges";
import FormInput from "./elements/forminput";
import Quantity from "./elements/quantity";
import Button from "./elements/button";

export function Cart(props) {
  const { data } = props;
  return (
    <div className='cart-wrap'>
      <div className='cart-top'>
        <div className='cart-inside'>
          <ItemTitle data={data.title} />
          <Category data={data.category} />
        </div>
        <div className='cart-inside'>
          <Price data={data} />
          <Stock data={data} />
        </div>
      </div>
      <div className='cart-body'>
        <FormInput
          label={"Catatan untuk penjual (optional)"}
          type={"text"}
          size={"lg"}
        />
      </div>
      <div className='cart-bottom'>
        <Quantity />
        <div className='button-inline'>
          <Button variant={"secondary"} size={"lg"}>
            Tambah Troli
          </Button>
          <Button variant={"primary"} size={"lg"}>
            Beli Langsung
          </Button>
        </div>
      </div>
    </div>
  );
}
