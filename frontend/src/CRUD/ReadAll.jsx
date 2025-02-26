import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import {Container , Row,Col,Button , Card} from 'react-bootstrap';

const ReadAll = () => {
    const[items , setItems]=useState([]);
    
useEffect(()=>{
    const fetchData= async ()=>{
        await axios 
        .get("http://localhost:5000/allItem/")
        .then ((res)=>setItems(res.data))
        .catch((err)=>console.log(err));
    };
    fetchData ();


}, [])



return(
    <Container>
        <Row>
        {items.map((item)=>{ 
return(
    <Card xs={12} md={6} lg={4} key={item._id}>
      <Card.Img variant="top" src={'http://localhost:5000/images/${item.photo}'} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.text}</Card.Text>
        <Button variant="primary" href={'/readOne/${item._id}'}>Read More</Button>
      </Card.Body>
    </Card>
)})}
        </Row>
    </Container>
)


}

export default ReadAll