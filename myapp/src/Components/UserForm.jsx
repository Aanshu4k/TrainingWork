import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
function UserForm() {
    const [data, setData] = useState({
        name: '',
        mobileNo: '',
        designation: ''
    }, []);
    useEffect(() => {
        fetch('http://localhost:5228/api/controller/UserFormGet')
            .then(response => response.json())
            .then((data) => {
                console.log('Data received:', data);
            })
            .catch((error) => console.error('Error fetching data:', error));

    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5228/api/controller/UserFormPost", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                alert('Data submitted successfully');
                console.log('Data submitted successfully');
            } else {
                console.error('Error submitting data. Response Status: ' + response.status);
                const responseText = await response.text();
                console.error('Error Message: ' + responseText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <Form style={{ display: 'inline-block' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name : </Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    <i>Please enter your full Name</i>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mobile Number </Form.Label>
                <Form.Control type="text" placeholder="Mobile No" name="mobileNo" value={data.mobileNo} onChange={handleInputChange} />
                <Form.Text className="text-muted">
                    <i>Please enter 10 digit mobile no. only</i>
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Designation </Form.Label>
                <Form.Control type="text" placeholder="" name="designation" value={data.designation} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    );
}

export default UserForm;