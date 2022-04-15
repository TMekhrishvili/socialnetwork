const express = require('express');
const next = require('next');
const { apiRoutes } = require('./routes');

const dev = process.env.NODE_ENV !== 'development';
const app = next({ dev });

const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();
        server.use(express.json());
        server.use(express.urlencoded({ extended: true }));
        server.use('/api', apiRoutes);
        server.get('*', (req, res) => {
            return handle(req, res);
        })

        server.listen(3000);
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })
