import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import "./Products.css";

const AddForm = (props) => {
  const [newProduct, setNewProduct] = useState({
    id: "",
    prodName: "",
    price: "",
    brand: "",
  });
  const [validated, setValidated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
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
          .post("https://localhost:7247/api/Product", newProduct)
          .then((response) => {
            console.log(response.data);
            toast.success("Product Added Successfully!");
          })
      }
      else {
        toast.error("Kindly fill all the fields in the form!");
      }
      window.location.reload();
    }
    catch {
      toast.error("Kindly enter valid input!");
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
        <h3>Add Product</h3>
        <br />
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
            <Form.Control
              type="text"
              name="id"
              value={newProduct.id}
              onChange={handleInputChange}
              required
              pattern="^[0-9]+$"
            />
            <Form.Control.Feedback type="invalid">
              Please enter id in a valid format.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <FloatingLabel
            controlId="floatingInput"
            label="Product Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="prodName"
              value={newProduct.prodName}
              onChange={handleInputChange}
              pattern="^[a-zA-Z0-9\s]+$"
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
            label="Price"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              pattern="^\d*\.?\d*$"
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
            label="Brand"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="brand"
              value={newProduct.brand}
              onChange={handleInputChange}
              required
            />
          </FloatingLabel>
        </Form.Group>

        <Button type="submit" className="add-btn" onClick={handleAdd}>
          ADD
        </Button>{' '}
        <Button variant="danger" type="submit" className="close-btn" onClick={() => { props.setShowAddForm(!props.showAddForm) }}>
          CLOSE
        </Button>
      </Form>
    </div>
  );
};
export default AddForm;
