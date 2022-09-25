// import "../App.css"s
import { useState } from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { Home } from "./Home";
export const Address = () => {
    const { cart } = useContext(CartContext);
    const [place, setplace] = useState("");
    return (
        <div className="mainDiv">
            <div className="address">
                <h3 style={{ textAlign: "center" }} className="forColor">
                    Service
                </h3>
                <div className="maps">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe
                                width="500"
                                height="340"
                                id="gmap_canvas"
                                src={`https://maps.google.com/maps?q=${place}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                            ></iframe>
                            <a href="https://123movies-to.org"></a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form className="mx-4 my-5">
                        <div className="mb-3">
                            <label
                                for="exampleInputEmail1"
                                className="form-label forColor"
                            >
                                Address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                onChange={(e) => {
                                    setTimeout(() => {
                                        setplace(e.target.value);
                                    }, 3000);
                                }}
                            />
                            <div id="emailHelp" className="form-text forColor">
                                Please Enter your address
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputPassword1"
                                className="form-label forColor"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <form className="row g-2 mx-4">
                    <div className="col-md-6">
                        <label
                            for="inputEmail4"
                            className="form-label forColor"
                        >
                            Name as on card
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                        />
                    </div>
                    <div className="col-md-6">
                        <label
                            for="inputPassword4"
                            className="form-label forColor"
                        >
                            Card Number
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword4"
                        />
                    </div>
                    {/* ....................................... */}
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label forColor">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                        />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label forColor">
                            Card
                        </label>
                        <select id="inputState" className="form-select">
                            <option value="" selected>
                                Choose...
                            </option>
                            <option value="">Credit Card</option>
                            <option value="">Debit Card</option>
                        </select>
                    </div>
                    <p className="forColor">Total : </p>
                    <div className="col-12">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            // onClick={() => {
                            //    console.log("hi");
                               
                
                            // }}
                        >
                            Pay Now {cart}
                        </button>
                        <div
                            className="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalLabel"
                                        >
                                            Payment Successful
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={() => {
                                               <Link to={<Home/>}></Link>
                                            }}
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        Thanks for taking our service
                                    </div>
                                    <div className="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="imageFlex">
                    <div className="card mx-3 my-3" style={{ width: "18rem" }}>
                        <img
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/home-screen/1603078787966-226e17.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">Saloon Classic</h5>
                            <p className="card-text ">
                                Get Beauty Salon Services from professional
                                beauticians in the comfort of your home. We
                                provide salon at home services like Waxing,
                                Facial, Manicure, Pedicure etc.
                            </p>
                        </div>
                    </div>
                    {/* ................... */}
                    <div className="card mx-3 my-3" style={{ width: "18rem" }}>
                        <img
                            src="https://res.cloudinary.com/urbanclap/image/upload/t_low_res_portfolio_medium,q_auto:low,f_auto/images/growth/home-screen/1603078782132-dfcd55.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Saloon at Home For Women
                            </h5>
                            <p className="card-text">
                                GetLook is one of the Best Home Salon and Spa
                                Services which brings Best Beauty Professionals
                                at your home and provides beauty services at
                                home.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};