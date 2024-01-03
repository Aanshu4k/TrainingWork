import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from "axios";

const ContactUs = () => {
  const [contact, setContact] = useState({
    name: '', email: '', message: ''
  });
  const [validated, setValidated] = useState(false);
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
        alert('Data Submitted!')
      }
      else {
        alert('Invalid form inputs!')
      }

    }
    catch (error) {
      console.log(error.message)
    }
  }

  return (
    <Container>
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
    </Container>
  );
};

export default ContactUs;
