import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
const CustDataTable = () => {
    const [prodData, setProdData] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7247/api/Product').then((response) => {
            console.log(response.data);
            setProdData(response.data);
        })
            .catch((error) => console.log('Error fetching data : ', error));

    }, []);
    const handleDelete = (id) => {
        axios.delete(`https://localhost:7247/api/Product/${id}`)
            .then(response => {
                console.log('Delete request successfull', response);
                alert(`Product with ID : ${id} deleted successfully`);
                setProdData(prevData => prevData.filter(product => product.id !== id));
            })
            .catch((error => {
                alert(`Customer with ID : ${id} does not exist !`);
                console.log("Error deleting customer", error)
            }
            ))
    }
    const handleUpdate=async(id)=>{
        try{
            await axios.put(`https://localhost:7247/api/Product/${id}`, prodData)
            .then(response => {
                console.log('Update request successful', response);
                alert(`Product with ID : ${id} updated successfully`);
            })
            .catch(error => {
                alert(`Product with ID : ${id} does not exist!`);
                console.error("Error updating customer", error);
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <h1>Products</h1>
            <Table responsive style={{border:'5px solid grey',borderRadius:'20px',width:'50rem',borderCollapse:'separate',borderColor:'#046dff',padding:'10px'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {prodData.map(cust => (
                        <tr key={cust.id}>
                            <td>{cust.id}</td>
                            <td>{cust.prodName}</td>
                            <td>{cust.price}</td>
                            <td>{cust.brand}</td>
                            <td><button onClick={() => handleDelete(cust.id)}>Delete</button></td>
                            <td><button onClick={() => handleUpdate(cust.id)}>Edit</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}
export default CustDataTable;