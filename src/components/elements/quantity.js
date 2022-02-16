import React, { useState } from "react";
import Button from "../../components/elements/button";
import FormInput from "./forminput";

function Quantity(props) {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <div className='quantity-group'>
      <Button onClick={decrement} variant={"circle"}>
        <i class='bx bx-minus'></i>
      </Button>
      <FormInput
        type={"text"}
        size={"sm"}
        inputValue={count}
        onChange={handleChange}
      />
      <Button onClick={increment} variant={"circle"}>
        <i class='bx bx-plus'></i>
      </Button>
    </div>
  );
}
export default Quantity;
