import React from "react";
import { Text } from "./text";

export const Category = ({ data }) => {
  return (
    <Text color={"grey"} size={"sm"} headingLevel='span'>
      {data}
    </Text>
  );
};
