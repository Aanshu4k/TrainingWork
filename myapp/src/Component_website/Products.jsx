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
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [showForm, setShowForm] = useState(false);
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
    setSelectedProductId(id);
    setProductName(prodName);
    setPrice(price);
    setBrand(brand);
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
  const handleUpdate = async (id) => {
    try {
      await axios
        .put(`https://localhost:7247/api/Product/${id}`, {
          prodName: productName,
          price: price,
          brand: brand,
        })
        .then((response) => {
          console.log("Update request successful", response);
          toast.success(`Product with ID : ${id} updated successfully`);
        })

        .catch((error) => {
          toast.error(`Product with ID : ${id} does not exist!`);
          console.error("Error updating customer", error);
          setProductName("");
          setPrice("");
          setBrand("");
        });
    } catch (error) {
      console.error("Error:", error);
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
                  variant="primary"
                  type="submit"
                  className="delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>{" "}
                <Button
                  variant="primary"
                  type="submit"
                  className="edit-btn"
                  onClick={() =>
                    handleEdit(
                      product.id,
                      product.prodName,
                      product.price,
                      product.brand
                    )
                  }
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        type="submit"
        variant="primary"
        onClick={() => {
          setShowAddForm(!showAddForm);
        }}
        style={{ marginLeft: "45rem" }}
      >
        + ADD
      </Button>

      {showAddForm && (
        <div className="modal-overlay">
          <AddForm setShowAddForm={setShowAddForm} showAddForm={showAddForm} />
        </div>
      )}

      {showForm && (
        <div style={{ marginTop: "20px", display: "flex" }}>
          <Form className="update-form" style={{ display: "inline" }}>
            <h3>Update Product Detail</h3>
            <FloatingLabel
              controlId="floatingInput"
              label="ID"
              className="mb-3"
            >
              <Form.Control type="text" value={selectedProductId} readOnly />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Product Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Price"
              className="mb-3"
            >
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Brand"
              className="mb-3"
            >
              <Form.Control
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </FloatingLabel>

            <Button
              type="submit"
              className="update-btn"
              onClick={() => handleUpdate(selectedProductId)}
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
