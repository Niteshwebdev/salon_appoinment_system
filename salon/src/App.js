import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NewSalon from "./Pages/NewSalon";
import ViewSalon from "./Pages/ViewSalon";
import ManageBookings from "./Pages/ManageBookings";
import Feedback from "./Pages/Feedback";
import Complaint from "./Pages/Complaint";
import Page_login from "./Pages/Login";
import checkSession from "./auth/authServices";
import { useEffect, useState } from "react";
import axios from "axios";
import EditSalon from "./Pages/EditSalon";
import AddServices from "./Pages/AddServices";
import ViewServices from "./Pages/ViewService";
import EditServices from "./Pages/EditService";
import Page_register from "./Pages/Register";
import Forgotpassword from "./Pages/forgotpassword";
import Newpassword from "./Pages/newpassword";


function App() {
  axios.defaults.withCredentials = true;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

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

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            // eslint-disable-next-line
            element={!isAuthenticated ? <Page_login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={
              // eslint-disable-next-line
              !isAuthenticated ? <Page_register /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/newSalon"
            element={isAuthenticated ? <NewSalon /> : <Navigate to="/login" />}
          />
          <Route
            path="/viewSalon"
            element={isAuthenticated ? <ViewSalon /> : <Navigate to="/login" />}
          />
          <Route
            path="/viewBookings"
            element={
              isAuthenticated ? <ManageBookings /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/feedback"
            element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />}
          />
          <Route
            path="/complaint"
            element={isAuthenticated ? <Complaint /> : <Navigate to="/login" />}
          />
          <Route
            path="/editSalon"
            element={isAuthenticated ? <EditSalon /> : <Navigate to="/login" />}
          />
          <Route
            path="/addServices"
            element={
              isAuthenticated ? <AddServices /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/viewServices"
            element={
              isAuthenticated ? <ViewServices /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/editServices"
            element={
              isAuthenticated ? <EditServices /> : <Navigate to="/login" />
            }
          />

        
{/* <Route
            path="/Otpverification"
            element={
              isAuthenticated ? <OtpVerification /> : <Navigate to="/login" />
            }
          /> */}

           <Route
            path="/forgotpassword"
            element={
              !isAuthenticated ? <Forgotpassword /> : <Navigate to="/login" />
            }
          />

         <Route
            path="/newpassword"
            element={
              !isAuthenticated ? <Newpassword /> : <Navigate to="/login" />
            }
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
