import React, { useState } from "react";
const Products = () => {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        border: '4px solid black'
    };

    const thStyle = {
        border: '3px solid black',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#ddd',
    };

    const tdStyle = {
        border: '2px solid grey',
        padding: '8px',
        textAlign: 'left',
    };
    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const [searchTerm, setSearchTerm] = useState('');
    
    const [products, setProducts] = useState([
        { id: 'P001', name: 'Fogg Rose', price: '$5.99', manuDate: date },
        { id: 'P002', name: 'Yardley Women', price: '$10.99', manuDate: date },
        { id: 'P003', name: 'Yardley French', price: '$20.99', manuDate: date },
        { id: 'P004', name: 'Fogg Men', price: '$11.99', manuDate: date },
        { id: 'P005', name: 'The man Co.', price: '$6.99', manuDate: date },
        { id: 'P006', name: 'Yardley men', price: '$8.99', manuDate: date },
    ]);
    const [filterItems, setFilterItems] = useState(products);
    const searchItems = () => {
        const filteredProd = products.filter(prod =>
            prod.name.toUpperCase().includes(searchTerm.toUpperCase())
        );
        setFilterItems(filteredProd);
    }
    return (
        <div>
            <h1><b>Products</b></h1>
            <label>Search :</label>
            <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit' onClick={searchItems}>SEARCH</button><br /><br />
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
                        {filterItems.map(prod => (
                            <tr>
                                <td style={tdStyle}>{prod.id}</td>
                                <td style={tdStyle}>{prod.name}</td>
                                <td style={tdStyle}>{prod.price}</td>
                                <td style={tdStyle}>{prod.manuDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export { Products as items };