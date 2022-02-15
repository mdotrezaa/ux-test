import React, { useState } from "react";
import { ItemTitle } from "./elements/title";
import { Category } from "./elements/category";
import { Stock } from "./elements/stock";
import { Price } from "./elements/price";
import { DeliveryBadges } from "./elements/badges";

export function Modal(props) {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="modal-wrap">
      <div className={`modal ${props.show ? "Show" : ""}`}>
        <div className="modal-content">
          <h3>Deskripsi Produk</h3>
          <button className="close" onClick={props.onHide}>
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
