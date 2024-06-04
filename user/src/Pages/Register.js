import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";

function Register() {
  //initialize navigate
  const navigate = useNavigate();

  //storing registration data from input fields
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    password: "",
    role: "1",
  });

  //getting textdata from input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // storing textdata from input fields
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    console.log(registrationData);

    try {
      await axios.post("http://localhost:5000/register", registrationData);
      alert("Registration Succesfully!!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)
    }
  };

  return (
    <div id="wrapper" className="dark-scheme">
      {/* content begin */}
      <div className="no-bottom no-top" id="content">
        {/* section begin */}

        {/* section close */}
        <section className="no-top jarallax">
          <div className="de-gradient-edge-top" />

          <div className="container position-relative z1000">
            <div className="row gx-5">
              <div
                className="col-lg-6 offset-lg-3"
                style={{ marginTop: "100px" }}
              >
                <div className="d-sch-table">
                  <h2 className="wow fadeIn text-center">Sign Up</h2>
                  <div className="de-separator" />
                  <form
                    onSubmit={handleRegistrationSubmit}
                    className="form-border position-relative z1000"
                  >
                    <div className="row">
                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="text"
                            name="username"
                            value={registrationData.username}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Your Username"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            onChange={handleChange}
                            value={registrationData.email}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Your Phone"
                            onChange={handleChange}
                            value={registrationData.phone}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="date"
                            className="form-control"
                            name="dob"
                            onChange={handleChange}
                            max={new Date().toISOString().split("T")[0]}
                            value={registrationData.dob}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Your Address"
                            onChange={handleChange}
                            value={registrationData.address}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Your Password"
                            onChange={handleChange}
                            value={registrationData.password}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn-main">
                        Sign Up
                      </button>
                      <p className="mt-2 login-form__footer">
                        Have account?{" "}
                        <Link to="/login" className="text-primary">
                          Sign In{" "}
                        </Link>
                        now
                      </p>
                    </div>
                  </form>
                  <div className="d-deco" />
                </div>
              </div>
            </div>
          </div>
          <div className="de-gradient-edge-bottom" />
        </section>
        <section aria-label="section" className="no-top sm-hide">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h4>Follow Us</h4>
                <div className="spacer-20" />
                <div className="social-icons big">
                  <a href="/#">
                    <i className="fa-brands fa-facebook fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-twitter fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-linkedin fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-pinterest fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa-brands fa-rss fa-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* content close */}
      <a href="/#" id="back-to-top">
        {""}
      </a>
      {/* footer begin */}
      <Footer />
      {/* footer close */}
    </div>
  );
}

export default Register;
