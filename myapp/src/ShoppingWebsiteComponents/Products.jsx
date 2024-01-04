import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cart from "./Cart";
import {  Toaster } from "react-hot-toast";
import "./Products.css";
const Products = () => {
  const [prodData, setProdData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProdData(response.data.products);
      })
      .catch((error) => console.log("Error fetching data : ", error));
  }, []);

  const addToCart = useCallback(async (id) => {
    try{
      const prod = prodData.find((product) => product.id === id);
      if (cart.find((item) => item.id === id)) {
        setCart((prevItems) =>
          prevItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      else 
        setCart((prevItems) => [...prevItems, { ...prod, quantity: 1 }]);
    }
    catch(error){
      console.log(error.response)
    }
  }, [cart, prodData]);


  return (
    <div style={{ display: "flex" }}>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className="products-container">
        {prodData.map((product) => (
          <Card className="product-card"  key={product.id}>
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
        <Cart
          cart={cart}
          setCart={setCart}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};
export default Products;
