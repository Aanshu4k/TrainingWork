import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import "./Products.css";
import AddForm from "./AddForm";

const CustDataTable = () => {
  const [prodData, setProdData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [updatedProduct, setUpdateProduct] = useState({
    productName: "", price: null, brand: ""
  });
  const [showForm, setShowForm] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:7247/api/Product")
      .then((response) => {
        console.log(response.data);
        setProdData(response.data);
      })
      .catch((error) => console.log("Error fetching data : ", error));
  }, []);

  const handleEdit = (id, prodName, price, brand) => {
    setUpdateProduct({
      id: id,
      productName: prodName,
      price: price,
      brand: brand
    })
    setShowForm(!showForm);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://localhost:7247/api/Product/${id}`)
      .then((response) => {
        console.log("Delete request successfull", response);
        toast.success(`Product with ID : ${id} deleted successfully`);
        setProdData((prevData) =>
          prevData.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        toast.error(`Customer with ID : ${id} does not exist !`);
        console.log("Error deleting customer", error);
      });
  };
  const handleInputChange = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      
    }
    setValidated(true);
    const { name, value } = e.target;
    setUpdateProduct({ ...updatedProduct, [name]: value });
  }
  const handleUpdate = async (id) => {
    setShowForm(!showForm);
    try {
      if (validated) {
        await axios
          .put(`https://localhost:7247/api/Product/${id}`,
            {
              id: updatedProduct.id,
              prodName: updatedProduct.productName,
              price: updatedProduct.price,
              brand: updatedProduct.brand,
            }
          )
          .then((response) => {
            toast.success(`Product with ID : ${id} updated successfully`);
            setProdData((prevData) =>
              prevData.filter((product) => product.id !== id)
            );
            console.log(response);
          })
          .catch((error) => {
            toast.error(`Product with ID : ${id} does not exist!`);
            console.error("Error updating customer", error);
          });
      }
      else {
        toast.error("Kindly fill all the fields in the form!");
      }
    }
    catch {
      toast.error("Kindly enter valid input!");
    }
  };
  return (
    <div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <h1>Products</h1>
      <Table
        responsive
        style={{
          border: "5px solid grey",
          borderRadius: "20px",
          width: "50rem",
          borderCollapse: "separate",
          borderColor: "#046dff",
          padding: "10px",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {prodData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.prodName}</td>
              <td>Rs.{product.price}</td>
              <td>{product.brand}</td>
              <td>
                <Button
                  variant="danger"
                  type="submit"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>{" "}
                <Button
                  variant="info"
                  type="submit"
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(product.id, product.prodName, product.price, product.brand)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        type="submit" variant="primary" onClick={() => { setShowAddForm(!showAddForm); }} style={{ marginLeft: "45rem" }}>
        + ADD
      </Button>

      {showAddForm && (
        <div className="modal-overlay">
          <AddForm setShowAddForm={setShowAddForm} showAddForm={showAddForm} />
        </div>
      )}

      {showForm && (
        <div style={{ marginTop: "20px", display: "flex" }}>
          <Form noValidate validated={validated} onSubmit={handleUpdate} className="update-form" style={{ display: "inline" }}>
            <h3>Update Product Detail</h3>
            <FloatingLabel
              controlId="floatingInput"
              label="ID"
              className="mb-3"
            >
              <Form.Control type="text" value={updatedProduct.id} readOnly />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Product Name"
              className="mb-3">
              <Form.Control
                type="text"
                name="productName"
                value={updatedProduct.productName}
                onChange={handleInputChange}
                pattern="^[a-zA-Z0-9\s]+$"
                required
              />
              <Form.Control.Feedback type="invalid">
                Invalid Format
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="price"
                value={updatedProduct.price}
                onChange={handleInputChange}
                pattern="^\d*\.?\d*$"
                required
              />
              <Form.Control.Feedback type="invalid">
                Invalid Format
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Brand"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="brand"
                value={updatedProduct.brand}
                onChange={handleInputChange}
              />
            </FloatingLabel>

            <Button
              type="submit"
              variant="warning"
              onClick={() => handleUpdate(updatedProduct.id)}
            >
              UPDATE
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};
export default CustDataTable;