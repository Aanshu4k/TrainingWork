import { useState } from "react";
import CustDataTable from './CustDataTable';
import DeleteCustomer from "./DeleteCustomer";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UpdateCustomer from "./UpdateCustomer";
const CustomerData = () => {
    const [custData, setCustData] = useState([]);
    const [validated, setValidated] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustData((prevData)=>({ ...custData, [name]: value }));

        let isValid = true;
        const regexPatterns = {
            Id: /^[a-zA-Z0-9]+$/,
            FirstName: /^[a-zA-Z]+$/,
            LastName: /^[a-zA-Z]+$/,
            Address: /^[a-zA-Z0-9\s,.'-]+$/,
            PhoneNumber: /^\d{10}$/,  
        };
        if(regexPatterns[name]&& !regexPatterns[name].test(value)){
            isValid=false;
        }

        setValidated(isValid);
    }
    const handleSubmit = async (e) => {
        try {
            const form = e.currentTarget;
            if (form.checkValidity() === false|| !validated) {
                e.preventDefault();
                e.stopPropagation();
            }
            setValidated(true);
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
        <div className="form-containerX">
            <h1>CUSTOMER FORM</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ borderColor: '#046dff' }}>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="ID" className="mb-3">
                            <Form.Control type="text" placeholder="ID" onChange={handleInputChange} name="Id" value={custData.Id} required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Invalid ID
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
                            <Form.Control type="text" placeholder="First Name" onChange={handleInputChange} name="FirstName" value={custData.FirstName} required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Invalid First Name
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
                            <Form.Control type="text" placeholder="Last Name" onChange={handleInputChange} name="LastName" value={custData.LastName} required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Invalid Last Name
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Address" className="mb-3">
                            <Form.Control type="text" placeholder="Address" onChange={handleInputChange} name="Address" value={custData.Address} required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Invalid Address
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
                            <Form.Control type="text" placeholder="Phone No." onChange={handleInputChange} name="PhoneNumber" value={custData.PhoneNumber} required />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">
                                Invalid Phone No.
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            <DeleteCustomer custData={custData} />
            <UpdateCustomer />
            <CustDataTable />
        </div>
    )
}

export default CustomerData;