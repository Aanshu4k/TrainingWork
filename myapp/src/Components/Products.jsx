import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import CardItem from './CardItem';
import { useState,useEffect } from 'react';
const Products = () => {
    var [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products/1')
            // .then(res => res.json())
            .then((data) => {
                setProducts(data.data)
                console.log(data.data)
            })
    }, [])

    return (
        <div  style={{ width: 'auto', display: 'flex',flexDirection:'row' }}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    );
}

export default Products;