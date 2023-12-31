import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cart from "./Cart";
import "./Products.css";
const Products = () => {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([{ qty: 0 }]);
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    });
  });

  const handleAdd = (id) => {
    const item = data.find((item) => item.id === id);
    if (cartItems.find((item) => item.id === id)) {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, qty: item.qty + 1 },
      ]);
    } 
    else setCartItems((prevItems) => [...prevItems, { ...item, qty: 1 }]);
    console.log(cartItems);
  };
  return (
    <div className="container" style={{ display: "flex" }}>
      <div className="products-section" style={{ display: "inline" }}>
        <div>
          <h3>Products</h3>
        </div>
        <div className="products-container">
          {data.map((items) => (
            <Card className="product-card">
              <Card.Img variant="top" src={items.thumbnail} alt={items.title} />
              <Card.Body>
                <Card.Title>{items.title}</Card.Title>
                <Card.Text>{items.description}</Card.Text>
                <Button variant="primary" onClick={() => handleAdd(items.id)}>
                  ADD
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="cart-section">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
};
export default Products;
