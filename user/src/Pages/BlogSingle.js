import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function BlogSingle() {
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
            <img
              src="images/background/9.jpg"
              className="jarallax-img"
              alt=""
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="blog-title">
                    Unraveling the Enduring Charm and Evolution of Barbershops
                    as Societal and Cultural Hubs
                  </h1>
                  <div className="de-separator" />
                </div>
              </div>
            </div>
            <div className="de-gradient-edge-bottom" />
          </section>
          {/* section close */}
          <section aria-label="section" className="no-top">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="blog-read">
                    <div className="post-text">
                      <p>
                        Quis sunt quis do laboris eiusmod in sint dolore sit
                        pariatur consequat commodo aliqua nulla ad dolor aliquip
                        incididunt voluptate est aliquip adipisicing ea
                        cupidatat nostrud incididunt aliquip dolore. Sed minim
                        nisi duis laborum est labore nisi amet elit adipisicing
                        proident do consectetur dolor labore sit nisi ad
                        proident esse ad velit nisi irure reprehenderit ut et
                        dolor labore veniam quis.
                      </p>
                      <p>
                        Sunt duis laboris ex et quis laborum laborum cillum
                        mollit voluptate culpa consequat ex cupidatat dolor
                        eiusmod proident proident cillum pariatur sint
                        adipisicing in nostrud do dolore consectetur quis
                        incididunt minim consectetur. Exercitation elit proident
                        dolor est id eiusmod dolor dolor incididunt ad voluptate
                        laboris cupidatat est est sint veniam sint officia sint
                        incididunt est sit ut tempor commodo pariatur ut
                        proident et do.
                      </p>
                      <p>
                        Sed eu in ut sint dolor irure fugiat minim veniam sed ea
                        proident ullamco occaecat irure ut velit eu ullamco
                        fugiat cupidatat dolore fugiat. Lorem ipsum id non
                        deserunt id consequat duis voluptate amet aliqua
                        pariatur laboris officia pariatur veniam velit
                        reprehenderit sint nostrud cupidatat magna eiusmod
                        mollit exercitation pariatur nulla minim laboris dolore
                        aliqua consectetur cillum duis aute consectetur.
                      </p>
                    </div>
                  </div>
                  <div className="spacer-single" />
                  <div id="blog-comment">
                    <h4>Comments (5)</h4>
                    <div className="spacer-half" />
                    <ol>
                      <li>
                        <div className="avatar">
                          <img src="images/people/1.jpg" alt="" />
                        </div>
                        <div className="comment-info">
                          <span className="c_name">Merrill Rayos</span>
                          <span className="c_date id-color">
                            15 January 2020
                          </span>
                          <span className="c_reply">
                            <a href="/#">Reply</a>
                          </span>
                          <div className="clearfix" />
                        </div>
                        <div className="comment">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </div>
                        <ol>
                          <li>
                            <div className="avatar">
                              <img src="images/people/2.jpg" alt="" />
                            </div>
                            <div className="comment-info">
                              <span className="c_name">Jackqueline Sprang</span>
                              <span className="c_date id-color">
                                15 January 2020
                              </span>
                              <span className="c_reply">
                                <a href="/#">Reply</a>
                              </span>
                              <div className="clearfix" />
                            </div>
                            <div className="comment">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo.
                            </div>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <div className="avatar">
                          <img src="images/people/3.jpg" alt="" />
                        </div>
                        <div className="comment-info">
                          <span className="c_name">Sanford Crowley</span>
                          <span className="c_date id-color">
                            15 January 2020
                          </span>
                          <span className="c_reply">
                            <a href="/#">Reply</a>
                          </span>
                          <div className="clearfix" />
                        </div>
                        <div className="comment">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </div>
                        <ol>
                          <li>
                            <div className="avatar">
                              <img src="images/people/4.jpg" alt="" />
                            </div>
                            <div className="comment-info">
                              <span className="c_name">Lyndon Pocekay</span>
                              <span className="c_date id-color">
                                15 January 2020
                              </span>
                              <span className="c_reply">
                                <a href="/#">Reply</a>
                              </span>
                              <div className="clearfix" />
                            </div>
                            <div className="comment">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto beatae
                              vitae dicta sunt explicabo.
                            </div>
                          </li>
                        </ol>
                      </li>
                      <li>
                        <div className="avatar">
                          <img src="images/people/5.jpg" alt="" />
                        </div>
                        <div className="comment-info">
                          <span className="c_name">Aleen Crigger</span>
                          <span className="c_date id-color">
                            15 January 2020
                          </span>
                          <span className="c_reply">
                            <a href="/#">Reply</a>
                          </span>
                          <div className="clearfix" />
                        </div>
                        <div className="comment">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo.
                        </div>
                      </li>
                    </ol>
                    <div className="spacer-single" />
                    <div id="comment-form-wrapper">
                      <h4>Leave a Comment</h4>
                      <div className="comment_form_holder">
                        <form
                          id="contact_form"
                          name="form1"
                          className="form-border"
                          method="post"
                          action="/#"
                        >
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                          />
                          <label>
                            Email <span className="req">*</span>
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            className="form-control"
                          />
                          <div id="error_email" className="error">
                            Please check your email
                          </div>
                          <label>
                            Message <span className="req">*</span>
                          </label>
                          <textarea
                            cols={10}
                            rows={10}
                            name="message"
                            id="message"
                            className="form-control"
                            defaultValue={""}
                          />
                          <div id="error_message" className="error">
                            Please check your message
                          </div>
                          <div id="mail_success" className="success">
                            Thank you. Your message has been sent.
                          </div>
                          <div id="mail_failed" className="error">
                            Error, email not sent
                          </div>
                          <p id="btnsubmit">
                            <input
                              type="submit"
                              id="send"
                              defaultValue="Send"
                              className="btn-main"
                            />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="sidebar" className="col-md-4">
                  <div className="widget">
                    <h4>Share With Friends</h4>
                    <div className="small-border" />
                    <div className="de-color-icons">
                      <span>
                        <i className="fa fa-twitter fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-facebook fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-reddit fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-linkedin fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-pinterest fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-stumbleupon fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-delicious fa-lg" />
                      </span>
                      <span>
                        <i className="fa fa-envelope fa-lg" />
                      </span>
                    </div>
                  </div>
                  <div className="widget widget-post">
                    <h4>Recent Posts</h4>
                    <div className="small-border" />
                    <ul>
                      <li>
                        <span className="date">10 Jun</span>
                        <a href="/#">6 Make Mobile Website Faster</a>
                      </li>
                      <li>
                        <span className="date">22 Jun</span>
                        <a href="/#">Experts Web Design Tips</a>
                      </li>
                      <li>
                        <span className="date">20 Jun</span>
                        <a href="/#">Importance Of Web Design</a>
                      </li>
                      <li>
                        <span className="date">12 Jun</span>
                        <a href="/#">Avoid These Erros In UI Design</a>
                      </li>
                    </ul>
                  </div>
                  <div className="widget widget-text">
                    <h4>About Us</h4>
                    <div className="small-border" />
                    <p className="small no-bottom">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni
                    </p>
                  </div>
                  <div className="widget widget_tags">
                    <h4>Tags</h4>
                    <div className="small-border" />
                    <ul>
                      <li>
                        <a href="/#link">Art</a>
                      </li>
                      <li>
                        <a href="/#link">Application</a>
                      </li>
                      <li>
                        <a href="/#link">Design</a>
                      </li>
                      <li>
                        <a href="/#link">Entertainment</a>
                      </li>
                      <li>
                        <a href="/#link">Internet</a>
                      </li>
                      <li>
                        <a href="/#link">Marketing</a>
                      </li>
                      <li>
                        <a href="/#link">Multipurpose</a>
                      </li>
                      <li>
                        <a href="/#link">Music</a>
                      </li>
                      <li>
                        <a href="/#link">Print</a>
                      </li>
                      <li>
                        <a href="/#link">Programming</a>
                      </li>
                      <li>
                        <a href="/#link">Responsive</a>
                      </li>
                      <li>
                        <a href="/#link">Website</a>
                      </li>
                    </ul>
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

export default BlogSingle;
