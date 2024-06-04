
import axios from "axios";
import { useState } from "react";



export default function Newpassword(){

      const [newpassword,setnewpassword]=useState("");
       
      
      const handleChange=async(e)=>{
         setnewpassword(e.target.value)
     
      }

      const handleupdate=async(e)=>{
          e.preventDefault();
          console.log(newpassword)



          try{
              await axios.post("http://localhost:5000/login",newpassword) 
              navigate("/login");
          }
          catch(err){
            console.log(err);
          }
       
      }



    return(
        <>
        <form onSubmit={handleupdate}>
        <div className="form-group">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="New Password"
                          name="newpassword"
                        //   onChange={handleChange}
                        //   value={registrationData.password}
                        value={newpassword}
                        onChange={handleChange}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary login-form__btn submit w-100"
                         onSubmit={handleupdate}
                      >
                        Update Password
                      </button>
                      </form>
                     
        </>
    );
}