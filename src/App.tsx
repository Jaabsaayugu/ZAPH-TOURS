import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destination";
import TripTypes from "./pages/TripTypes";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar/> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/tripTypes" element={<TripTypes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <footer />
    </Router>
  );
};

export default App;
