import React,{useState} from "react";
const Products = () => {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
      };
    
      const thStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
      };
    
      const tdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
      };
      var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    
    return (
        <div>
            <h1><b>Products</b></h1>
            <label>Search :</label>
            <input type='text' />
            <button type='submit'>SEARCH</button><br/><br/>
            <div className="ProductDiv" style={{ display: 'flex', alignItems: 'center' }}>
                <table style={tableStyle}>
                    <thead style={thStyle}>
                        <tr>
                            <th style={thStyle}>ID</th>
                            <th style={thStyle} id='name'>Name</th>
                            <th style={thStyle}>Price</th>
                            <th style={thStyle}>Mfg. Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>P001</td>
                            <td style={tdStyle}>ProductA</td>
                            <td style={tdStyle}>$10.99</td>
                            <td style={tdStyle}>{date}</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>P002</td>
                            <td style={tdStyle}>ProductB</td>
                            <td style={tdStyle}>$24.00</td>
                            <td style={tdStyle}>{date}</td>
                        </tr>
                        <tr>
                            <td style={tdStyle}>P003</td>
                            <td style={tdStyle}>ProductC</td>
                            <td style={tdStyle}>$65.99</td>
                            <td style={tdStyle}>10-10-2023</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export {Products as items};