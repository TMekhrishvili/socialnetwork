import express, { Request, Response } from 'express';
import next from 'next';


const dev = process.env.NODE_ENV !== 'development';
const app = next({ dev });

const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('*', (req: Request, res: Response) => {
            return handle(req, res);
        })

        server.listen(3000);
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })

