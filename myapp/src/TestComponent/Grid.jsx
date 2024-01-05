import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const Grid = () => {
    const [showGrid, setShowGrid] = useState(false);
    const [showFeeder, setShowFeeder] = useState(false);
    const [showFeederTable, setShowFeederTable] = useState(false);
    const [circle, setCircle] = useState([]);
    const [gridData, setGridData] = useState([]);
    const [feederData, setFeederData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5125/api/GridData/GetCircle')
            .then((response) => setCircle(response.data))

        axios.get('http://localhost:5125/api/GridData/GetGridData')
            .then((response) => setGridData(response.data))



    }, [])
    const handleFeederData = () => {
        axios.get('http://localhost:5125/api/GridData/GetFeederData')
            .then((response) => setFeederData(response.data))
            setShowFeederTable(true)
    }
    return (
        <>
        <div>

        </div>
            <h3>MONTHLY AUDIT</h3>
            <Form style={{ display: 'flex', justifyContent: 'space-between',height:'max-content' }}>
                <Form.Label>Select Month
                    <Form.Control type="date" onSelect={() => setShowGrid(true)} /></Form.Label>
                <label>Circle
                    <select>
                        {circle.map((item) => (
                            <option value={item.name}>{item.name}</option>
                        ))}
                    </select> </label>
                <Button variant="success" type="submit" >SUBMIT</Button>
            </Form>
            {showGrid && (
                <><h3>GRID AUDIT DETAILS</h3>
                    <div style={{ height: '350px', overflowY: 'scroll', border: '2px solid grey', margin: '5px' }}>
                        <Table striped bordered hover style={{ height: '200px' }}>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Grid Code</th>
                                    <th>Grid Name</th>
                                    <th>Import</th>
                                    <th>Export</th>
                                    <th>Difference</th>
                                    <th>Data Month</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    gridData.map((data =>
                                        <tr>
                                            <td>{data.id}</td>
                                            <td><Button variant="primary" onClick={handleFeederData}>{data.gridNo}</Button>{' '}</td>
                                            <td>{data.name}</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>date</td>
                                        </tr>
                                    ))}

                            </tbody>
                        </Table>
                    </div></>
            )}
            <h3>Feeder Data</h3>
            
            {showFeederTable && (
                <div style={{ height: '350px', overflowY: 'scroll', border: '2px solid grey', margin: '5px' }}>
                    <Table striped bordered hover >

                        <thead>
                            <tr>
                                <th>Feeder ID</th>
                                <th>Feeder Name</th>
                                <th>Voltage Level</th>
                                <th>Status</th>
                                <th>Meter No</th>
                                <th>MF</th>
                                <th>Import</th>
                                <th>Export</th>
                                <th>Remark</th>
                                <th>Basis</th>
                                <th>Feeder CAT</th>
                                <th>Inter Exchange</th>
                                <th>Div Sharing</th>
                                <th>Division</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feederData.map((data =>
                                <tr>
                                    <td><Button>{data.feedeR_ID}</Button></td>
                                    <td>{data.connecT_WITH}</td>
                                    <td>{data.voltagE_LAVEL}</td>
                                    <td>{data.status}</td>
                                    <td>{data.meterno}</td>
                                    <td>{data.mf}</td>
                                    <td>IMPORT</td>
                                    <td>EXPORT</td>
                                    <td>Remark</td>
                                    <td>Basis</td>
                                    <td>{data.feedeR_CAT}</td>
                                    <td>{data.inteR_EXCHANGE_POINTS}</td>
                                    <td>{data.diV_SHARING}</td>
                                    <td>{data.division}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            )}
            <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', margin: '10px',justifyContent:'space-around' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <label>Feeder ID
                        <input type='text'/></label>
                    <label>Feeder Name
                        <input type='text' /></label>
                    <label>Import
                        <input type='text' /></label>
                    <label>Export
                        <input type='text' /></label>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <label>Remark
                        <input type='text' /></label>
                    <Button>Update Reading</Button>
                </div>
                <div style={{ display: 'flex', textAlign: 'end', alignContent: 'flex-end' }}>
                    <Button variant="primary">Load Survey</Button>{' '}
                    <Button variant="primary">Energy Pattern Monthly</Button>{' '}
                    <Button variant="primary">Daily Max Min Value</Button>{' '}
                    <Button variant="primary">Monthly Reading</Button>{' '}

                </div>
            </form>
        </>
    )
}
export default Grid;