import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';
const CardItem = () => {
    
    return (
        <div>
            <Card.Img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
            <Card.Body>
                <Card.Title>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Card.Title>
                <Card.Text>
                    Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                </Card.Text>
                <Button>Buy Now</Button>{" "}
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </div>

    )
}
export default CardItem;