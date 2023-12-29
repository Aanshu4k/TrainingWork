import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import "./CustomerData.css";
 
const AddCustomer = (props) => {
  const [newCustomer, setNewCustomer] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: null,
  });
  const [validated, setValidated] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

  };
  const handleAdd = async (event) => {
    event.preventDefault();
    props.setShowAddForm(!props.showAddForm);
    try {
      if (validated) {
        await axios
          .post("http://localhost:5085/api/Customers", newCustomer)
          .then((response) => {
            console.log(response.data);
            toast.success("Customer Added Successfully!");
          })
        window.location.reload();
      }
      else {
        toast.error("Kindly fill all the fields in the form!");
      }
    }
    catch (error) {
      toast.error("Kindly enter valid input!");
      console.log("Error occured ! ", error);
    }
  };
  return (
    <div style={{ marginTop: "20px", display: "block", width: "40rem" }}>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleAdd}
        className="add-form"
      >
        <h3>Add Customer</h3>
        <br />
        {/* <Form.Group as={Col} md="12" controlId="validationCustom01">
          <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
            <Form.Control
              type="text"
              name="id"
              value={newCustomer.id}
              onChange={handleInputChange}
              required
              pattern="^[0-9]+$"
            />
            <Form.Control.Feedback type="invalid">
              Please enter id in a valid format.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group> */}

        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <FloatingLabel
            controlId="floatingInput"
            label="First Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="firstName"
              value={newCustomer.firstName}
              onChange={handleInputChange}
              pattern="^[a-zA-Z\s]+$"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Format
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>


        <Form.Group as={Col} md="12" controlId="validationCustom03">
          <FloatingLabel
            controlId="floatingInput"
            label="Last Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="lastName"
              value={newCustomer.lastName}
              onChange={handleInputChange}
              pattern="^[a-zA-Z\s]+$"
              required
            />
            <Form.Control.Feedback type="invalid">
              Invalid Format
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <FloatingLabel
            controlId="floatingInput"
            label="Phone Number"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="phoneNumber"
              value={newCustomer.phoneNumber}
              onChange={handleInputChange}
              pattern="^[0-9]+$"
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Button type="submit" className="add-btn" onClick={handleAdd}>
          ADD
        </Button>{' '}
        <Button variant="dark" type="submit" className="close-btn" onClick={() => { props.setShowAddForm(!props.showAddForm) }}>
          CLOSE
        </Button>
      </Form>
    </div>
  );
};
export default AddCustomer;
