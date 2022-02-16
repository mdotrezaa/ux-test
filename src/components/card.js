import React from "react";
import { Text } from "./elements/text";
import { Category } from "./elements/category";
import { Stock } from "./elements/stock";
import { Price } from "./elements/price";
import { DeliveryBadges } from "./elements/badges";

export function Card({ data }) {
  return (
    <div className='card'>
      <a href={`/product/` + data.id}>
        <img src={require("../assets/images/" + data.image)} />
        <div className='card--top'>
          <Text headingLevel='span' type={"bold"} size={"md"}>
            {data.title}
          </Text>
          <Category data={data.category} />
        </div>
        <div className='card--body'>
          <Stock data={data} />
          <Price data={data} />
          <DeliveryBadges data={data} />
        </div>
      </a>
    </div>
  );
}
