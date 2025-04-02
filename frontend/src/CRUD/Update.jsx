// import React , {useState , useEffect }from 'react'
// import {Container ,Form , Button} from 'react-bootstrap'
// import axios from "axios";
// import {useParams , useNavigate} from 'react-router-dom'

// const Update = () => {
//     const {id} = useParams();
//     const nav = useNavigate();
//     const [item, setItem] = useState({
//         title: "",
//         desc: "",
//         photo: "",
//       });

//       const [uploadedImage , setUploadedImage]=useState(null);
//       useEffect(() => {
//         const fetchData = async () => {
//           await axios
//             .get("http://localhost:5000/oneItem/" + id)
//             .then((res) => setItem(res.data))
//             .catch((err) => console.log(err));
//         };
//         fetchData();
//       }, [id]);
//       const handleChange = (e) => {
//         setItem({ ...item, [e.target.name]: e.target.value });
//       };
//       const handlePhoto = (e) => {
//         setItem({ ...item, photo: e.target.files[0] });
//       };
//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         Object.entries(item).forEach(([key, value]) => {
//           formData.append(key, value);
//         });
//         await axios
//           .patch('http://localhost:5000/update/'+ id , formData)
//           .then((res) => console.log(res))
//           .catch((err) => console.log("Data not added.", err));
//       };
//   return (
//     <Container>
//     <h1>Update item</h1>
//     <Form onSubmit={handleSubmit} encType="multipart/form-data">
//       <Form.Group className="mb-3" controlId="title">
//         <Form.Label>Title</Form.Label>
//         <Form.Control
//           type="text"
//           value={item.title}
//           name="title"
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="photo">
//         <Form.Label>Photo</Form.Label>
//         <Form.Control
//           type="file"
//           onChange={handlePhoto}
//           name="photo"
//           accept=".jpg, .png, .jpeg, .webp"
//         />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="desc">
//         <Form.Label>Description</Form.Label>
//         <Form.Control
//           as="textarea"
//           rows={3}
//           value={item.desc}
//           name="desc"
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Add Item
//       </Button>
//     </Form>
//     {uploadedImage}
    
//     <img src={'uploadedImage'} alt={item.title} className="img-fluid"/>
//   </Container>
//   )
// }

// export default Update

// import React, { useState, useEffect } from "react";
// import { Container, Form, Button } from "react-bootstrap";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const Update = () => {
//   const { id } = useParams();
//   const nav = useNavigate();
//   const [item, setItem] = useState({
//     title: "",
//     desc: "",
//     photo: "",
//     price: ""
//   });

//   const [uploadedImage, setUploadedImage] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       await axios
//         .get("http://localhost:5000/oneItem/" + id)
//         .then((res) => setItem(res.data))
//         .catch((err) => console.log(err));
//     };
//     fetchData();
//   }, [id]);

//   const handleChange = (e) => {
//     setItem({ ...item, [e.target.name]: e.target.value });
//   };

//   const handlePhoto = (e) => {
//     setItem({ ...item, photo: e.target.files[0] });
//     // Krijo një URL për foton që po ngarkohet dhe ruaje atë
//     const imageUrl = URL.createObjectURL(e.target.files[0]);
//     setUploadedImage(imageUrl);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(item).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     await axios
//       .patch("http://localhost:5000/update/" + id, formData)
//       .then((res) => {
//         console.log(res);
//         nav("/items"); // Redirigimi pas përditësimit të sukses
//       })
//       .catch((err) => console.log("Data not updated.", err));
//   };

//   return (
//     <Container>
//       <h1>Update item</h1>
//       <Form onSubmit={handleSubmit} encType="multipart/form-data">
//         <Form.Group className="mb-3" controlId="title">
//           <Form.Label>Title</Form.Label>
//           <Form.Control
//             type="text"
//             value={item.title}
//             name="title"
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="photo">
//           <Form.Label>Photo</Form.Label>
//           <Form.Control
//             type="file"
//             onChange={handlePhoto}
//             name="photo"
//             accept=".jpg, .png, .jpeg, .webp"
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="desc">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={3}
//             value={item.desc}
//             name="desc"
//             onChange={handleChange}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Update Item
//         </Button>
//       </Form>

//       {/* Shfaqja e fotos së ngarkuar */}
//       {uploadedImage && (
//         <div className="mt-3">
//           <h5>Preview:</h5>
//           <img
//             src={uploadedImage}
//             alt={item.title}
//             className="img-fluid"
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//       )}
//     </Container>
//   );
// };

// export default Update;
import React, { useState, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../Updatestyle.css";

const Update = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState({
    title: "",
    desc: "",
    photo: "",
    price: "",
  });
  
  const [uploadedImage, setUploadedImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching item with ID: ", id);
      await axios
        .get("http://localhost:5000/oneItem/" + id)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setItem({ ...item, photo: e.target.files[0] });
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    setUploadedImage(imageUrl);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(item).forEach(([key, value]) => {
      if (key !== "photo") {
        formData.append(key, value);
      }
    });
    if (item.photo) {
      formData.append("image", item.photo);
    }
    if (item.price) {
      formData.append("price", item.price);
    }

    await axios
      .patch("http://localhost:5000/update/" + id, formData)
      .then((res) => {
        console.log(res);
        setSuccessMessage("Të dhënat u përditësuan me sukses!");
        setTimeout(() => {
          setSuccessMessage("");
          nav("/items");
        }, 2000);
      })
      .catch((err) => {
        console.log("Data not updated.", err);
        setSuccessMessage("Pati një problem! Provo përsëri.");
      });
  };

  return (
    <Container className="update-container">
      <h1>Update Item</h1>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={item.title} name="title" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="photo">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" onChange={handlePhoto} name="image" accept=".jpg, .png, .jpeg, .webp" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={item.desc} name="desc" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" value={item.price} name="price" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Item
        </Button>
      </Form>

      {uploadedImage && (
        <div className="mt-3">
          <h5>Preview:</h5>
          <img src={uploadedImage} alt={item.title} className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      )}
    </Container>
  );
};

export default Update;