import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import SingleService from "./Pages/SingleService";
import About from "./Pages/About";
import BookAppointment from "./Pages/BookAppointment";
import Blog from "./Pages/Blog";
import BlogSingle from "./Pages/BlogSingle";
import Contact from "./Pages/Contact";
import Gallary from "./Pages/Gallary";
import Pricing from "./Pages/Pricing";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import OurTeam from "./Pages/OurTeam";
import SalonDetails from "./Pages/SalonDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import checkSession from "./auth/authServices";
import BookingHistory from "./Pages/BookingHistory";
import GiveFeedback from "./Pages/AddFeedback";
import AddComplain from "./Pages/AddComplain";

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
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-single" element={<SingleService />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/team" element={<OurTeam />} />
          <Route
            path="/bookAppointment"
            element={
              isAuthenticated ? <BookAppointment /> : <Navigate to="/login" />
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-single" element={<BlogSingle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/salonDetails" element={<SalonDetails />} />
          <Route
            path="/bookingHistory"
            element={
              isAuthenticated ? <BookingHistory /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/giveFeedback"
            element={
              isAuthenticated ? <GiveFeedback /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/addComplain"
            element={
              isAuthenticated ? <AddComplain /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
