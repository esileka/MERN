import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footerstyle.css';
const Footer = () => {
  return (
    <footer className="footer-components">
      <Container className="footer-cmp">
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              Savoria is a fine dining experience bringing you the best of world cuisine in a cozy and luxurious setting. Join us to experience unforgettable moments.
            </p>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text">Home</Link></li>
              <li><Link to="/aboutUs" className="text">About Us</Link></li>
              <li><Link to="/services" className="text">Services</Link></li>
              <li><Link to="/reservation" className="text">Reservation</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <a href="#" className="email"><p>Email: contact@savoria.com</p></a>
            <a href="#" className="email"><p>Phone: +123 456 789</p></a>
          
            <div>
              <a href="#" className="text-white me-3"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" className="text-white me-3"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-white"><i class="fa-brands fa-twitter"></i></a>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2025 Savoria. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
