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
              {/* <li className="submenu ">
                <a onClick={toggleDropdown} className="sidebar-link">
                  <img src="assets/img/icons/sales1.svg" alt="img" />
                  <span>Manage salon &amp; Beautician</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: isDropdownOpen ? "block" : "none" }}>
                  <li>
                    <Link to="/managesalon" className="sidebar-link">
                      view Salon details
                    </Link>
                  </li>
                  <li>
                    <Link to="/managebeauty" className="sidebar-link">
                      View Beautician Detail
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link to="/managesalon" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>Salon details</span>
                </Link>
              </li>
              <li>
                <Link to="/manage_booking" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span>Manage Booking</span>
                </Link>
              </li>
              <li>
                <Link to="/userlists" className="sidebar-link">
                  <img src="assets/img/icons/purchase1.svg" alt="img" />
                  <span> Users List</span>
                </Link>
              </li>
              {/* <li className="submenu">
                <a onClick={toggleDropdown2} className="sidebar-link">
                  <img src="assets/img/icons/users1.svg" alt="img" />
                  <span> Manage Users</span>
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: isDropdownOpen2 ? "block" : "none" }}>
                  <li>
                    <Link to="/newuser" className="sidebar-link">
                      New User{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/userlists" className="sidebar-link">
                      Users List
                    </Link>
                  </li>
                </ul>
              </li> */}
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
              {/* <li className="submenu">
                <Link to="javascript:void(0);">
                  <img src="assets/img/icons/settings.svg" alt="img" />
                  <span>Settings</span> <span className="menu-arrow" />
                </Link>
                <ul>
                  <li>
                    <Link to="generalsettings">General Settings</Link>
                  </li>
                  <li>
                    <Link to="emailsettings">Email Settings</Link>
                  </li>
                  <li>
                    <Link to="paymentsettings">Payment Settings</Link>
                  </li>
                  <li>
                    <Link to="currencysettings">Currency Settings</Link>
                  </li>
                  <li>
                    <Link to="grouppermissions">Group Permissions</Link>
                  </li>
                  <li>
                    <Link to="taxrates">Tax Rates</Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
