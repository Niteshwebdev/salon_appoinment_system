import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function AddComplain() {
  const location = useLocation();
  console.log(location.state);
  const navigate = useNavigate();

  //storing feedback data from input fields
  const [complainData, setComplainData] = useState({
    serviceId: location.state._id,
    salonId: location.state.salonId,
    serviceName: location.state.serviceName,
    complainDetails: "",
  });

  //getting textdata from input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // storing textdata from input fields
    setComplainData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    console.log(complainData);

    try {
      await axios.post("http://localhost:5000/addComplaint", complainData);
      alert("Complain Added Succesfully!!");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="wrapper" className="dark-scheme">
      {/* content begin */}
      <div className="no-bottom no-top" id="content">
        {/* section begin */}
        <Header />
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
                  <h2 className="wow fadeIn text-center">Add Complain</h2>
                  <div className="de-separator" />
                  <form
                    onSubmit={handleFeedbackSubmit}
                    className="form-border position-relative z1000"
                  >
                    <div className="row">
                      <h4>Service Name: {complainData.serviceName}</h4>

                      <div className="col-lg-12 mb10">
                        <div className="field-set">
                          <input
                            type="text"
                            name="complainDetails"
                            value={complainData.complainDetails}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Complain Details"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn-main">
                        Submit
                      </button>
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
                    <i className="fa fa-facebook fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-twitter fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-linkedin fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-pinterest fa-lg" />
                  </a>
                  <a href="/#">
                    <i className="fa fa-rss fa-lg" />
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
      <Footer/>
      {/* footer close */}
    </div>
  );
}

export default AddComplain;
