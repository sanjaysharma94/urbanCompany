import { useState } from "react";
import { CartContext } from "../contexts/cartContext";

export const Selectedproducts = (props) => {
  let data = props.data;
  console.log(data);
  return (
    <div className="selectedproducts">
      <div className="imgdivselected"></div>
      <div className="infirmationselected"></div>
    </div>
  );
};
