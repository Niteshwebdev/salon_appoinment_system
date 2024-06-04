import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Gallary() {
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
              src="images/background/2.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Gallery</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <section className="no-top no-bottom" aria-label="section">
            <div className="container-fluid">
              <div id="gallery" className="row g-3">
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-1.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-1.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-2.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-2.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-3.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-3.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-8 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-4.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-4.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-5.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-5.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-6.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-6.jpg"
                        className="lazy img-fluid"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 item">
                  <div className="de-image-hover rounded">
                    <a
                      href="images/gallery/gallery-item-7.jpg"
                      className="image-popup"
                    >
                      <span className="dih-title-wrap">
                        <span className="dih-title">Blaxcut Barbershop</span>
                      </span>
                      <span className="dih-overlay" />
                      <img
                        src="images/gallery/gallery-item-7.jpg"
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
      {/* Javascript Files
    ================================================== */}
    </>
  );
}

export default Gallary;
