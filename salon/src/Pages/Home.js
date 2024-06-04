import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import axios from "axios";


function Home() {
  const [count, setCount] = useState({
    totalSalons: 0,
    totalIncome: 0,
    totalBookings: 0,
  });
  useEffect(() => {
    axios
      .get("http://localhost:5000/viewCountsOwner")
      .then((response) => response)
      .then((data) => {
        setCount(data.data);
      })
      .catch((error) => {});
  }, []);
  console.log(count);

  return (
    <>
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-4 d-flex">
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
            <div className="col-xl-4 col-lg-4 col-sm-4 d-flex">
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
            <div className="col-xl-4 col-lg-4 col-sm-4 d-flex">
              <div className="dash-count das2">
                <div className="dash-counts">
                  <h4>{count.totalIncome}</h4>
                  <h5>Total Income</h5>
                </div>
                <div className="dash-imgs">
                  <i data-feather="file" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
