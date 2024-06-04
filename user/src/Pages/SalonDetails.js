import React from "react";
import Header from "../Components/Header";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

function SalonDetails() {
  const location = useLocation();
  console.log(location.state.salondDatas);

  // eslint-disable-next-line
  const [salonData, setSalonData] = React.useState({
    salonId: location.state.salondDatas._id,
    salonName: location.state.salondDatas.salonName,
    salonEmail: location.state.salondDatas.salonEmail,
    salonPhone: location.state.salondDatas.salonPhone,
    salonAddress: location.state.salondDatas.salonAddress,
    salonPic: location.state.salondDatas.salonPic,
  });

  return (
    <div id="wrapper" className="dark-scheme">
      <Header />
      <div className="no-bottom no-top" id="content">
        <section id="subheader" className="jarallax">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 text-center">
                <h1>{salonData.salonName}</h1>
                <div className="de-separator" />
              </div>
            </div>
          </div>
        </section>
        <section aria-label="section" className="no-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 offset-lg-3 text-center mb-3">
                <img
                  src={require(`../../../backend/images/salonPics/${salonData.salonPic}`)}
                  className="img-fluid wow fadeInUp"
                  alt=""
                />
              </div>
              <div className="col-lg-8 offset-lg-2 text-center">
                <h2 className="wow fadeInUp">{salonData.salonName}</h2>
                <p className="lead wow fadeInUp">
                  <strong>Email:</strong> {salonData.salonEmail}
                </p>
                <p className="lead wow fadeInUp">
                  <strong>Phone:</strong> {salonData.salonPhone}
                </p>
                <p className="lead wow fadeInUp">
                  <strong>Address:</strong> {salonData.salonAddress}
                </p>
              </div>
              <Link
                to="/services"
                state={salonData}
                className="btn-main col-lg-4 offset-lg-4 "
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default SalonDetails;
