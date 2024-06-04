import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Contact() {
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
            {/* <img
              src="images/background/5.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Contact Us</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          {/* section close */}
          <section id="section-content" className="no-top" aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 text-center">
                  <i className="fa fa-map-marker de-icon gradient de-hover-scale text-light mb20" />
                  <p className="lead no-bottom">Our Address</p>
                  <h4 className="s2">100 Mainstreet Center, NY</h4>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <i className="fa fa-phone de-icon gradient de-hover-scale text-light mb20" />
                  <p className="lead no-bottom">Phone Number</p>
                  <h4 className="s2">+1 333 9296</h4>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <i className="fa fa-envelope-o de-icon gradient de-hover-scale text-light mb20" />
                  <p className="lead no-bottom">Email Address</p>
                  <h4 className="s2">contact@suppport.com</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="no-top jarallax">
            <div className="de-gradient-edge-top" />
            {/* <img
              src="images/background/7.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container position-relative z1000">
              <div className="row gx-5">
                <div className="col-lg-6 offset-lg-3">
                  <div className="d-sch-table">
                    <h2 className="wow fadeIn text-center">Message Us</h2>
                    <div className="de-separator" />
                    <p className="lead text-center">
                      If you got any questions, please do not hestitae to send
                      us a message.
                    </p>
                    <form
                      name="contactForm"
                      id="contact_form"
                      className="form-border position-relative z1000"
                      method="post"
                      action="/#"
                    >
                      <div className="row">
                        <div className="col-lg-12 mb10">
                          <div className="field-set">
                            <input
                              type="text"
                              name="Name"
                              id="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb10">
                          <div className="field-set">
                            <input
                              type="text"
                              name="Email"
                              id="email"
                              className="form-control"
                              placeholder="Your Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 mb10">
                          <div className="field-set">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              className="form-control"
                              placeholder="Your Phone"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="field-set mb20">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Your Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="text-center">
                        <div
                          className="g-recaptcha"
                          data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
                          align="center"
                        />
                        <div id="submit" className="mt20">
                          <input
                            type="submit"
                            id="send_message"
                            defaultValue="Send Message"
                            className="btn-main"
                          />
                        </div>
                      </div>
                      <div id="success_message" className="success">
                        Your message has been sent successfully. Refresh this
                        page if you want to send more messages.
                      </div>
                      <div id="error_message" className="error">
                        Sorry there was an error sending your form.
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
        <Footer />
        {/* footer close */}
      </div>
      {/* Javascript Files
    ================================================== */}
    </>
  );
}

export default Contact;
