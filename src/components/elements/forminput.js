import React, { useState } from "react";

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputSize] = useState(props.size);
  const { inputValue, onChange } = props;

  return (
    <>
      {props.label ? <label> {props.label + ":"}</label> : ""}
      <input
        type={inputType}
        value={inputValue}
        name='input-form'
        onChange={onChange}
        class={`inputclass input-${inputSize}`}
      />
    </>
  );
}
export default FormInput;
