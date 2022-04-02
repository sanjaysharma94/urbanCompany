import { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../contexts/cartContext";

export const Salonproducts = (props) => {
  const {handlecart}=useContext(cartContext);
  let data = props.data;
  console.log(data);
  return (
    <div className="titlediv">
      <h3 style={{ color: "green" }}>{data.title}</h3>
      <div className="imgdivsalon">
        <div>
          <img src={data.images[0]}></img>
        </div>
        <div>
          <img src={data.images[1]}></img>
        </div>
        <div>
          <img src={data.images[2]}></img>
        </div>
      </div>
      <div className="infowithbtn">
        <div className="information">
          <div style={{ fontWeight: "bold" }}>{data.title}</div>
          <div style={{ fontWeight: "bold", color: "green" }}>
            Rating:{data.rating}
          </div>
          <div style={{ fontWeight: "bold" }}>{data.price}</div>
        </div>
        <div className="addbtn">
          <div
            onClick={() => {
              handlecart()
            }}
            style={{ borderRadius: "5px" }}
          >
            <span>ADD</span>
            <span style={{ marginLeft: "15px" }}>+</span>
          </div>
        </div>
      </div>

      <div>
        <ul>
          <li>{data.details[0]}</li>
          <li>{data.details[1]}</li>
        </ul>
      </div>
    </div>
  );
};
