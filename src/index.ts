import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const runServer = () => {
    app.use(cors());

    app.listen(port, ()=>{
        console.log(`Server listening on port ${port}`);
    })
}

app.get('/', (req: Request, res: Response)=>{
    const bootResponse = {status: 'Running'};
    res.json(bootResponse);
})

runServer();

