import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Testimonials() {
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
                  <h1>Testimonials</h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          <section className="no-top" aria-label="section">
            <div className="container">
              <div className="row masonry">
                <div className="col-lg-4 item mb10">
                  <div className="de_testi">
                    <blockquote>
                      <p>
                        I had an amazing experience at the barbershop! The
                        atmosphere was friendly and inviting, and the staff was
                        very professional. The barber took the time to listen to
                        what I wanted and gave me an excellent haircut that
                        exceeded my expectations.
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          className="rounded-circle"
                          src="images/people/1.jpg"
                        />
                        <span>Elliot Richbourg</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-4 item mb10">
                  <div className="de_testi">
                    <blockquote>
                      <p>
                        I've been going to this barbershop for years, and I
                        wouldn't trust anyone else with my hair. The barbers are
                        skilled and knowledgeable, and they always keep up with
                        the latest trends and techniques. The shop is always
                        clean and well-maintained, and they take hygiene
                        seriously, which is especially important these days. I
                        leave feeling refreshed and confident after every visit.
                        Highly recommended!
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          className="rounded-circle"
                          src="images/people/2.jpg"
                        />
                        <span>Stefan Whilby</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-4 item mb10">
                  <div className="de_testi">
                    <blockquote>
                      <p>
                        I'm so glad I found this barbershop! As someone with
                        curly hair, finding a barber who knows how to handle it
                        properly is not easy. But the barber here knew exactly
                        what to do and gave me a fantastic curly haircut. They
                        even gave me some useful tips on how to care for my
                        curls at home.
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          className="rounded-circle"
                          src="images/people/3.jpg"
                        />
                        <span>Jerri Poydras</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-4 item mb10">
                  <div className="de_testi">
                    <blockquote>
                      <p>
                        I brought my son to this barbershop for his first
                        haircut, and they made it such a memorable experience
                        for him! The barber was patient and gentle, and they had
                        a special chair just for kids, which made him feel like
                        a little prince. The haircut turned out adorable, and
                        they even gave him a lollipop afterward.
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          className="rounded-circle"
                          src="images/people/4.jpg"
                        />
                        <span>Sammie Maedche</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-4 item mb10">
                  <div className="de_testi">
                    <blockquote>
                      <p>
                        I've been going to this barbershop for a long time, and
                        I can confidently say it's the best in town. The barbers
                        are not only skilled at their craft but also friendly
                        and engaging. It feels more like catching up with old
                        friends during my appointments. They also take walk-ins,
                        and I've never had to wait too long for a cut. If you
                        want a great haircut in a warm and welcoming
                        environment, look no further!"
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          className="rounded-circle"
                          src="images/people/5.jpg"
                        />
                        <span>Deandre Roybal</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="col-lg-4 item mb10">
                  <div className="de_testi">
                    <blockquote>
                      <p>
                        I have to say, this barbershop has the best customer
                        service I've ever experienced. From the moment I walked
                        in, I was greeted with a smile and offered a beverage
                        while I waited. The barbers are not only talented but
                        also incredibly attentive.
                      </p>
                      <div className="de_testi_by">
                        <img
                          alt=""
                          className="rounded-circle"
                          src="images/people/6.jpg"
                        />
                        <span>Randell Dragos</span>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="spacer-single" />
                <a className="btn-main" href="/#">
                  Load More Testimonials
                </a>
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

export default Testimonials;
