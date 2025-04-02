import React from 'react';
import {Card,Button} from 'react-bootstrap';
//importojme useNAvigate
import {useNavigate} from 'react-router-dom';
import './kartestyle.css';


const Karte = ({image , title ,desc ,id}) => {
    const navigate = useNavigate();

    const handleClick = () =>{
        window.open(`/menu/${id}`,"_blank")//unik per secilen karte
    }

  return (
    <Card>
      <Card.Img variant="top" src={image}  className="menu-img"/>
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
         {desc}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>View More</Button>
      </Card.Body>
    </Card>
  )
}

export default Karte