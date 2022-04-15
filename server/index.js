const express = require('express');
const next = require('next');
const connectDB = require('./config/db');
const apiRoutes = require('./routes');
const { port, mongoURI } = require('./config');

const dev = process.env.NODE_ENV !== 'development';
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(async () => {
        const server = express();
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));

        server.use('/api/v1', apiRoutes);
        server.get('*', (req, res) => handle(req, res));

        try {
            await connectDB(mongoURI);
            server.listen(3000, () => console.log(`Server is listening on port ${port}`))
        } catch (error) {
            console.log(error);
        }
    })
