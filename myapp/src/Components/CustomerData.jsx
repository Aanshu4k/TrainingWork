import { useState } from "react";
import CustDataTable from './CustDataTable';
const CustomerData = () => {

    const [custData, setCustData] = useState([]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustData({ ...custData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://localhost:7247/api/Customer/PostCustomer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(custData),
            });
            if (response.ok) {
                alert('Data submitted successfully');
            } else {
                console.error('Error submitting data. Response Status: ' + response.status);
                const responseText = await response.text();
                console.error('Error Message: ' + responseText);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <h1>CUSTOMER FORM</h1>
            <form style={{ display: 'flex', flexDirection: 'column', width: '30rem' }}>
                <label>ID</label>
                <input type='text' onChange={handleInputChange} name='Id' value={custData.Id} style={{ backgroundColor: '#fff' }} />
                <label>First Name</label>
                <input type='text' onChange={handleInputChange} name='FirstName' value={custData.FirstName} />
                <label>Last Name</label>
                <input type='text' onChange={handleInputChange} name='LastName' value={custData.LastName} />
                <label>Address</label>
                <input type='text' onChange={handleInputChange} name='Address' value={custData.Address} />
                <label>Phone Number</label>
                <input type='text' onChange={handleInputChange} name='PhoneNumber' value={custData.PhoneNumber} /><br />
                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
            <CustDataTable />
            {/* <table>
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
            </table> */}
        </>
    )
}

export default CustomerData;