import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Page_login() {
  axios.defaults.withCredentials = true;
   
  const [showPassword, setShowPassword] = useState(false);
  //storing login data from input fields
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "2",
  });

  
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

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
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-form-bg h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="col-xl-6">
              <div className="form-input-content">
                <div className="card login-form mb-0">
                  <div className="card-body pt-5 text-center">
                    <h4>Salon Booking Owner</h4>

                    <form onSubmit={handleLoginSubmit}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                          value={loginData.email}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                          value={loginData.password}
                          required
                        />
                         <button
                          type="button"
                          className="btn btn-light btn-sm" // Style the button
                          style={{position: "relative",
                                   left: "47%",
                                   bottom: "34px"
                                   
                                
                        }}
                          onClick={togglePasswordVisibility}
                        >
                          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} /> {/* Toggle icon */}
                        </button>
                      </div>
                       

                      <button className="btn btn-primary login-form__btn submit w-100">
                        Sign In
                      </button>
                    </form>

                    <p className="mt-3 login-form__footer">
                      <Link to="/forgotpassword" className="text-danger">
                        Forgot Password?
                      </Link>
                    </p>
                    <p className="mt-5 login-form__footer">
                      Dont have account?{" "}
                      <Link to="/register" className="text-primary">
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/***********************************
  Scripts
    ************************************/}
    </>
  );
}

export default Page_login;
