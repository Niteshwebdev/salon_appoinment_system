

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase/setup";

import firebase from "firebase/compat/app";

import axios from "axios";


export default function Forgotpassword(){

    const navigate = useNavigate();

    const [phone, setphone]=useState("+91");
    const [otp, setotp]=useState("");
    const [newpassword,setnewpassword]=useState("");
    
    const [isphoneverified, setphoneverified ]= useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);

    const handleGenerateOTP = async () => {
        if (!phone) return;
   
       try {
           const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
               size: 'invisible'
           });
           const result = await auth.signInWithPhoneNumber(phone, appVerifier);
           setConfirmationResult(result);
          alert("OTP has been sent to your phone");
      } catch (error) {
          console.error("Failed to send OTP", error);
          alert("Failed to send OTP. Please try again.");
      }
      };

      const handleVerifyOTP = async () => {

      
        if (!otp || !confirmationResult) return;
      
        try {
            
             const result = await confirmationResult.confirm(otp);
            console.log("User confirmed", result.user);
            alert("otp verified successfully");
             setphoneverified(true);
             
     
          
        } catch (error) {
            console.error("Failed to verify OTP", error);
            alert("Failed to verify OTP. Please check the OTP and try again.");
        }
       };


    const handleChange= async(e)=>{
        setphone(e.target.value)

    }
    const handleOtpChange = async (e) => {
        setotp(e.target.value);
    };


    const handlesubmit=async(e)=>{
        e.preventDefault();
         console.log(phone,otp,newpassword);
          
         if(!isphoneverified)
         {
           alert("please verify your mobile number");
           return;
         }

         try{
            const response=await axios.post("http://localhost:5000/updatepassword",{ phone, newpassword});
            console.log(response);
            
           
           
                alert("password updated successfully")
                navigate("/login");
            
            
            
         }
         catch(err){
            console.log(err);
         }
       
    }

    

    return(
        <>
         <div className="login-form-bg h-100">
        <div className="container h-100">
          <div className="row justify-content-center h-100">
            <div className="col-xl-6">
              <div className="form-input-content">
                <div className="card login-form mb-0">
                  <div className="card-body pt-5 text-center">
                    <h4>Salon Booking Owner</h4>

                    <form onSubmit={handlesubmit}>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="enter phone number"
                          name="phone"
                        //   onChange={handleChange}
                        //   value={loginData.email}
                        value={phone}
                        onChange={handleChange}
                          
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

                      <div id="recaptcha-container"></div>

                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="enter otp"
                          name="otp"
                          onChange={handleOtpChange}
                        //   value={loginData.password}
                          value={otp}
                          
                        />
                      </div>

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

                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="New Password"
                          name="newpassword"
                        //   onChange={handleChange}
                        //   value={registrationData.password}
                        value={newpassword}
                        onChange={(e)=>(setnewpassword(e.target.value))}
                          required
                        />
                      </div>



                      <button
                        type="submit"
                        className="btn btn-primary login-form__btn submit w-100"
                     
                      >
                        Update Password
                      </button>
                       
                     
                     
                    </form>
                    

                    <p className="mt-3 login-form__footer">
                      <Link to="/login" className="text-danger" >
                        Login 
                      </Link>
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}