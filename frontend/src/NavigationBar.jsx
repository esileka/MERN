import React, {useState} from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navstyle.css';

const NavigationBar = () => {

    //hapja dhe mbyllja e navbar ne paisje mobile
    const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" className="sticky-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">SAVORIA</Navbar.Brand>
        <Navbar.Toggle 
  aria-controls="basic-navbar-nav"  
  
  onClick={() => setExpanded(expanded ? false : true)}
>
  <span className="navbar-toggler-icon"></span>
</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-components">
            <Nav.Link as={Link} to="/aboutUs">ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/services">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/reservation">RESERVATION</Nav.Link>
          </Nav>
          <Button variant="outline-success" as={Link} to="/dishes">OUR MENU</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;