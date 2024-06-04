import React from "react";
import Header from "../Components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CardReactFormContainer from "card-react";
import Footer from "../Components/Footer";

function BookAppointment() {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();
  const [serviceData, setServiceData] = React.useState({
    serviceId: location.state.service._id,
    salonId: location.state.salonId,
    serviceCharges: location.state.service.servicePrice,
    dateTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/bookSalon",
        serviceData
      );
      //const { success, message } = response.data;
      console.log("res success: ", response.data);

      //if success then redirect to login
      if (response.data.success) {
        alert("Appointment Booked Succesfully!!");
        navigate("/");
      }
    } catch (error) {
      console.log("Frontend Reg Error:", error);
    }
  };

  return (
    <>
      <div id="wrapper" className="dark-scheme">
        {/* page preloader begin */}
        {/* <div id="de-loader" /> */}
        {/* page preloader close */}
        {/* header begin */}
        <Header />
        {/* header close */}
        {/* content begin */}
        <div className="no-bottom no-top" id="content">
          <div id="top" />
          {/* section begin */}
          <section id="subheader" className="jarallax">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Book Appointment</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
          </section>
          {/* section close */}
          <section id="section-form" className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <form onSubmit={handleBookingSubmit}>
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3 text-center">
                        <img
                          src={require(`../../../backend/images/servicePics/${location.state.service.servicePic}`)}
                          className="img-fluid wow fadeInUp mb-3"
                          alt=""
                          style={{
                            width: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="row">
                        <h4 style={{ background: "black", color: "white" }}>
                          Service Name:- {location.state.service.serviceName}
                        </h4>
                        <h4 style={{ background: "black", color: "white" }}>
                          Price:- {location.state.service.servicePrice}
                        </h4>
                      </div>
                    </div>
                    <CardReactFormContainer container="card-wrapper">
                      <div className="container ">
                        <div className="row col-lg-4 offset-4 mb-3">
                          <input
                            type="datetime-local"
                            name="dateTime"
                            className="form-control"
                            required
                            onChange={handleChange}
                            value={serviceData.dateTime}
                            style={{ background: "black", color: "white" }}
                          />
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <input
                              placeholder="Full name"
                              type="text"
                              name="name"
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              placeholder="Card number"
                              type="text"
                              name="number"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <input
                              placeholder="MM/YY"
                              type="text"
                              name="expiry"
                              className="form-control"
                              required
                            />
                          </div>
                          <div className="col-md-6">
                            <input
                              placeholder="CVC"
                              type="text"
                              name="cvc"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </CardReactFormContainer>
                    <div id="card-wrapper" className="mb-3"></div>
                    <div className="text-center">
                      <button type="submit" className="btn-main">
                        Book Now
                      </button>
                    </div>
                  </form>
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

export default BookAppointment;
