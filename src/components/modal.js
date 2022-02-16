import React, { useState } from "react";

export function Modal(props) {
  return (
    <div className='modal-wrap'>
      <div className={`modal ${props.show ? "Show" : ""}`}>
        <div className='modal-content'>
          <h3>{props.title}</h3>
          <button className='close' onClick={props.onHide}>
            X
          </button>
          {props.children}
        </div>
      </div>
      <div
        className={`overlay ${props.show ? "Show" : ""}`}
        onClick={props.onHide}
      />
    </div>
  );
}
