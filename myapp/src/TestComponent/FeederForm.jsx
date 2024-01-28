import Button from 'react-bootstrap/Button';
import './FeederForm.css';
import Form from 'react-bootstrap/Form';

const FeederForm = () => {
    return (
        <>
            <Form className='feeder-form'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Form.Label>Feeder ID
                        <Form.Control type='text' disabled="true"/></Form.Label>
                    <Form.Label>Feeder Name
                        <Form.Control type='text' disabled="true"/></Form.Label>
                    <Form.Label>Import
                        <Form.Control type='text' disabled="true"/></Form.Label>
                    <Form.Label>Export
                        <Form.Control type='text' disabled="true"/></Form.Label>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Form.Label>Remark
                        <Form.Control type='text' /></Form.Label>
                    <Button disabled="true">Update Reading</Button>
                </div>
                <div style={{ display: 'flex', flexDirection:'row' }}>
                    <Button variant="success">Load Survey</Button>{' '}
                    <Button variant="info">Energy Pattern Monthly</Button>{' '}
                    <Button variant="warning">Daily Max Min Value</Button>{' '}
                    <Button variant="primary">Monthly Reading</Button>{' '}
                </div>
            </Form>
        </>
    );
}
export default FeederForm;