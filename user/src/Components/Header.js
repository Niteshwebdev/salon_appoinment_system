import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import checkSession from "../auth/authServices";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();
  //for checking session
  useEffect(() => {
    const authenticateUser = async () => {
      // Call checkSession to determine if user is authenticated
      // const isAuthenticated = await checkSession();
      // setIsAuthenticated(isAuthenticated);
      // setLoading(false); // Set loading to false after checking session
      try {
        const isAuthenticated = await checkSession();
        setIsAuthenticated(isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };
    if (!isAuthenticated) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
    // eslint-disable-next-line
  }, []);
  const logout = async (e) => {
    try {
      await axios.get("http://localhost:5000/logout");
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      console.log(" Error: ", error);
    }
  };
  return (
    <>
      {/* header begin */}
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    {/* logo begin */}
                    <div id="logo">
                      <Link to="/">
                        <img
                          className="logo-main"
                          src="images/logo.png"
                          alt=""
                        />
                        <img
                          className="logo-mobile"
                          src="images/logo-mobile.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    {/* logo close */}
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    <li>
                      <Link className="menu-item" to="/">
                        Home
                      </Link>
                    </li>
                    {isAuthenticated ? (
                      <li>
                        <Link className="menu-item" to="/bookingHistory">
                          Booking History
                        </Link>
                      </li>
                    ) : null}

                    <li>
                      <Link className="menu-item" to="/aboutUs">
                        About
                      </Link>
                      <ul>
                        <li>
                          <Link className="menu-item" to="/aboutUs">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/team">
                            Our Team
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link className="menu-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" to="#">
                        Extras
                      </Link>
                      <ul>
                        <li>
                          <Link className="menu-item" to="/contact">
                            Contact
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/gallery">
                            Gallery
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/pricing">
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/testimonials">
                            Testimonials
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {isAuthenticated ? (
                  <div className="de-flex-col">
                    <div className="menu_side_area">
                      <Link
                        onClick={() => logout()}
                        to="/login"
                        className="btn-main"
                      >
                        logout
                      </Link>
                      <span id="menu-btn" />
                    </div>
                  </div>
                ) : (
                  <div className="de-flex-col">
                    <div className="menu_side_area">
                      <Link
                        // onClick={() => logout()}
                        to="/login"
                        className="btn-main"
                      >
                        Login
                      </Link>
                      <span id="menu-btn" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* header close */}
    </>
  );
}

export default Header;
