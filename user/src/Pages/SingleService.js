import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function SingleService() {
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
            <img src="images/background/2.jpg" className="jarallax-img" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Haircut</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <section aria-label="section" className="no-top no-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <img
                    src="images/misc/man-3-b.png"
                    className="img-fluid wow fadeInUp"
                    alt=""
                  />
                </div>
                <div
                  className="col-lg-8 offset-lg-2 text-center"
                  data-jarallax-element={-20}
                >
                  <h2 className="wow fadeInUp">
                    Blaxcut Crafting{" "}
                    <span className="id-color">Confidence</span>, One Cut at a
                    Time
                  </h2>
                  <p className="lead wow fadeInUp">
                    When it comes to personal grooming and style, a haircut can
                    make all the difference. It's not just about trimming those
                    unruly locks; it's an art form that can transform your
                    entire look and boost your confidence. At our establishment,
                    we take immense pride in offering a comprehensive range of
                    haircut services that cater to your unique preferences and
                    individuality.
                  </p>
                  <p className="lead wow fadeInUp">
                    Our commitment to excellence extends beyond the scissors and
                    clippers. We believe in creating an environment where you
                    can relax and unwind, a place where you can escape the
                    hustle and bustle of everyday life. That's why we offer more
                    than just haircuts; we provide an opportunity to rejuvenate,
                    to chat, and to walk out feeling like the best version of
                    yourself.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section aria-label="section" className="no-bottom">
            <div className="wow fadeInRight d-flex">
              <div className="de-marquee-list wow">
                <div className="d-item">
                  <span className="d-item-txt">Slickback</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Classic Quiff</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Pompadour</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Fringe</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Beard Trim</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Curly Fade</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                  <span className="d-item-txt">Undercut</span>
                  <span className="d-item-display">
                    <i className="d-item-block" />
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="jarallax">
            <div className="de-gradient-edge-top" />
            <div className="de-gradient-edge-bottom" />
            <img src="images/background/1.jpg" className="jarallax-img" alt="" />
            <div className="container position-relative z1000">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="wow fadeInUp">
                    Hair <span className="id-color">Styles</span>
                  </h2>
                  <div className="spacer-single" />
                </div>
              </div>
              <div id="gallery" className="row g-4 wow fadeInUp">
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/1.jpg" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Slickback</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/1.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/2.jpg" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Classic Quiff</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/2.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/3.jpg" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Pompadour</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/3.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/4.jpg" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Fringe</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/4.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/5.jpg" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Curly Fade</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/5.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/6.jpg" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Undercut</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/6.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a href="images/hairstyles/7.html" className="image-popup">
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/hairstyles/7.html"
                        className="lazy img-fluid"
                        alt=""
                      />
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
    </>
  );
}

export default SingleService;
