// FormComponent.js
import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    occupation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
      </label>
      <br />
      <label>
        Occupation:
        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
      </label>
      <br />
      <button type="submit" onClick={submitForm}>Submit</button>
    </form>
  );
};

export default FormComponent;
