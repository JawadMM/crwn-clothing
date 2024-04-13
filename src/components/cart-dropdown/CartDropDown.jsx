import React from "react";
import "./cart-dropdown.scss";

import Button from "../button/Button";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
