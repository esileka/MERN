import React from 'react'
import { Container ,Row,Col } from 'react-bootstrap'
import about from "../src/IMG/about.png"
import Services from './Services'
import "./Aboutusstyle.css"

const AboutUs = () => {
  return (
   
    <Container fluid  className="aboutus-container">
      <Row>
        <Col lg={6} className="aboutus-col">
        <h1>ABOUT US</h1>
        <h3>The only thing we're serious about is food.</h3>
        <p>At our restaurant, we believe that good food brings people together. 
          That’s why we use fresh, high-quality ingredients to prepare meals that are both delicious 
          and healthy. Our goal is to serve food that not only tastes great but also makes you feel good. 
          Whether you're in the mood for something light or a hearty meal, we’ve got something for everyone.
           Come and enjoy a fresh and flavorful dining experience with us!</p>
        </Col>
        
        <Col lg={4} className="text-center">
        <img src={about} alt="about"  className="aboutUs-img" />
        </Col>
        </Row>


      <Row >
        
            
        </Row>
        <Services/>
    </Container>
  )
}

export default AboutUs