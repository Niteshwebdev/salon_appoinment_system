import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function Login() {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  //storing login data from input fields
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "1",
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", loginData);
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div id="wrapper" className="dark-scheme">
        {/* content begin */}
        <div className="no-bottom no-top" id="content">
          {/* section begin */}
          {/* <section id="subheader" className="jarallax">
            <img
              src="images/background/5.jpg"
              className="jarallax-img"
              alt=""
            />
            <div className="de-gradient-edge-bottom" />
          </section> */}
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
                    <h2 className="wow fadeIn text-center">Login</h2>
                    <div className="de-separator" />
                    <form
                      onSubmit={handleLoginSubmit}
                      className="form-border position-relative z1000"
                    >
                      <div className="row">
                        <div className="col-lg-12 mb10">
                          <div className="field-set">
                            <input
                              type="text"
                              name="email"
                              onChange={handleChange}
                              value={loginData.email}
                              className="form-control"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb10">
                          <div className="field-set">
                            <input
                              type="password"
                              name="password"
                              onChange={handleChange}
                              value={loginData.password}
                              className="form-control"
                              placeholder="Your Password"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn-main">
                          {" "}
                          Login{" "}
                        </button>
                        <p className="mt-5 login-form__footer">
                          Dont have account?{" "}
                          <Link to="/register" className="text-primary">
                            Sign Up{" "}
                          </Link>
                          now
                        </p>
                      </div>
                    </form>
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
    </>
  );
}

export default Login;
