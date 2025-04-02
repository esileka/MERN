import React from "react";
import hero1 from '../src/IMG/hero1.png'
import hero2 from '../src/IMG/hero2.png'
import logo from '../src/IMG/logo.png'
import AboutUs from "./AboutUs";
import "./homestyle.css"
const Home = () => {
  return (
    <section className="hero-container">
      <div className="text-image">
        <h1>Delicious</h1>
        <img src={hero1} alt="hero1" className="food-img"/>
      </div>
      <div className="center-text">
       <h1>Food</h1>
      </div>
      <div className="logo">
       <img src={logo} alt="logo" className="logo-img"/>
      </div>
      <div className="text-image">
        <img src={hero2} alt="hero2" className="food-imgs"/>
        <h1>Dishes</h1>
      </div>
     
     <AboutUs/>

    </section>
   
  )
  

};

export default Home;
