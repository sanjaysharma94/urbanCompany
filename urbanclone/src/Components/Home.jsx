import homeimg from "./images/homeimg.jpeg";
import { Navbar } from "./Navbar";
import transparentimg from "./images/transparentimg.png";
import expertimg from "./images/expertimg.png";
import euippedimg from "./images/euippedimg.png";
import qualityimg from "./images/qualityimg.png";

import appstoreimg from "./images/appstoreimg.png";
import salonimg from "./images/salonimg.png";
import checkoutimg from "./images/checkoutimg.png";
import uclogo from "./images/uclogo.png";
import playstoreimg from "./images/playstoreimg.png";
import { useState } from "react";
import { Salonathome } from "./Salonathome";
import { Mobileverification } from "./Mobileverification";

export const Home = () => {
  const [salonathomebtn, setSalonathomebtn] = useState(false);
  const [mobileverificationbtn, setMobileverificationbtn] = useState(false);
  return (
    <div className="homepagediv">
      <Navbar />
      <div className="homeimgdiv" style={{}}>
        <div>
          {" "}
          <img src={homeimg}></img>
        </div>
        <div style={{ paddingLeft: "40px" }}>
          <p style={{ color: "white", fontSize: "20px" }}>URBAN COMPANY</p>
          <h1 style={{ color: "white" }}>Quality home services ,on demand</h1>
          <p style={{ color: "white", fontSize: "20px" }}>
            Experienced ,hand-picked professionals to serve you at your doorstep{" "}
          </p>
          <div className="selectdiv">
            <h3>where do you need a service?</h3>
            <select className="citydiv">
              <option>select your city name</option>
              <option value="">Hazaribagh</option>
              <option value="">Banglore</option>
              <option value="">Ranchi</option>
              <option value="">Delhi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="whyurban">
        <div className="whyurbanleft">
          <div>
            <h3>why urban company ?</h3>
          </div>
          <div className="whyurbanbottom">
            <div className="threeurban">
              <div>
                <img src={transparentimg}></img>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: "bold",

                    paddingTop: "30px",
                  }}
                >
                  Transparent pricing
                </div>

                <div>see fixed prices before you book.No hidden charges</div>
              </div>
            </div>
            <div className="threeurban">
              <div>
                <img src={expertimg}></img>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: "bold",

                    paddingTop: "30px",
                  }}
                >
                  Transparent pricing
                </div>

                <div>see fixed prices before you book.No hidden charges</div>
              </div>
            </div>
            <div className="threeurban">
              <div>
                <img src={euippedimg}></img>
              </div>
              <div>
                <div
                  style={{
                    fontWeight: "bold",

                    paddingTop: "30px",
                  }}
                >
                  Transparent pricing
                </div>

                <div>see fixed prices before you book.No hidden charges</div>
              </div>
            </div>
          </div>
        </div>
        <div className="whyurbanright">
          <div className="whyurbanrighttop">
            <div>
              <img src={qualityimg}></img>
            </div>
            <div>
              <h2>100% Quality Assured</h2>
              <div>if you don't love our services,we will make it right</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bookprofessionaldiv">
        <div>
          <div style={{ fontSize: "25px", width: "350px", fontWeight: "bold" }}>
            Book Professionals from your phone{" "}
          </div>
          <div style={{ fontSize: "22px", color: "gray" }}>
            Enter your mobile number to get the app download link
          </div>
          <div className="mobileenterdiv">
            <select name="" id="">
              <option value="">+91</option>
              <option value="">+65</option>
              <option value="">+61</option>
              <option value="">+1</option>
            </select>
            <input type="number" />
            <button>send</button>
          </div>
          <div className="playapp">
            <div>
              <img src={playstoreimg}></img>
            </div>
            <div>
              <img src={appstoreimg} alt="" />
            </div>
          </div>
        </div>
        <div className="bookprofessionalright">
          <div>
            <img src={salonimg} alt="" />
          </div>
          <div>
            <img src={checkoutimg} alt="" />
          </div>
        </div>
      </div>
      <div className="headerdiv">
        <div className="headercontainer">
          <div className="headerdivone">
            <div>About Us</div>
            <div>UC Impact</div>
            <div>Terms & conditions</div>
            <div>privacy policy</div>
            <div>Interest-based Advertising</div>
            <div>Anti Discrimination Policy</div>
            <div>Blog</div>
            <div>Reviews</div>
            <div>Near Me</div>
            <div>Careers</div>
          </div>
          <div className="headerdivtwo">
            <div>Gift Cards</div>
            <div>Contact Us</div>
          </div>
          <div className="hr"></div>
          <div className="headerdivthree">
            <span>Serving in</span>
          </div>
          <div className="headerdivfour">
            <span>AUS</span>
          </div>
          <div className="headerdivfive">
            <div>Melbourne</div>
            <div>Sydney</div>
          </div>
          <div className="headerdivfour">
            <span>IND</span>
          </div>
          <div className="headerdivone">
            <div>Agra</div>
            <div>Ahmedabad</div>
            <div>Amritsir</div>
            <div>Aurangabad</div>
            <div>Banglore</div>
            <div>Delhi-Ncr</div>
            <div>Guntur</div>
            <div>GOwagati</div>
            <div>Ludhiana</div>
            <div>Lucknow</div>
          </div>
          <div className="headerdivone">
            <div>Guntur</div>
            <div>GOwagati</div>
            <div>Ludhiana</div>
            <div>Lucknow</div>
            <div>Agra</div>
            <div>Ahmedabad</div>
            <div>Amritsir</div>
            <div>Aurangabad</div>
            <div>Banglore</div>
            <div>Delhi-Ncr</div>
            <div>Careers</div>
          </div>
          <div className="headerdivone">
            <div>Amritsir</div>
            <div>Aurangabad</div>
            <div>Banglore</div>
            <div>Delhi-Ncr</div>

            <div>Careers</div>
            <div>Amritsir</div>
            <div>Aurangabad</div>
            <div>Banglore</div>
            <div>Delhi-Ncr</div>
            <div>Careers</div>
          </div>
          <div className="headerdivone">
            <div>Agra</div>
            <div>Ahmedabad</div>
            <div>Amritsir</div>
            <div>Aurangabad</div>
            <div>Banglore</div>
            <div>Delhi-Ncr</div>
            <div>Reviews</div>

            <div>Aurangabad</div>
            <div>Banglore</div>
            <div>Delhi-Ncr</div>
            <div>Careers</div>
          </div>
          <div className="headerdivfour">
            <span>KSA</span>
          </div>
          <div className="headerdivfive">
            <div>Jeddah</div>
            <div>Riyaah</div>
          </div>
          <div className="headerdivfour">
            <span>SGP</span>
          </div>
          <div className="headerdivfour">
            <span>Singapure</span>
          </div>
          <div className="headerdivfour">
            <span>UAE</span>
          </div>
          <div className="headerdivfive">
            <div>Abu Dhabi</div>
            <div>Dubai</div>
            <div>Sharjah</div>
          </div>
          <div className="headerdivfour">
            <span>USA</span>
          </div>
          <div className="headerdivfour">
            <span>Austin</span>
          </div>
          <div className="hr"></div>
          <div className="headerbottom">
            <div className="headerbottomimg">
              <img src={uclogo}></img>
            </div>
            <div>2014-22 UrbanClap Technlgies India Pvt.Ltd.</div>
            <div></div>
            <div>
              {mobileverificationbtn == true ? <Mobileverification /> : null}
              <div
                onClick={() => {
                  setMobileverificationbtn(true);
                }}
              >
                <img src={playstoreimg}></img>
              </div>
              {salonathomebtn == true ? <Salonathome /> : null}
              <div
                onClick={() => {
                  setSalonathomebtn(true);
                }}
              >
                <img src={appstoreimg}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
