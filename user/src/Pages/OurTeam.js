import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function OurTeam() {
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
            {/* <img
              src="images/background/10.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Our Team</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <section className="no-top" aria-label="section">
            <div className="container">
              <div className="row gx-5 align-items-center">
                <div
                  className="col-lg-5 offset-lg-1 text-center"
                  data-jarallax-element={-20}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/1.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                  </div>
                  <div className="spacer-20" />
                </div>
                <div className="col-lg-5">
                  <h2>Steven Porreca</h2>
                  <p>
                    With a razor-sharp eye for detail and a passion for creating
                    stylish looks, he is the heart and soul of our barbershop.
                    With over 10 years of experience in the industry, he is a
                    true master of the craft, transforming haircuts into works
                    of art.
                  </p>
                  <div className="social-icons">
                    <a href="/#">
                      <i className="fa fa-facebook fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-twitter fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-instagram fa-lg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row gx-5 align-items-center">
                <div className="col-lg-5 order-lg-1 order-2 offset-lg-1">
                  <h2>Huey Apicella</h2>
                  <p>
                    With a razor-sharp eye for detail and a passion for creating
                    stylish looks, he is the heart and soul of our barbershop.
                    With over 10 years of experience in the industry, he is a
                    true master of the craft, transforming haircuts into works
                    of art.
                  </p>
                  <div className="social-icons">
                    <a href="/#">
                      <i className="fa fa-facebook fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-twitter fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-instagram fa-lg" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-5 order-lg-2 order-1 text-center"
                  data-jarallax-element={-20}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/2.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                  </div>
                  <div className="spacer-20" />
                </div>
              </div>
              <div className="row gx-5 align-items-center">
                <div
                  className="col-lg-5 offset-lg-1 text-center"
                  data-jarallax-element={-20}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/3.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                  </div>
                  <div className="spacer-20" />
                </div>
                <div className="col-lg-5">
                  <h2>Harry Riecke</h2>
                  <p>
                    With a razor-sharp eye for detail and a passion for creating
                    stylish looks, he is the heart and soul of our barbershop.
                    With over 10 years of experience in the industry, he is a
                    true master of the craft, transforming haircuts into works
                    of art.
                  </p>
                  <div className="social-icons">
                    <a href="/#">
                      <i className="fa fa-facebook fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-twitter fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-instagram fa-lg" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row gx-5 align-items-center">
                <div className="col-lg-5 order-lg-1 order-2 offset-lg-1">
                  <h2>Merilyn Axe</h2>
                  <p>
                    With a razor-sharp eye for detail and a passion for creating
                    stylish looks, he is the heart and soul of our barbershop.
                    With over 10 years of experience in the industry, he is a
                    true master of the craft, transforming haircuts into works
                    of art.
                  </p>
                  <div className="social-icons">
                    <a href="/#">
                      <i className="fa fa-facebook fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-twitter fa-lg" />
                    </a>
                    <a href="/#">
                      <i className="fa fa-instagram fa-lg" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-lg-5 order-lg-2 order-1 text-center"
                  data-jarallax-element={-20}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/4.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                  </div>
                  <div className="spacer-20" />
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

export default OurTeam;
