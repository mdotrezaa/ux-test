import React, { useState } from "react";

export const Text = (props) => {
  const Heading = props.headingLevel;
  const { children, type, color, size } = props;
  return (
    <Heading className={`text-${type} text-${color} text-${size}`}>
      {children}
    </Heading>
  );
};

export const ItemTitle = ({ data }) => {
  return <span className='text--item'>{data}</span>;
};
