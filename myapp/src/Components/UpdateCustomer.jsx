import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

const UpdateCustomer = () => {
    const [custId,setCustId] = useState();
    const [updateData,setUpdateData] = useState([]);
    useEffect(() => {
        axios.get('https://localhost:7247/api/Customer/GetCustomer').then((response) => {
            console.log('Update data : ',response.data);
            setUpdateData(response.data);
        })
            .catch((error) => console.log('Error fetching data : ', error));
    }, []);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateData({ ...updateData, [name]: value });
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`https://localhost:7247/api/Customer/${custId}`, updateData)
                .then(response => {
                    console.log('Update request successful', response);
                    alert(`Customer with ID : ${custId} updated successfully`);
                })
                .catch(error => {
                    alert(`Customer with ID : ${custId} does not exist!`);
                    console.error("Error updating customer", error);
                });
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    return (
        <div className="form-containerX">
            <h1>Update Customer</h1>
            <Form style={{borderColor:'#046dff'}}>
                <Row>
                    <Col sm={4}>
                        <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
                            <Form.Control type="text" placeholder="ID" onChange={(e) => { setCustId(e.target.value) }} name="IdUpd" value={custId} />
                            <Form.Text id="passwordHelpBlock" muted>
        Enter the ID of a customer you want to update
      </Form.Text>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
                            <Form.Control type="text" placeholder="ID" onChange={handleInputChange} name="Id" value={updateData.Id} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                            <Form.Control type="text" placeholder="First Name" onChange={handleInputChange} name="FirstName" value={updateData.FirstName} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                            <Form.Control type="text" placeholder="Last Name" onChange={handleInputChange} name="LastName" value={updateData.LastName} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                            <Form.Control type="text" placeholder="Address" onChange={handleInputChange} name="Address" value={updateData.Address} />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                            <Form.Control type="text" placeholder="Phone No." onChange={handleInputChange} name="PhoneNumber" value={updateData.PhoneNumber} />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" onClick={handleUpdate}>
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default UpdateCustomer;