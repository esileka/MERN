import React from 'react';
import Karte from './Karte';
import { Container, Row, Col } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './Dishesstyle.css';
import dinner1 from './IMG/dinner1.jpeg';
import dinner2 from './IMG/dinner2.png';
import breakfast1 from './IMG/breakfast1.png';
import dinner3 from './IMG/dinner3.png';
import lunch1 from './IMG/lunch1.png';
import dinner4 from './IMG/dinner4.png';
import dinner5 from './IMG/dinner5.png';
import dinner6 from './IMG/dinner6.png';

const Dishes = () => {
  // const navigate = useNavigate()
  const infos = [
    {
        id:1,
        image: dinner1,
        title: "ROASTED LAMB RUMP",
        desc: "A tender, juicy lamb dish roasted to perfection, served with aromatic herbs.",
      },
      {
        id:2,
        image: dinner2,
        title: "CITRUS CURED SALMON",
        desc: "Fresh salmon cured with citrus flavors for a light and refreshing seafood experience.",
      },
      {
        id:3,
        image: breakfast1,
        title: "PAN SEARED SEA BASS",
        desc: "Crispy on the outside, tender inside, served with a flavorful sauce.",
      },
      {
        id:4,
        image: dinner3,
        title: "STUFFED STRAWBERRY",
        desc: "A delightful dessert with fresh strawberries filled with a creamy surprise.",
      },
      {
        id:5,
        image: lunch1,
        title: "BEEF BURGER MEAL",
        desc: "A classic juicy beef burger served with crispy fries and fresh toppings.",
      },
      {
        id:6,
        image: dinner4,
        title: "MUSSELS SOUP",
        desc: "A rich and hearty soup made with fresh mussels, herbs, and a savory broth.",
      },
      {
        id:7,
        image: dinner5,
        title: "ITALIAN SPAGHETTI",
        desc: "Authentic Italian pasta served with a rich tomato sauce and parmesan cheese.",
      },
      {
        id:8,
        image: dinner6,
        title: "GRILLED FISH",
        desc: "Perfectly grilled fish fillet with a hint of lemon and fresh herbs.",
      }
  ];

  return (
    <>
      <h1 className="text-center mt-4">POPULAR DISHES</h1>
      <p className="text-center">Explore our delicious meals</p>
      <Container className="mt-4">
        <Row className="g-4">
          {infos.map((info, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Karte {...info}  id={info.id}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Dishes;
