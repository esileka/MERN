import React, { useState , useEffect } from "react";
import { Container, Form, Button ,Alert } from "react-bootstrap";
import axios from "axios";
import "./Contact.css"
const Contact = () => {
  const [addContact, setAddContact] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    comment: "",
  });

  // state per mesazhin
  const [successMessage , setSuccessMessage]= useState("");
  const [contacts, setContacts] = useState([]); // Lista e kontakteve
  const [editingContact, setEditingContact] = useState(null);
  const [updatedData, setUpdatedData] = useState({}); 

   // Funksioni per te marre kontaktet nga backend-i
   const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/allContacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Gabim gjatë marrjes së kontakteve:", error);
    }
  };
// Merr te dhena 
useEffect(() => {
  fetchContacts();
}, []);

  const handleChange = (e) => {
    setAddContact({ ...addContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/addContact", addContact)
      .then((res) => {
        console.log("Contact added");
        setSuccessMessage("Të dhënat u dërguan me sukses!"); // Mesazhi i suksesit
        setAddContact({ firstName: "", lastName: "", email: "", comment: "" }); // Pastro fushat
      })
      .catch((err) => {
        console.log("Contact not added", err);
        setSuccessMessage("Provo përsëri! "); // Mesazh gabimi
      });
  };

   // Funksioni per te vendosur nje kontakt ne modalitetin e editimit
   const handleEdit = (contact) => {
    setEditingContact(contact);
    setAddContact(contact); // Vendosja e te dhenave ne forme
  };

   // Funksioni për të përditësuar një kontakt
   const handleUpdate = async () => {
    if (!editingContact) return;
    try {
      await axios.put(`http://localhost:5000/updateContact/${editingContact._id}`, addContact);
      setSuccessMessage("Kontakti u përditësua me sukses!");
      setEditingContact(null);
      setAddContact({ firstName: "", lastName: "", email: "", comment: "" });
      fetchContacts(); // Rifreskon listën e kontakteve pas përditësimit
    } catch (err) {
      console.log("Gabim gjatë përditësimit të kontaktit:", err);
    }
  };
  return (
    <Container className="contact-container">
      <h1>Reservation</h1>
      {/* Shfaq mesazhin e suksesit vetëm nëse ka përmbajtje */}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label className="name-container">First name</Form.Label>
          <Form.Control
            type="text"
            value={addContact.firstName}
            name="firstName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label className="name-container">Last name</Form.Label>
          <Form.Control
            type="text"
            value={addContact.lastName}
            name="lastName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label className="name-container">Email</Form.Label>
          <Form.Control
            type="email"
            value={addContact.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="comment">
          <Form.Label className="name-container">Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={addContact.comment}
            name="comment"
            onChange={handleChange}
          />
        </Form.Group>
        {editingContact ? (
          <Button variant="warning" onClick={handleUpdate}>
            Update
          </Button>
        ) : (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
        

      </Form>

       {/* Seksioni për shfaqjen e kontakteve */}
       <h2 className="mt-4">Contact List</h2>
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <li key={index}>
              {contact.firstName} {contact.lastName} - {contact.email}
              <Button variant="info" size="sm" className="ms-2" onClick={() => handleEdit(contact)}>
                Edit
              </Button>
            </li>
          ))
        ) : (
          <p>Nuk ka kontakte për momentin.</p>
        )}
      </ul>
    </Container>
  );
};

export default Contact;
