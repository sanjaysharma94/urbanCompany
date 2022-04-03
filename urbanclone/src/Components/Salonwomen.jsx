import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Salonproducts } from "./Salonproducts";
import { CartContext } from "../contexts/cartContext";
import { ItemContext } from "../contexts/itemContext";
import {Link} from "react-router-dom"
import "./style.css"
import ReactPlayer   from "react-player"
export const Salonwomen = () => {
  const [products, setProducts] = useState([]);
  //const [update, setUpdate] = useState(products);
  const { cart } = useContext(CartContext);
  const { item } = useContext(ItemContext);
  console.log("cart", cart);

  const getdata = async () => {
    const response = await axios.get("https://temp-urban.herokuapp.com/");
    // console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getdata();
  }, []);
  //console.log("products", products);

  //const showcontinue = (data) => {
   // setShow(data);
  //};
  return (
    <div className="salonathomecontainer">
      <div
        style={{
          textAlign: "center",
          paddingTop: "20px",
          fontSize: "22px",
          boxSizing: "border-box",
        }}
      >
        Salon at Home
      </div>
      <div className="seconddivsalon">
        
          {/* <button>Bestseller packages</button>
          <br />
          <button>Make your package</button>
          <br />

          <button>Facial and cleanup</button>
          <br />
          <button>Waxing</button>
          <br />
          <button>Threading & face wax</button>
          <br />
          <button>Manicure</button>
          <br />
          <button>Pedicure</button>
          <br />
          <button>Bleach & detan</button>
          <br />
      <button>Hair color & care</button>*/}
      <div className="book_box1">
              <div className="pack" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Bestseller packages</div>
              <div className="pack own_pack" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Make your own package</div>
              <div className="pack Facial" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Facial & Cleanup</div>
              <div className="pack waxing" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Waxing</div>
              <div className="pack face" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Threading & face wax</div>
              <div className="pack mani"style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Manicure</div>
              <div className="pack pei" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Pedicure</div>
              <div className="pack detan"style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }} >Bleech & detan</div>
              <div className="pack hair" style={{
                 margin: "0 28px 12px auto",
                 padding: "7px 12px",
                 width: "fit-content",
                 borderRadius: "4px",
                 fontSize: "12px",
                 fontWeight: "500",
                 lineHeight: "18px",
                 cursor: "pointer",
                 color: "#757575",
                 border: "1px solid #BDBDBD",
                 backgroundColor: "#fff",
                 display: "table",
                 transition: "color .3s ease,border-color .3s ease,background-color .3s ease",
               
              }}>Hair color & care</div>
            </div>        <div style={{maxHeight:"583px",overflow:"scroll"}}>
          <div style={{ paddingLeft: "20px", boxSizing: "border-box" }}>
            <h1 style={{fontSize:"x-large" ,fontWeight:"bolder"}}>Best seller Packages</h1>
            <div
              style={{
                width: "93%",
                height: "100px",
                backgroundColor: "#4179ea",
                color: "white",
                textAlign: "center",
                paddingTop: "30px",
                boxSizing: "border-box",
                marginBottom: "2px",

                fontSize: "22px",
              }}
            >
              Exclusive Packages
            </div>
            <div
              className="videodiv"
              style={{ width: "93%", height: "300px", backgroundColor: "gray" }}
            >
              <ReactPlayer width="100%" height="100%" autoPlay  controls url="https://www.youtube.com/watch?v=FrzDeA8JbOE"/>
            </div>
          </div>
          <div className="appendproduct">
            {products.map((e) => {
              return (
                <div key={e._id}>
                  {e.title == "Complete chocolate waxing" ? (
                    <Salonproducts data={e} />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="appendproduct">
            {products.map((e) => {
              return (
                <div key={e._id}>
                  {e.title == "Face care and rool on wax" ? (
                    <Salonproducts data={e} />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="appendproduct">
            {products.map((e) => {
              return (
                <div key={e._id}>
                  {e.title == "Blowdry" ? <Salonproducts data={e} /> : null}
                </div>
              );
            })}
          </div>
          <div style={{ paddingLeft: "20px", boxSizing: "border-box" }}>
            <h2 style={{fontSize:"x-large" ,fontWeight:"bolder"}}>Make your packages</h2>
            <div
              style={{
                width: "93%",
                height: "100px",
                backgroundColor: "#4179ea",
                color: "white",
                textAlign: "center",
                paddingTop: "30px",
                boxSizing: "border-box",
                marginBottom: "5px",
                fontSize: "22px",
              }}
            >
              Low contact services | single used products
            </div>
          </div>
          <div className="appendproduct">
            {products.map((e) => {
              return (
                <div key={e._id}>
                  {e.title === "Haircut" ? <Salonproducts data={e} /> : null}
                </div>
              );
            })}
          </div>

          <div className="appendproduct">
            {products.map((e) => {
              return (
                <div key={e._id}>
                  {e.title === "Stress Relief Therapy + Free Head Message" ? (
                    <Salonproducts data={e} />
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className="appendproduct">
            {products.map((e) => {
              return (
                <div key={e._id}>
                  {e.title === "Blowdry" ? <Salonproducts data={e} /> : null}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div style={{ width: "100%", height: "500px", border: "1px gray" }}>
            <div className="totalpriceitems">
              {/* <div>
                TOTAL PRICE:
                <h4>
                  <b>Rs.{cart}</b>
                </h4>
              </div>
              <div>
                TOTAL ITEMS:
                <h4>{item}</h4>
              </div> */}
            </div>
           <Link to={`/urbanhome/book/services/address`}> <div
              style={{
                backgroundColor: "#304ffe",
                width: "300px",
                height: "40px",
                borderRadius: "5px",
                textAlign: "center",
                marginLeft: "20%",
            
                position: "fixed",
                bottom: "15px",
                right: "20px",        
                color: "white",
                display: "flex",
                justifyContent:"space-evenly",
                paddingTop: "10px" 

                
              }}
            >
            <div style={{display:"flex", gap:"15px"}} ><div style={{border:"1px solid white",borderRadius:"2px",height:"83%", width:"30px"}}>{item}</div>
            <div> ₹{cart}</div></div>
             <div><h1 style={{fontWeight:"bold"}}>Continue</h1></div>
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
