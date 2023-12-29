import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import AddCustomer from "./AddCustomer";


const CustomerData = () => {
  const [data, setData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [updatedCustomer, setUpdateCustomer] = useState({
    id: null, firstName: "", lastName: "", phoneNumber: ""
  });
  const [showForm, setShowForm] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5085/api/Customers")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.log("Error fetching data : ", error));
  }, []);

  const handleEdit = (id, firstName, lastName, phoneNumber) => {
    setUpdateCustomer({
      id: id,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    })
    setShowForm(!showForm);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5085/api/Customers/${id}`)
      .then((response) => {
        console.log("Delete request successfull", response);
        toast.success(`Product with ID : ${id} deleted successfully`);
        setData((prevData) =>
          prevData.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        toast.error(`Customer with ID : ${id} does not exist !`);
        console.log("Error deleting customer", error);
      });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdateCustomer({ ...updatedCustomer, [name]: value });

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(false);
    }
    else
      setValidated(true);
    console.log("Validated = ", validated);
  }
  const handleUpdate = async (id) => {
    setShowForm(!showForm);
    try {
      if (validated) {
        await axios
          .put(`http://localhost:5085/api/Customers/${id}`,
            {
              id: updatedCustomer.id,
              firstName: updatedCustomer.firstName,
              lastName: updatedCustomer.lastName,
              phoneNumber: updatedCustomer.phoneNumber,
            }
          )
        toast.success(`Product with ID : ${id} updated successfully`);
        setShowForm(!showForm);
        window.location.reload();
      }
      else {
        toast.error("Invalid form input!");
      }
    }
    catch (error) {
      toast.error(`Error updating customer with ID: ${id}`);
      console.error("Error updating customer", error);
    }
  };
  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <h1>Customer</h1>
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.firstName}</td>
              <td>{product.lastName}</td>
              <td>{product.phoneNumber}</td>
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
                    handleEdit(product.id, product.firstName, product.lastName, product.phoneNumber)}>
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
          <AddCustomer setShowAddForm={setShowAddForm} showAddForm={showAddForm} />
        </div>
      )}

      {showForm && (
        <div style={{ marginTop: "20px", display: "flex" }}>
          <Form noValidate validated={!validated} onSubmit={handleUpdate} className="update-form" style={{ display: "inline" }}>
            <h3>Update Customer Detail</h3>
            <FloatingLabel
              controlId="floatingInput"
              label="ID"
              className="mb-3"
            >
              <Form.Control type="text" value={updatedCustomer.id} readOnly />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3">
              <Form.Control
                type="text"
                name="firstName"
                value={updatedCustomer.firstName}
                onChange={handleInputChange}
                pattern="^[a-zA-Z.\s]+$"
                required
              />
              <Form.Control.Feedback type="invalid">
                Invalid Format
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="lastName"
                value={updatedCustomer.lastName}
                onChange={handleInputChange}
                pattern="^[a-zA-Z\s]+$"
                required
              />
              <Form.Control.Feedback type="invalid">
                Invalid Format
              </Form.Control.Feedback>
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingInput"
              label="Phone Number"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="phoneNumber"
                value={updatedCustomer.phoneNumber}
                onChange={handleInputChange}
                pattern="^[0-9\s]+$"
                required
              />
            </FloatingLabel>

            <Button
              type="submit"
              variant="warning"
              onClick={() => handleUpdate(updatedCustomer.id)}>
              UPDATE
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};
export default CustomerData;