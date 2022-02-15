import React, { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import { Card } from "./card";

export function Slide({ data, sort, category, badges }) {
  const ref = useRef(null);

  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <div ref={ref} onMouseDown={onMouseDown} className='slide'>
      {sort == "category"
        ? data
            .filter((item) => item.category == category)
            .map(function (item) {
              return <Card data={item} />;
            })
        : sort == "badges"
        ? data
            .filter((item) => item.delivery)
            .map(function (item) {
              return <Card data={item} />;
            })
        : data.map(function (item) {
            return <Card data={item} />;
          })}
    </div>
  );
}
