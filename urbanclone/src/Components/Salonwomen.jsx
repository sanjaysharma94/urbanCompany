import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Salonproducts } from "./Salonproducts";
import { CartContext } from "../contexts/cartContext";
import { ItemContext } from "../contexts/itemContext";
import {Link} from "react-router-dom"
export const Salonwomen = () => {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(products);
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
        <div>
          <button>Bestseller packages</button>
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
          <button>Hair color & care</button>
        </div>
        <div>
          <div style={{ paddingLeft: "20px", boxSizing: "border-box" }}>
            <h2>Besseller Packages</h2>
            <div
              style={{
                width: "93%",
                height: "100px",
                backgroundColor: "blue",
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
              <video
                preload="auto"
                autoPlay
                controls
                src="https://youtu.be/8ERrkAGrMcU"
                style={{ width: "100%", height: "100%" }}
              ></video>
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
            <h2>Make your packages</h2>
            <div
              style={{
                width: "93%",
                height: "100px",
                backgroundColor: "blue",
                color: "white",
                textAlign: "center",
                paddingTop: "30px",
                boxSizing: "border-box",
                marginBottom: "5px",
                fontSize: "22px",
              }}
            >
              Low contact services|single used products
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
              <div>
                TOTAL PRICE:
                <h4>
                  <b>Rs.{cart}</b>
                </h4>
              </div>
              <div>
                TOTAL ITEMS:
                <h4>{item}</h4>
              </div>
            </div>
           <Link to={`/urbanhome/book/services/address`}> <div
              style={{
                backgroundColor: "#304ffe",
                width: "300px",
                height: "40px",
                borderRadius: "5px",
                textAlign: "center",
                marginLeft: "20%",
                marginTop: "40px",
                color: "white",
              }}
            >
              continue
            </div></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
