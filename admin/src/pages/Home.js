import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/viewCounts")
      .then((response) => response.json())
      .then((data) => {
        setCount(data);
      });
  }, []);
  console.log(count);

  return count === 0 ? (
    <div>Please Wait</div>
  ) : (
    <>
      {/* <div id="global-loader">
                <div className="whirly-loader"> </div>
            </div> */}

      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            {/* <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash1.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count={307144.0}>
                        $307,144.00
                      </span>
                    </h5>
                    <h6>Total Purchase Due</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget dash1">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash2.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count={4385.0}>
                        $4,385.00
                      </span>
                    </h5>
                    <h6>Total Sales Due</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget dash2">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash3.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count="385656.50">
                        385,656.50
                      </span>
                    </h5>
                    <h6>Total Sale Amount</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="dash-widget dash3">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash4.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      $
                      <span className="counters" data-count={40000.0}>
                        400.00
                      </span>
                    </h5>
                    <h6>Total Sale Amount</h6>
                  </div>
                </div>
              </div> */}
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>{count.totalUsers}</h4>
                  <h5>Customers</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>{count.totalSalons}</h4>
                  <h5>Salons</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="user-check" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>{count.totalBookings}</h4>
                  <h5>Total Booking</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>{count.totalIncome.totalIncome}</h4>
                  <h5>Total Income</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file" />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 col-12 d-flex">
                <div className="dash-count das2">
                  <div className="dash-counts">
                    <h4>100</h4>
                    <h5>Beautician</h5>
                  </div>
                  <div className="dash-imgs">
                    <i data-feather="file-text" />
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
