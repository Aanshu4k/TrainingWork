const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3004; // You can change this to your desired port

const username = 'tfcfuser'; // Replace with your MongoDB username
const password = 'tcfcdb'; // Replace with your MongoDB password
const databaseName = 'tfcf'; // Replace with your MongoDB database name
const collectionName = 'logentries'; // Replace with your MongoDB collection name

const mongoURI = `mongodb+srv://${username}:${password}@cluster0.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

app.use(express.json());

app.get('/api/records', async (req, res) => {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(databaseName);

    // Fetch data from the collection
    const data = await db.collection(collectionName).find({}).toArray();

    // Close the connection
    client.close();

    // Send the data as JSON response
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
