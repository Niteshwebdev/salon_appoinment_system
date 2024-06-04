import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  // Function to toggle dropdown visibility
  // eslint-disable-next-line
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // eslint-disable-next-line
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  return (
    <>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li>
                <Link to="/" className="sidebar-link">
                  <img src="assets/img/icons/dashboard.svg" alt="img" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/newSalon" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>Add Salon</span>
                </Link>
              </li>
              <li>
                <Link to="/viewSalon" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>View Salon</span>
                </Link>
              </li>
              <li>
                <Link to="/viewServices" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>View Services</span>
                </Link>
              </li>
              <li>
                <Link to="/viewBookings" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>View Booking</span>
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="sidebar-link">
                  <img src="assets/img/icons/users1.svg" alt="img" />
                  <span>View FeedBack</span>
                </Link>
              </li>
              <li>
                <Link to="/complaint" className="sidebar-link">
                  <img src="assets/img/icons/users1.svg" alt="img" />
                  <span>View Complaints</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
