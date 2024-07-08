const express = require("express") ;
const cors = require('cors');
const {MongoClient} = require('mongodb')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4444;

const uri = process.env.ATLAS_URI;

async function run() {
    const client = new MongoClient(uri);
    await client.connect();
    const dbName = 'Inventory';
    const collectionName = 'Food';
    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    try {
        const trial = await collection.insertMany([{name: 'apple', quantity: 3},{name: 'banana', quantity: 1}]);
        console.log(`${trial.insertedCount} documents updated \n`);
    } catch (err) {
        console.error(err);
    }

    await client.close();
}

run().catch(console.dir);

app.use(cors());

app.listen(port, () => console.log(`server is live on port: ${port}`));  