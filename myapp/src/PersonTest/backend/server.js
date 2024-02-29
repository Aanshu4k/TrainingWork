const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
var cors = require('cors');

const port = 3001;
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

const { networkInterfaces } = require('os');
const getIPAddress = () => {
    const nets = networkInterfaces();
    const results = {};
    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            // Retrieve only IPv4 addresses
            if (net.family === 'IPv4' && !net.internal) {
                if (!results[name]) {
                    results[name] = [];
                }
                results[name].push(net.address);
            }
        }
    }
    // Return the first IP address for the first NIC found
    const nicNames = Object.keys(results);
    if (nicNames.length > 0) {
        const firstNICAddresses = results[nicNames[0]];
        if (firstNICAddresses.length > 0) {
            return firstNICAddresses[0];
        }
    }
    // No IP address found
    return null;
};

app.post('/submit-form', async (req, res) => {
    try {
        const solrURL = 'http://localhost:8983/solr/formDB/update?commit=true';
        const formData = req.body;
        const solrDocument = {
            name: formData.name,
            mobile: formData.mobile,
            occupation: formData.occupation,

        }
        await axios.post(solrURL, [solrDocument]);
        res.json({ sucess: true, message: "Form submitted successfully!" })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
app.get('/getIP', async (req, res) => {
    try {
        const ipAddress = getIPAddress();
        res.json({ data: ipAddress })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
})
app.get('/report', async (req, res) => {
    try 
    {
        const username = 'tfcfuser'; // Replace with your MongoDB username
        const password = 'tcfcdb'; // Replace with your MongoDB password
        const databaseName = 'tfcf'; // Replace with your MongoDB database name
        const collectionName = 'logentries'; // Replace with your MongoDB collection name

        const mongoURI = `mongodb://${username}:${password}@10.125.126.80:27017/${databaseName}`;

        // Connect to MongoDB
        const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const db = client.db(databaseName);

        // Fetch data from the collection
        const data = await db.collection(collectionName).find({}).toArray();

        // Close the connection
        client.close();

        // Send the data as JSON response
        res.json({data});
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
