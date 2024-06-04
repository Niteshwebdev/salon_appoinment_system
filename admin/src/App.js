import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Manage_Salon from "./pages/Manage_Salon";
import ManageBeauty from "./pages/ManageBeauty";
import ManageBooking from "./pages/ManageBooking";
import NewUser from "./pages/NewUser";
import UserList from "./pages/UserList";
import Feedback from "./pages/Feedback";
import Complaint from "./pages/Complaint";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import checkSession from "./auth/authServices";

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
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/managesalon"
            element={
              // eslint-disable-next-line
              isAuthenticated ? <Manage_Salon /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/managebeauty"
            element={
              isAuthenticated ? <ManageBeauty /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/manage_booking"
            element={
              isAuthenticated ? <ManageBooking /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/newuser"
            element={isAuthenticated ? <NewUser /> : <Navigate to="/login" />}
          />
          <Route
            path="/userlists"
            element={isAuthenticated ? <UserList /> : <Navigate to="/login" />}
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
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
