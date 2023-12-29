import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Products.css';
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
        const prod = prodData.find((product) => product.id === id)
        setCart([...cart, { ...prod, quantity: 1 }]);
    }
    const removeCart = (id) => {
        const removeItem = cart.filter((item) => item.id !== id)
        setCart(removeItem);
    }
    return (
        <div style={{ display: 'flex' }}>
            <div className="container">
                {prodData.map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Text>
                                Price: ${product.price}
                            </Card.Text>
                            <Button variant="primary" onClick={() => addToCart(product.id)}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            <div>
                <h3>Your Cart</h3><br />
                {
                    cart.map(items => (
                        <div key={items.id} className="Cart">
                            <h3>{items.title}</h3>
                            <p>Price: ${items.price}</p>
                            <p>Quantity: {items.quantity}</p>
                            <Button variant="danger" onClick={() => removeCart(items.id)}>Remove</Button>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};
export default Products;