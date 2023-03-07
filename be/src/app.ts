import express from 'express';
import router from './routes/route';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json()); //use req.body 

app.use('/', router);

app.listen(8000);