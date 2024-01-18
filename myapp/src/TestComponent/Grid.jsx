import { useCallback, useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import FeederForm from "./FeederForm";
import './Grid.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Grid = () => {
    const [showGrid, setShowGrid] = useState(false);
    const [showFeederTable, setShowFeederTable] = useState(false);
    const [circle, setCircle] = useState([]);
    const [gridData, setGridData] = useState([]);
    const [feederData, setFeederData] = useState([]);
    const [dataMonth, setDataMonth] = useState();
    const [gridName, setGridName] = useState();
    useEffect(() => {
        axios.get('http://localhost:5125/api/GridData/GetCircle')
            .then((response) => setCircle(response.data))
    }, [feederData])

    const handleGridData = useCallback((circle) => {
        axios.get(`http://localhost:5125/api/GridData/GetGridData?circleName=${circle}`)
            .then((response) => setGridData(response.data))
    }, []);

    const handleFeederData = (gridNo, name) => {
        axios.get(`http://localhost:5125/api/GridData/GetFeederData?GRIDNO=${gridNo}`)
            .then((response) => setFeederData(response.data))
        setGridName(name);
        setShowFeederTable(true);
    }

    return (
        <>
            <h3 style={{filter:'drop-shadow(0 0 5px cyan)'}}>MONTHLY AUDIT</h3>
            <Form className="user-option-selection" >
                <FloatingLabel controlId="floatingSelect" label="Month">
                    <Form.Control type="month" onChangeCapture={(e) => { setDataMonth(e.target.value) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingSelect" label="CIRCLE">
                    <Form.Select onChange={(e) => handleGridData(e.target.value)} aria-label="Default select example">
                        {circle.map((item) => (
                            <option key={item.id} value={item.name}>{item.name}</option>
                        ))}
                    </Form.Select>
                </FloatingLabel>
                <Button variant="success" onClick={() => setShowGrid(true)}>SUBMIT</Button>
            </Form>
            {showGrid && (
                <div className="grid-audit-section">
                    <h4>GRID AUDIT DETAILS</h4>
                    <div className="grid-audit-table">
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
                                {gridData.map(((data, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td><Button variant="primary" onClick={() => handleFeederData(data.gridNo, data.name)}>{data.gridNo}</Button>{' '}</td>
                                        <td>{data.name}</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>{dataMonth}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )}

            {showFeederTable && (
                <div className="feeder-data-section">
                    <h3>Feeder Data</h3>
                    <h4>Feeder Data for Grid: {gridName}</h4>
                    <div className="feeder-data-table" >
                        <Table striped bordered hover>
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
                                {feederData.map((data => <tr key={data.ID}>
                                    <td><Button>{data.feedeR_ID}</Button></td>
                                    <td>{data.connecT_WITH}</td>
                                    <td>{data.voltagE_LAVEL}</td>
                                    <td>{data.status}</td>
                                    <td>{data.meterno}</td>
                                    <td>{data.mf}</td>
                                    <td>{data.import}</td>
                                    <td>{data.export}</td>
                                    <td>{data.remark}</td>
                                    <td>{data.basis}</td>
                                    <td>{data.feedeR_CAT}</td>
                                    <td>{data.inteR_EXCHANGE_POINTS}</td>
                                    <td>{data.diV_SHARING}</td>
                                    <td>{data.division}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            )}
            <FeederForm />
        </>
    )
}
export default Grid;