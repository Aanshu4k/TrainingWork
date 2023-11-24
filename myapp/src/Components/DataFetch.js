import { useState, useEffect } from "react";

function DataFetch() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the product data from your API endpoint.
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
                setLoading(false);
            });
    }, []);

    const tableContainerStyle = {
        maxHeight: '200px',
        overflowY: 'auto',
        border: 'solid grey 8px',
        borderRadius:'50px 0px 50px 0px',
        padding:'20px'
    };

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

    return (
        <div style={{ margin: '10px', padding: '10px' }}>
            <i>Ques2.Create a functional component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data on the screen. </i>
            <h1>Product Table</h1>
            <div style={tableContainerStyle}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>ID</th>
                                <th style={thStyle}>Title</th>
                                <th style={thStyle}>Description</th>
                                <th style={thStyle}>Price</th>
                                <th style={thStyle}>Rating</th>
                                <th style={thStyle}>Stock</th>
                                <th style={thStyle}>Brand</th>
                                <th style={thStyle}>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td style={tdStyle}>{product.id}</td>
                                    <td style={tdStyle}>{product.title}</td>
                                    <td style={tdStyle}>{product.description}</td>
                                    <td style={tdStyle}>${product.price}</td>
                                    <td style={tdStyle}>{product.rating}</td>
                                    <td style={tdStyle}>{product.stock}</td>
                                    <td style={tdStyle}>{product.brand}</td>
                                    <td style={tdStyle}>{product.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default DataFetch;
