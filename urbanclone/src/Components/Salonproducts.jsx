import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { ItemContext } from "../contexts/itemContext";

export const Salonproducts = (props) => {
  const { handlecart } = useContext(CartContext);
  const { handleitem } = useContext(ItemContext);

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
        <div
          className="addbtn"
          onClick={() => {
            handlecart(data.price);
            handleitem(1);
          }}
        >
          <div style={{ borderRadius: "5px", textAlign:"center" ,color:"white",marginTop:"10px",marginRight:"10px",backgroundColor:"#4179ea",border:"none"}}>
            <span style={{ borderRadius: "5px"  }}>ADD</span>
            <span>+</span>
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
