
import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const DeleteCustomer = (props) => {
    const [id, setId] = useState();

    const deleteCust = () => {
        axios.delete(`https://localhost:7247/api/Customer/${id}`)
            .then(response => {
                console.log('Delete request successfull', response);
                alert(`Customer with ID : ${id} deleted successfully`);
            })
            .catch((error => {
                alert(`Customer with ID : ${id} does not exist !`);
                console.log("Error deleting customer", error)
            }
            ))
    }
    const handleInputChange = (e) => {
        setId(e.target.value);
    }
    return (
        <>
            <h1>Delete Customer</h1>
            <Form style={{borderColor:'#046dff'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '50%' }}>
                    <Form.Label>Customer ID : </Form.Label>
                    <Form.Control type="text" placeholder="Enter the ID" value={props.custData.id} onChange={handleInputChange} />
                    <Form.Text className="text-muted">
                        Enter the ID of customer you want to delete
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ alignContent: 'center' }}>
                    <Button variant="primary" type="submit" onClick={deleteCust} >
                        Delete
                    </Button>
                </Form.Group>

            </Form>
        </>
    )
}
export default DeleteCustomer;