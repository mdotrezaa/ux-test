import React from "react";
import { ItemTitle } from "./elements/title";
import { Category } from "./elements/category";
import { Stock } from "./elements/stock";
import { Price } from "./elements/price";
import { DeliveryBadges } from "./elements/badges";

export function Card({ data }) {
  return (
    <div className='card'>
      <img src={require("../assets/images/" + data.image)} />
      <div className='card--top'>
        <ItemTitle data={data.title} />
        <Category data={data.category} />
      </div>
      <div className='card--body'>
        <Stock data={data} />
        <Price data={data} />
        <DeliveryBadges data={data} />
      </div>
    </div>
  );
}
