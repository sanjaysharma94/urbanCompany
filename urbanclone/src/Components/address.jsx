import { useState } from "react";

export const Address = () => {
    const [place, setplace] = useState("");

    return (
        <div className="mainDiv">
            <div className="address">
                <p style={{ textAlign: "center" }}>Service</p>
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
                            <a href="https://www.embedgooglemap.net">
                                maps embed
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form className="mx-4 my-5">
                        <div className="mb-3">
                            <label
                                for="exampleInputEmail1"
                                className="form-label"
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
                            <div id="emailHelp" className="form-text">
                                Please Enter your address
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputPassword1"
                                className="form-label"
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
                        <label for="inputEmail4" className="form-label">
                            Name as on card
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                        />
                    </div>

                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">
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
                        <label for="inputZip" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputZip"
                        />
                    </div>

                    <div className="col-md-4">
                        <label for="inputState" className="form-label">
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
                    <p>Total : </p>

                    <div className="col-12">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => {
                                alert("Thanks for taking our service");
                            }}
                        >
                            Pay now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
