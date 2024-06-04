import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import { RecaptchaVerifier } from "firebase/auth/web-extension";
//  import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";

import { auth } from "../firebase/setup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import firebase from "firebase/compat/app";
// import nodemailer from 'nodemailer';
// "eslint": "^9.0.0",

function Page_register() {
  
  const navigate = useNavigate();

  //storing registration data from input fields
  const [registrationData, setRegistrationData] = React.useState({
    username: "",
    email: "",
    phone: "+91",
    address: "",
    dob: "",
    password: "",
    role: "2", 
    otp: "",
    
  });

  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isphoneverified, setphoneverified ]= useState(false);
   const [showPassword, setShowPassword] = useState(false);

  const handleGenerateOTP = async () => {
     if (!registrationData.phone) return;

    try {
        const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            size: 'invisible'
        });
        const result = await auth.signInWithPhoneNumber(registrationData.phone, appVerifier);
        setConfirmationResult(result);
       alert("OTP has been sent to your phone");
   } catch (error) {
       console.error("Failed to send OTP", error);
       alert("Failed to send OTP. Please try again.");
   }
   };

  const handleVerifyOTP = async () => {
  if (!registrationData.otp || !confirmationResult) return;

  try {
       const result = await confirmationResult.confirm(registrationData.otp);
      console.log("User confirmed", result.user);
      alert("otp verified successfully");
      setphoneverified(true);
  } catch (error) {
      console.error("Failed to verify OTP", error);
      alert("Failed to verify OTP. Please check the OTP and try again.");
  }
 };



 
  const togglePasswordVisibility = () => {
   setShowPassword((prevState) => !prevState);
 };
 
         

  


 

 



 

  //getting textdata from input fields
  const handleChange = async (e) => {
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

    if(!isphoneverified)
      {
        alert("please verify your mobile number");
        return;
      }
    
    try {
      // const apiEndpoint =
      // registrationData.type === "Beauty Parlor"
      //   ? "http://localhost:5000/beautyparlor"
      //   : "http://localhost:5000/register";
     
    

      await axios.post("http://localhost:5000/register", registrationData);
      navigate("/login");
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

                    <form onSubmit={handleRegistrationSubmit}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          name="username"
                          onChange={handleChange}
                          value={registrationData.username}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          id="email"
                          onChange={handleChange}
                          value={registrationData.email}
                          required
                        />
                      </div>


                      

                       
 <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="ex-+919428818032"
                          name="phone"
                          onChange={handleChange}
                          value={registrationData.phone}
                          required
                        />
                      </div>  

                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-primary login-form__btn"
                          // onClick={handleGenerateOTP}
                           onClick={handleGenerateOTP}
                        >
                          Generate OTP
                        </button>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="OTP"
                          name="otp"
                          onChange={handleChange}
                          value={registrationData.otp}
                          required
                        />
                      </div>
                      <div id="recaptcha-container"></div>

                      <div className="form-group">
                        <button
                          type="button"
                          className="btn btn-primary login-form__btn"
                          // onClick={handleVerifyOTP}
                           onClick={handleVerifyOTP}
                        >
                          Verify OTP
                        </button>
                      </div>
                      {/* <div className="form-group">
                        <PhoneInput
                          country={"in"}
                          className="form-control"
                          placeholder="Phone"
                          name="phone"
                           onChange={handleChange}
                          value={registrationData.phone}
                          required
                        />
                      </div> */}




                      {/* <div className="form-group">
                      <select
                          className="form-control"
                          name="type"
                          onChange={handleChange}
                          value={registrationData.type}
                        >Category

                          <option value="Salon">Salon</option>
                          <option value="Beauty Parlor">Beauty Parlor</option>
                        </select>
                      </div> */}

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          name="address"
                          onChange={handleChange}
                          value={registrationData.address}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          placeholder="DOB"
                          name="dob"
                          max={new Date().toISOString().split("T")[0]}
                          onChange={handleChange}
                          value={registrationData.dob}
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
                          value={registrationData.password}
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
                      <button
                        type="submit"
                        className="btn btn-primary login-form__btn submit w-100"
                        
                      >
                        Sign Up
                      </button>
                    </form>
                    <p className="mt-5 login-form__footer">
                      Have account{" "}
                      <Link to="/login" className="text-primary">
                        Sign In
                      </Link>{" "}
                      now
                    </p>
                    <p />
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

export default Page_register;
