const express = require('express');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

app.get('/', (req, res) => res.send('Hello'));
app.get('/development', (req, res) => res.send('my first app on aws'))

const port = process.env.port || 3001
app.listen(port);
