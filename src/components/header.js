import React from "react";
import { ItemTitle } from "./elements/title";
import { Category } from "./elements/category";
import { Stock } from "./elements/stock";
import { Price } from "./elements/price";
import { DeliveryBadges } from "./elements/badges";
import Button from "./elements/button";
import { useNavigate } from "react-router-dom";

export function Header({ data }) {
  return (
    <nav>
      <div className='logo'>
        <img src={require("../assets/images/Logo.png")} />
      </div>
    </nav>
  );
}

export function HeaderProduct(props) {
  const history = useNavigate();
  return (
    <header>
      <div className='background--header'>
        <img src={require("../assets/images/card-img.jpg")} />
      </div>
      <div className='button-inline'>
        <Button onClick={() => history(-1)} variant='icon' size='sm'>
          <i class='bx bx-left-arrow-alt'></i>
        </Button>
        <div className='button-inline'>
          <Button variant='icon' size='sm'>
            <i class='bx bx-share-alt'></i>
          </Button>
          <Button variant='icon' size='sm'>
            <i class='bx bx-cart'></i>
          </Button>
        </div>
      </div>
    </header>
  );
}
