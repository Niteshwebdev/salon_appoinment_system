import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Blog() {
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
              src="images/background/4.jpg"
              className="jarallax-img"
              alt=""
            /> */}
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                  <h1>Blog</h1>
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
                <div className="col-lg-12">
                  <div className="de-blog-c1">
                    <div className="row gx-5">
                      <div className="col-lg-6">
                        <div className="d-date">
                          <div className="d-month">Aug</div>
                          <div className="d-day">25</div>
                        </div>
                        <div className="d-image">
                          <img src="images/blog/1.jpg" className alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <h4>
                          Unraveling the Enduring Charm and Evolution of
                          Barbershops as Societal and Cultural Hubs
                        </h4>
                        <p>
                          Lorem ipsum labore aliqua tempor quis amet dolor duis
                          reprehenderit exercitation in mollit esse anim
                          reprehenderit velit voluptate consequat nisi in
                          occaecat veniam enim officia sit et excepteur ullamco
                          veniam quis aute voluptate tempor officia qui.
                        </p>
                        <a className="btn-main" href="blog-single">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="de-blog-c1">
                    <div className="row gx-5">
                      <div className="col-lg-6">
                        <div className="d-date">
                          <div className="d-month">Aug</div>
                          <div className="d-day">25</div>
                        </div>
                        <div className="d-image">
                          <img src="images/blog/2.jpg" className alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <h4>
                          {" "}
                          A Timeless Journey through the Evolution, Artistry,
                          and Community of Barbershops
                        </h4>
                        <p>
                          Lorem ipsum labore aliqua tempor quis amet dolor duis
                          reprehenderit exercitation in mollit esse anim
                          reprehenderit velit voluptate consequat nisi in
                          occaecat veniam enim officia sit et excepteur ullamco
                          veniam quis aute voluptate tempor officia qui.
                        </p>
                        <a className="btn-main" href="blog-single">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="de-blog-c1">
                    <div className="row gx-5">
                      <div className="col-lg-6">
                        <div className="d-date">
                          <div className="d-month">Aug</div>
                          <div className="d-day">25</div>
                        </div>
                        <div className="d-image">
                          <img src="images/blog/3.jpg" className alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <h4>
                          From Historical Traditions to Modern Hubs of Style,
                          Culture, and Connection
                        </h4>
                        <p>
                          Lorem ipsum labore aliqua tempor quis amet dolor duis
                          reprehenderit exercitation in mollit esse anim
                          reprehenderit velit voluptate consequat nisi in
                          occaecat veniam enim officia sit et excepteur ullamco
                          veniam quis aute voluptate tempor officia qui.
                        </p>
                        <a className="btn-main" href="blog-single">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="de-blog-c1">
                    <div className="row gx-5">
                      <div className="col-lg-6">
                        <div className="d-date">
                          <div className="d-month">Aug</div>
                          <div className="d-day">25</div>
                        </div>
                        <div className="d-image">
                          <img src="images/blog/4.jpg" className alt="" />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <h4>
                          Unveiling the Rich History, Evolving Techniques, and
                          Enduring Community of Barbershops
                        </h4>
                        <p>
                          Lorem ipsum labore aliqua tempor quis amet dolor duis
                          reprehenderit exercitation in mollit esse anim
                          reprehenderit velit voluptate consequat nisi in
                          occaecat veniam enim officia sit et excepteur ullamco
                          veniam quis aute voluptate tempor officia qui.
                        </p>
                        <a className="btn-main" href="blog-single">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="spacer-single" />
                <div className="col-lg-12 text-center">
                  <div className="pagination">
                    <a href="/#">«</a>
                    <a href="/#">1</a>
                    <a href="/#" className="active">
                      2
                    </a>
                    <a href="/#">3</a>
                    <a href="/#">4</a>
                    <a href="/#">5</a>
                    <a href="/#">6</a>
                    <a href="/#">»</a>
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

export default Blog;
