import React, { useState } from 'react';

const ConvertHTML = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [htmlPayload, setHtmlPayload] = useState('<html><head><title>Receipt</title><style>table { width: 100%; border-collapse: collapse; } th, td { padding: 8px; text-align: left; border-bottom: 1px solid #ddd; } th { background-color: #f2f2f2; }</style></head><body><h2>Receipt</h2><table><tr><th>Item</th><th>Quantity</th><th>Price</th></tr><tr><td>Item 1</td><td>2</td><td>$10.00</td></tr><tr><td>Item 2</td><td>1</td><td>$20.00</td></tr><tr><td>Item 3</td><td>3</td><td>$15.00</td></tr><tr><td colspan="2"><strong>Total</strong></td><td><strong>$65.00</strong></td></tr></table></body></html>');

  const handleConvert = async () => {
    try {
      const response = await fetch('https://localhost:7245/api/HtmlToBase64/Convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: htmlPayload, 
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to convert HTML to image');
      }
  
      const base64Image = await response.text(); 
      setImageSrc(`data:image/png;base64,${base64Image}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <textarea
        value={htmlPayload}
        onChange={(e) => setHtmlPayload(e.target.value)}
        rows={10}
        cols={50}
      />
      <br />
      <button onClick={handleConvert}>Convert HTML to Image</button>
      <br />
      {imageSrc && <img src={imageSrc} alt="Converted Image" style={{height:"84rem",widows:"40rem"}}/>}
    </div>
  );
}

export default ConvertHTML;
