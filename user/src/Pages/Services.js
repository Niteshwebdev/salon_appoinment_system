import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

function Services() {
  const location = useLocation();
  axios.defaults.withCredentials = true;
  const [datas, setDatas] = useState([]);

  // eslint-disable-next-line
  const [isLoaded, setIsLoaded] = useState(false);
  const salonId = location.state.salonId;

  console.log(location.state);
  useEffect(() => {
    axios
      .post("http://localhost:5000/viewServicesuser", {
        salonId,
      })
      .then((response) => response.data) // Access the data property of the response
      .then((data) => {
        setDatas(data); // Update the state with salon data
        setIsLoaded(true); // Set isLoaded to true
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

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
          <section id="subheader" className="jarallax">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Services</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
          </section>
          <section aria-label="section" className="no-top no-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12" data-jarallax-element={-20}>
                  <p className="lead big wow fadeInUp">
                    Step into our stylish and comfortable space, where the blend
                    of vintage and contemporary decor sets the perfect backdrop
                    for your grooming journey. We pay attention to every detail,
                    from the moment you walk through our doors until you leave
                    with a fresh, confident look.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section aria-label="section" className="no-top">
            <div className="container">
              <div className="row">
                {datas.data?.map((service, index) => (
                  <div
                    className="col-lg-3 text-center space-between"
                    data-jarallax-element={-20}
                    key={index}
                    style={{ minHeight: "350px" }} // Set a minimum height to ensure consistent height for all columns
                  >
                    <div className="de-box-a">
                      <div className="d-image">
                        <img
                          style={{
                            width: "250px",
                            height: "200px",
                            objectFit: "cover",
                          }}
                          src={require(`../../../backend/images/servicePics/${service.servicePic}`)}
                          alt={service.serviceName}
                        />
                      </div>
                      <div className="d-deco-1" />
                      <div className="d-deco-2" />
                    </div>
                    <div className="spacer-20" />
                    <div>
                      <div className="row">
                        <div className="col">
                          <h5 className="text-justify">
                            {service.serviceName}
                          </h5>
                        </div>
                        <div className="col">
                          <h5>{service.servicePrice}</h5>
                        </div>
                      </div>
                      <h4 className="text-justify">{service.serviceDetails}</h4>
                    </div>
                    <div className="mt-auto">
                      {" "}
                      {/* Use mt-auto to push the button to the bottom */}
                      <Link
                        to="/bookAppointment"
                        state={{ service, salonId }}
                        className="btn-main"
                      >
                        Book
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="jarallax no-top">
            <div className="de-gradient-edge-top" />

            <div className="container relative z1000">
              <div className="row gx-5">
                <div
                  className="col-lg-6 text-center"
                  data-jarallax-element={-50}
                >
                  <div className="d-sch-table">
                    <h2 className="wow fadeIn">We're Open</h2>
                    <div className="de-separator" />
                    <div className="d-col">
                      <div className="d-title">Mon - Thu</div>
                      <div className="d-content id-color">7:30AM - 6:30PM</div>
                    </div>
                    <div className="d-col">
                      <div className="d-title">Friday</div>
                      <div className="d-content id-color">8:30AM - 8:30PM</div>
                    </div>
                    <div className="d-col">
                      <div className="d-title">Sat - Sun</div>
                      <div className="d-content id-color">9:30AM - 5:30PM</div>
                    </div>
                    <div className="d-deco" />
                  </div>
                </div>
                <div
                  className="col-lg-6 text-center"
                  data-jarallax-element={-100}
                >
                  <div className="d-sch-table">
                    <h2 className="wow fadeIn">Location</h2>
                    <div className="de-separator" />
                    <div className="d-col">
                      <div className="d-title">Address</div>
                      <div className="d-content id-color">
                        100 Mainstreet Center, NY
                      </div>
                    </div>
                    <div className="d-col">
                      <div className="d-title">Phone</div>
                      <div className="d-content id-color">+1 333 8080 1000</div>
                    </div>
                    <div className="d-col">
                      <div className="d-title">Email</div>
                      <div className="d-content id-color">
                        contact@blaxcut.com
                      </div>
                    </div>
                    <div className="d-deco" />
                  </div>
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
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
      {/* Javascript Files
    ================================================== */}
    </>
  );
}

export default Services;
