import Table from 'react-bootstrap/Table';
import {useState,useEffect} from 'react';
import axios from 'axios';
import React from 'react';
const CustDataTable = () => {
    const [custData, setCustData] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7247/api/Customer/GetCustomer').then((response) => {
            console.log(response.data);
            setCustData(response.data);
        })
            .catch((error) => console.log('Error fetching data : ', error));

    }, []);
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {custData.map(cust => (
                        <tr key={cust.Id}>
                            <td>{cust.id}</td>
                            <td>{cust.firstName}</td>
                            <td>{cust.lastName}</td>
                            <td>{cust.address}</td>
                            <td>{cust.phoneNumber}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    )
}
export default CustDataTable;