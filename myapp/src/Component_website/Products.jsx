import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
const CustDataTable = () => {
  const [prodData, setProdData] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
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
        alert(`Product with ID : ${id} deleted successfully`);
        setProdData((prevData) =>
          prevData.filter((product) => product.id !== id)
        );
      })
      .catch((error) => {
        alert(`Customer with ID : ${id} does not exist !`);
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
          alert(`Product with ID : ${id} updated successfully`);
        })

        .catch((error) => {
          alert(`Product with ID : ${id} does not exist!`);
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
    <>
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {prodData.map((cust) => (
            <tr key={cust.id}>
              <td>{cust.id}</td>
              <td>{cust.prodName}</td>
              <td>{cust.price}</td>
              <td>{cust.brand}</td>
              <td>
                <button onClick={() => handleDelete(cust.id)}>Delete</button>{" "}
                <button
                  onClick={() =>
                    handleEdit(cust.id, cust.prodName, cust.price, cust.brand)
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showForm && (
        <div style={{ marginTop: "20px" }}>
          <form>
            <label>ID</label>
            <input type="text" value={selectedProductId} readOnly />
            <label>Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label>Price</label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label>Brand</label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleUpdate(selectedProductId)}
            >
              UPDATE
            </button>
          </form>
        </div>
      )}
    </>
  );
};
export default CustDataTable;
