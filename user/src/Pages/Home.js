import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";

function Home() {
  axios.defaults.withCredentials = true;
  const [datas, setDatas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/viewSalon")
      .then((response) => response.data) // Access the data property of the response
      .then((data) => {
        setDatas(data); // Update the state with salon data
        setIsLoaded(true); // Set isLoaded to true
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(datas);
  return (
    <>
      <div id="wrapper" className="dark-scheme">
        {/* page preloader begin */}
        {!isLoaded ? <div id="de-loader" /> : null}

        {/* page preloader close */}
        {/* header begin */}
        <Header />
        {/* header close */}
        {/* content begin */}
        <div className="no-bottom no-top" id="content">
          <section aria-label="section" className="no-top no-bottom">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-12"
                  data-jarallax-element={-50}
                  style={{ marginTop: "100px" }}
                >
                  <p className="lead big wow fadeInUp">
                    Established with a passion for the art of barbering, we take
                    great pride in our craft and strive to create an atmosphere
                    that feels like home. From the moment you walk through our
                    doors, you'll be greeted by friendly smiles and a warm
                    ambiance that instantly puts you at ease.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="no-top jarallax">
            <div className="de-gradient-edge-top" />
            <img src="images/background/1.jpg" className="jarallax-img" alt />
            <div className="container relative z1000">
              <div className="row align-items-center">
                <div className="col-lg-6" data-jarallax-element={-30}>
                  <img
                    src="images/misc/man-2.png"
                    className="img-fluid wow fadeInRight"
                    alt
                  />
                </div>
                <div className="col-lg-6" data-jarallax-element={-60}>
                  <h2 className="wow fadeInRight" data-wow-delay=".3s">
                    We’ll Crafting
                    <span className="id-color">Confidence</span> Through Sharp
                    Style
                  </h2>
                  <p className="wow fadeInRight" data-wow-delay=".4s">
                    We take pride in providing top-notch grooming services that
                    blend classic techniques with modern trends. Step into our
                    warm and inviting space, where you'll find a team of skilled
                    barbers dedicated to enhancing your style and confidence.
                  </p>
                  <a
                    href="book.html"
                    className="btn-main wow fadeInRight"
                    data-wow-delay=".5s"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section> */}
          <section aria-label="section" className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="wow fadeIn">Salons</h2>
                  <div className="de-separator" />
                  <div className="spacer-single" />
                </div>
                {/* Map over datas to render each salon */}
                {datas.data?.map((salon, index) => (
                  <div className="col-lg-3 text-center" key={index}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/salonDetails`}
                      state={{ salondDatas: salon }}
                    >
                      <div className="de-box-a">
                        <div className="d-image">
                          <img
                            alt=""
                            style={{
                              width: "250px",
                              height: "200px",
                              objectFit: "cover",
                            }}
                            src={require(`../../../backend/images/salonPics/${salon.salonPic}`)}
                          />
                        </div>
                        <div className="d-deco-1" />
                        <div className="d-deco-2" />
                      </div>
                      <div className="spacer-20" />
                      <h4>{salon.salonName}</h4>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="spacer-single" />
            </div>
          </section>

          <section className="jarallax no-top">
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
          <section aria-label="section" className="no-top">
            <div className="wow fadeInRight d-flex">
              <div className="de-marquee-list wow">
                <div className="d-item">
                  <span className="d-item-txt">Haircut</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Shave</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Faded</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Hair Dye</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Beard Trim</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Hair Color</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Facial</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Masage</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Hair Wash</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
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

export default Home;
