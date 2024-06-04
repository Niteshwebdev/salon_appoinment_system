import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSalon() {
  //initialize navigate
  const navigate = useNavigate();
  //storing login data from input fields
  const [salonData, setSalonData] = React.useState({
    salonName: "",
    salonEmail: "",
    salonPhone: "",
    salonAddress: "",
    salonPic: "",
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setSalonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(salonData);
  };

  //getting salonPic
  const handleFileChange = (e) => {
    //storing profilePic
    setSalonData((formData) => ({
      ...formData,
      salonPic: e.target.files[0],
    }));
    console.log(salonData.salonPic);
  };

  const handleSalonSubmit = async (e) => {
    e.preventDefault();

    //sending API for storing user data to MongoDB
    try {
      //appending data to formData
      const data = new FormData();

      //appending registration data to formData
      for (const key in salonData) {
        data.append(key, salonData[key]);
      }

      console.log(data);
      //sending API for storing user data to MongoDB
      const response = await axios.post("http://localhost:5000/addSalon", data);
      //const { success, message } = response.data;
      console.log("res success: ", response.data);

      //if success then redirect to login
      if (response.data.success) {
        console.log("Salon Added Succesfully!!");
        navigate("/viewSalon");
      }
    } catch (error) {
      console.log("Frontend Reg Error:", error);
    }
  };

  return (
    <>
      {/* <div id="global-loader">
        <div className="whirly-loader"> </div>
      </div> */}
      <div className="main-wrapper">
        <Header />
        <Sidebar />
        <div className="page-wrapper">
          <div className="content">
            <div className="page-header">
              <div className="page-title">
                <h4>Salon Management</h4>
                <h6>Add/Update Salon</h6>
              </div>
            </div>

            <form
              encType="multipart/form-data"
              onSubmit={handleSalonSubmit}
              className="card"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Salon Name</label>
                      <input
                        type="text"
                        name="salonName"
                        onChange={handleChange}
                        value={salonData.salonName}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        name="salonEmail"
                        onChange={handleChange}
                        value={salonData.salonEmail}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      <input
                        type="text"
                        name="salonPhone"
                        onChange={handleChange}
                        value={salonData.salonPhone}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        name="salonAddress"
                        onChange={handleChange}
                        value={salonData.salonAddress}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-group">
                      <label> Salon Picture</label>
                      <div className="image-upload image-upload-new">
                        <input
                          type="file"
                          name="salonPic"
                          className="form-control"
                          required
                          onChange={handleFileChange}
                        />
                        <div className="image-uploads">
                          <img src="assets/img/icons/upload.svg" alt="img" />
                          <h4>Drag and drop a file to upload</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="btn btn-submit me-2">
                      Submit
                    </button>
                    <a href="/#" className="btn btn-cancel">
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSalon;
