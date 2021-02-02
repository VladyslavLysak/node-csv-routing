import express from 'express';
import cors from 'cors';
import routes from './src/routes';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
    console.log(`App running on ${port} port`)
});
