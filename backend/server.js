const express = require("express") ;
const cors = require('cors');
const {MongoClient} = require('mongodb')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4444;

const uri = process.env.ATLAS_URI;

app.use(cors());

app.listen(port, () => console.log(`server is live on port: ${port}`));  