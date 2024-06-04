import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditServices() {
  const location = useLocation();
  console.log(location.state._id);

  //initialize navigate
  const navigate = useNavigate();
  //storing login data from input fields
  const [serviceData, setServiceData] = React.useState({
    salonId: location.state._id,
    serviceName: location.state.serviceName,
    servicePrice: location.state.servicePrice,
    serviceDetails: location.state.serviceDetails,
    servicePic: location.state.servicePic,
  });

  //getting textdata from input fields
  const handleChange = async (e) => {
    const { name, value } = e.target;
    // storing textdata from input fields
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //getting salonPic
  const handleFileChange = (e) => {
    //storing profilePic
    setServiceData((formData) => ({
      ...formData,
      servicePic: e.target.files[0],
    }));
  };

  const handleSalonSubmit = async (e) => {
    e.preventDefault();

    //sending API for storing user data to MongoDB
    try {
      //appending data to formData
      const data = new FormData();

      //appending registration data to formData
      for (const key in serviceData) {
        data.append(key, serviceData[key]);
      }

      console.log(serviceData);

      console.log(data);
      //sending API for storing user data to MongoDB
      const response = await axios.post(
        "http://localhost:5000/editService",
        data
      );
      //const { success, message } = response.data;
      console.log("res success: ", response.data);

      //if success then redirect to login
      if (response.data.success) {
        console.log("Service Added Succesfully!!");
        navigate("/viewServices");
      }
    } catch (error) {
      console.log("Frontend Reg Error:", error);
    }
  };

  return (
    <>
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
                      value={serviceData.serviceName}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="text"
                      name="servicePrice"
                      onChange={handleChange}
                      value={serviceData.servicePrice}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="form-group">
                    <label>Details</label>
                    <input
                      type="text"
                      name="serviceDetails"
                      onChange={handleChange}
                      value={serviceData.serviceDetails}
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
                        name="servicePic"
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
                    Update
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
    </>
  );
}

export default EditServices;
