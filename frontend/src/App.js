import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Dishes from "./Dishes";
import MenuPage from "./MenuPage";
import Contact from "./Contact";

// CRUD components
import NotFound from "./NotFound";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        {/* Routes për faqet kryesore */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reservation" element={<Contact/>} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/allContacts" element={<Contact/>} />

        {/* Route për faqe që nuk ekzistojnë */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
