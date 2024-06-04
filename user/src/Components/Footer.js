import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 text-lg-start text-center">
            <div className="social-icons">
              <a href="/#">
                <i className="fa-brands fa-facebook fa-lg" />
              </a>
              <a href="/#">
                <i className="fa-brands fa-twitter fa-lg" />
              </a>
              <a href="/#">
                <i className="fa-brands fa-linkedin fa-lg" />
              </a>
              <a href="/#">
                <i className="fa-brands fa-pinterest fa-lg"></i>
              </a>
              <a href="/#">
                <i className="fa fa-rss fa-lg" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-lg-center text-center">
            <img src="images/logo.png" className alt="" />
          </div>
          <div className="col-lg-4 text-lg-end text-center">
            Copyright 2023 - Blaxcut by Designesia
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
