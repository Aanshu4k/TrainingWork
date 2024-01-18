const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
app.use(bodyParser.json());
app.post('/submit-form', async (req, res) => {
    try {
        const solrURL = 'http://localhost:8983/solr/formDB/update?commit=true';
        const formData = req.body;
        const solrDocument = {
            name: formData.name,
            mobile: formData.mobile,
            occupation: formData.occupation,
        }
        await axios.post(solrURL,[solrDocument]);
        res.json({ sucess: true, message: "Form submitted successfully!" })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});