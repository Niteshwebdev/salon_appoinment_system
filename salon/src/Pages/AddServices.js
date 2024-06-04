import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function AddServices() {
  //initialize navigate
  const navigate = useNavigate();
  const location = useLocation();

  //storing login data from input fields
  const [serviceData, setServiceData] = React.useState({
    salonId: location.state._id,
    serviceName: "",
    servicePrice: "",
    serviceDetails: "",
    servicePic: "",
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(serviceData);
  };

  //getting servicePic
  const handleFileChange = (e) => {
    //storing profilePic
    setServiceData((formData) => ({
      ...formData,
      servicePic: e.target.files[0],
    }));
    console.log(serviceData.servicePic);
  };

  const handleServiceSubmit = async (e) => {
    e.preventDefault();

    //sending API for storing user data to MongoDB
    try {
      //appending data to formData
      const data = new FormData();

      //appending registration data to formData
      for (const key in serviceData) {
        data.append(key, serviceData[key]);
      }

      console.log(data);
      //sending API for storing user data to MongoDB
      const response = await axios.post(
        "http://localhost:5000/addService",
        data
      );
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
                <h4>Add Service</h4>
              </div>
            </div>

            <form encType="multipart/form-data" onSubmit={handleServiceSubmit}>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 col-xl-12 col-sm-6 ">
                    <div className="form-group">
                      <label>Service Name</label>
                      <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="serviceName"
                        value={serviceData.serviceName}
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Price</label>
                      <input
                        type="number"
                        required
                        min={0}
                        onChange={handleChange}
                        name="servicePrice"
                        value={serviceData.servicePrice}
                      />
                    </div>

                    <div className="form-group">
                      <label>Service Details</label>
                      <input
                        type="text"
                        required
                        onChange={handleChange}
                        name="serviceDetails"
                        value={serviceData.serviceDetails}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-12 col-sm-6 ">
                    <div className="form-group">
                      <label> Service Picture</label>
                      <div className="image-upload image-upload-new">
                        <input
                          type="file"
                          className="form-control"
                          required
                          onChange={handleFileChange}
                          name="servicePic"
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

export default AddServices;
