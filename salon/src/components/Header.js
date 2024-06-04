import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const logout = async (e) => {
    try {
      await axios.get("http://localhost:5000/logout");
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-left active">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <a href="index.html" className="logo-small">
            <img src="assets/img/logo-small.png" alt="" />
          </a>
        </div>
        <a id="mobile_btn" className="mobile_btn" href="#sidebar">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        <ul className="nav user-menu">
          {/* <li className="nav-item">
            <div className="top-nav-search">
              <a href="/#" className="responsive-search">
                <i className="fa fa-search" />
              </a>
              <form action="#">
                <div className="searchinputs">
                  <input type="text" placeholder="Search Here ..." />
                  <div className="search-addon">
                    <span>
                      <img src="assets/img/icons/closes.svg" alt="img" />
                    </span>
                  </div>
                </div>
                <a className="btn" id="searchdiv">
                  <img src="assets/img/icons/search.svg" alt="img" />
                </a>
              </form>
            </div>
          </li> */}
          {/* <li className="nav-item dropdown has-arrow flag-nav">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/#"
              role="button"
            >
              <img src="assets/img/flags/us1.png" alt height={20} />
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="/#" className="dropdown-item">
                <img src="assets/img/flags/us.png" alt height={16} /> English
              </a>
              <a href="/#" className="dropdown-item">
                <img src="assets/img/flags/fr.png" alt height={16} /> French
              </a>
              <a href="/#" className="dropdown-item">
                <img src="assets/img/flags/es.png" alt height={16} /> Spanish
              </a>
              <a href="/#" className="dropdown-item">
                <img src="assets/img/flags/de.png" alt height={16} /> German
              </a>
            </div>
          </li> */}
          {/* <li className="nav-item dropdown">
            <a
              href="/#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <img src="assets/img/icons/notification-bing.svg" alt="img" />{" "}
              <span className="badge rounded-pill">4</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>

              <div className="topnav-dropdown-footer">
                <a href="activities.html">View all Notifications</a>
              </div>
            </div>
          </li> */}
          <li className="nav-item dropdown has-arrow main-drop">
            <a
              href="/#"
              className="dropdown-toggle nav-link userset"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img src="assets/img/profiles/avator1.jpg" alt="" />
                <span className="status online" />
              </span>
            </a>
            <div className="dropdown-menu menu-drop-user">
              <div className="profilename">
                <div className="profileset">
                  <span className="user-img">
                    <img src="assets/img/profiles/avator1.jpg" alt="" />
                    <span className="status online" />
                  </span>
                  <div className="profilesets">
                    <h6>Owner</h6>
                    <h5>Owner</h5>
                  </div>
                </div>
                <hr className="m-0" />
                {/* <a className="dropdown-item" href="profile.html">
                  {" "}
                  <i className="me-2" data-feather="user" /> My Profile
                </a>
                <a className="dropdown-item" href="generalsettings.html">
                  <i className="me-2" data-feather="settings" />
                  Settings
                </a> */}
                <hr className="m-0" />
                <Link
                  onClick={() => logout()}
                  className="dropdown-item logout pb-0"
                  to="/login"
                >
                  <img
                    src="assets/img/icons/log-out.svg"
                    className="me-2"
                    alt=""
                  />
                  Logout
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
