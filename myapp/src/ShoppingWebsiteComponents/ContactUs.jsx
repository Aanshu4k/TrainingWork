import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: '', email: '', message: ''
  });
  const [data, setData] = useState([]);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5089/api/ContactUs")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log("Error fetching data : ", error));
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value })
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(false)
    }
    else
      setValidated(true);
    console.log(validated)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validated) {
        const response = await axios.post('http://localhost:5089/api/ContactUs', contact)
        console.log(response.data)
        toast.success("Your Response has been successfully submitted!");
        window.location.reload();
      }
      else {
        toast.error("Invalid input fields!");
      }
    }
    catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <h2>Contact Us</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleInputChange}
            pattern="^[a-zA-Z0-9\s]+$"
            required
          />
          <Form.Control.Feedback type="invalid">Invalid input!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">Invalid input!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            name="message"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">Invalid input!</Form.Control.Feedback>
        </Form.Group>

        <Button variant="info" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>

      <table style={{ border: '2px solid grey', margin: '20px', padding: '20px' }}>
        <thead style={{ border: '2px solid grey', padding: '20px' }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ContactUs;
