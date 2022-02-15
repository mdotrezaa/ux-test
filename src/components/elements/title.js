import React from "react";

export const Title = ({ text }) => {
  return <h1 className='text--title'>{text}</h1>;
};

export const ItemTitle = ({ data }) => {
  return <span className='text--item'>{data}</span>;
};
