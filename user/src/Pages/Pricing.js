import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Pricing() {
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
            <div className="de-gradient-edge-bottom" />
          </section>
          <section className="no-top no-bottom" aria-label="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-2 mt-80">
                  <div className="d-sch-table">
                    <h2 className="text-center wow fadeIn">Haircut</h2>
                    <div className="de-separator" />
                    <div className="sc-wrap">
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Regular Haircut</span>
                          </dt>
                          <dd>$37</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Scissors Haircut</span>
                          </dt>
                          <dd>$40</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Kids Haircut</span>
                          </dt>
                          <dd>$30</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="d-deco" />
                  </div>
                </div>
              </div>
              <div className="spacer-double" />
              <div className="row">
                <div className="col-lg-6 offset-lg-4">
                  <div className="d-sch-table">
                    <h2 className="text-center wow fadeIn">Shave</h2>
                    <div className="de-separator" />
                    <div className="sc-wrap">
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Head Shave</span>
                          </dt>
                          <dd>$27</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Royal Shave</span>
                          </dt>
                          <dd>$33</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Royal Head Shave</span>
                          </dt>
                          <dd>$33</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Beard Trim No Shave</span>
                          </dt>
                          <dd>$35</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Beard Trim Shave</span>
                          </dt>
                          <dd>$35</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Beard Shave Up</span>
                          </dt>
                          <dd>$30</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="d-deco" />
                  </div>
                </div>
              </div>
              <div className="spacer-double" />
              <div className="row">
                <div className="col-lg-6 offset-lg-2">
                  <div className="d-sch-table">
                    <h2 className="text-center wow fadeIn">Facial</h2>
                    <div className="de-separator" />
                    <div className="sc-wrap">
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Deep Pore Cleansing</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Aromatherapy Facial</span>
                          </dt>
                          <dd>$45</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Acne Problem Facial</span>
                          </dt>
                          <dd>$60</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>European Facial</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Glycolic Peel Facial</span>
                          </dt>
                          <dd>$35</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="d-deco" />
                  </div>
                </div>
              </div>
              <div className="spacer-double" />
              <div className="row">
                <div className="col-lg-6 offset-lg-4">
                  <div className="d-sch-table">
                    <h2 className="text-center wow fadeIn">Package</h2>
                    <div className="de-separator" />
                    <div className="sc-wrap">
                      <div className="def-list-dots">
                        <dl>
                          <dt>
                            <span>Haircut + Shave</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Haircut + Beard Trim</span>
                          </dt>
                          <dd>$50</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Haircut + Beard Trim Shave</span>
                          </dt>
                          <dd>$55</dd>
                        </dl>
                        <dl>
                          <dt>
                            <span>Haircut + Beard Shape Up</span>
                          </dt>
                          <dd>$60</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="d-deco" />
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

export default Pricing;
