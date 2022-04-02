import { useState } from "react";
import uclogo from "./images/uclogo.png";
import Login from "./Login";
export const Navbar = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="homenavbar">
      <div className="leftcontent">
        <div>
          <img src={uclogo}></img>
        </div>
      </div>
      <div className="rightcontent">
        <span>Blog</span>
        <span>
          <u>Register as a professional</u>
        </span>
        <span
          onClick={() => {
            setLogin(true);
          }}
        >
          Login/Signup
        </span>
      </div>
      {login === true ? <Login closelogin={setLogin} /> : null}
    </div>
  );
};
