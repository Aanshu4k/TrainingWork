import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cart from "./Cart";
import "./Products.css";
const Products = () => {
  const [prodData, setProdData] = useState([]);
  const [cart, setCart] = useState([{ quantity: 0 }]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProdData(response.data.products);
      })
      .catch((error) => console.log("Error fetching data : ", error));
  }, []);

  const addToCart = (id) => {
    const prod = prodData.find((product) => product.id === id);
    if (cart.find((item) => item.id === id)) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } 
    else 
        setCart((prevItems) => [...prevItems, { ...prod, quantity: 1 }]);
  };
  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        {prodData.map((product) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product.id)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart} setCart={setCart} addToCart={addToCart} />
      </div>
    </div>
  );
};
export default Products;
