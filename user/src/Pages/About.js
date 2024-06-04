import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function About() {
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
              src="images/background/3.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>About Us</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <section aria-label="section" className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12" data-jarallax-element={-20}>
                  <p className="lead big wow fadeInUp">
                    Immerse yourself in the ambience of our thoughtfully
                    designed space, where modern aesthetics merge harmoniously
                    with classic elements. We believe that a barbershop should
                    be more than just a place to get a haircut; it should be a
                    sanctuary where you can unwind, engage in great
                    conversation, and leave feeling invigorated.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="jarallax no-top">
            <div className="de-gradient-edge-top" />
            {/* <img
              src="images/background/1.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container relative z1000">
              <div className="row gx-5">
                <div className="col-lg-6" data-jarallax-element={-50}>
                  <div className="d-sch-table">
                    <h2 className="wow fadeIn text-center">Our Vision</h2>
                    <div className="de-separator" />
                    <p>
                      At the heart of our vision is a commitment to preserving
                      the time-honored traditions of barbering while seamlessly
                      blending them with contemporary techniques and trends. We
                      envision a space where heritage and innovation coexist
                      harmoniously, creating an environment that appeals to the
                      modern man seeking both classic sophistication and
                      cutting-edge styles.
                    </p>
                    <div className="d-deco" />
                  </div>
                </div>
                <div className="col-lg-6" data-jarallax-element={-100}>
                  <div className="d-sch-table">
                    <h2 className="wow fadeIn text-center">Our Mission</h2>
                    <div className="de-separator" />
                    <p>
                      Our mission is to empower men to feel confident, stylish,
                      and authentic in their appearance. Through our commitment
                      to excellence, personalized service, inviting atmosphere,
                      and a harmonious blend of tradition and innovation, we
                      aspire to become the ultimate grooming destination for the
                      modern gentleman.
                    </p>
                    <div className="d-deco" />
                  </div>
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <section aria-label="section" className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="wow fadeIn">Our Team</h2>
                  <div className="de-separator" />
                </div>
                <div
                  className="col-lg-3 text-center"
                  data-jarallax-element={-20}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/1.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                    <div className="d-social">
                      <a href="/#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="spacer-20" />
                  <h4>Steven Porreca</h4>
                </div>
                <div
                  className="col-lg-3 text-center"
                  data-jarallax-element={-60}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/2.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                    <div className="d-social">
                      <a href="/#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="spacer-20" />
                  <h4>Huey Apicella</h4>
                </div>
                <div
                  className="col-lg-3 text-center"
                  data-jarallax-element={-40}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/3.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                    <div className="d-social">
                      <a href="/#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="spacer-20" />
                  <h4>Harry Riecke</h4>
                </div>
                <div
                  className="col-lg-3 text-center"
                  data-jarallax-element={-10}
                >
                  <div className="de-box-a">
                    <div className="d-image">
                      <img src="images/team/4.jpg" alt="" />
                    </div>
                    <div className="d-deco-1" />
                    <div className="d-deco-2" />
                    <div className="d-social">
                      <a href="/#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="/#">
                        <i className="fa fa-instagram" />
                      </a>
                    </div>
                  </div>
                  <div className="spacer-20" />
                  <h4>Merilyn Axe</h4>
                </div>
              </div>
            </div>
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
      {/* Javascript Files
    ================================================== */}
    </>
  );
}

export default About;
