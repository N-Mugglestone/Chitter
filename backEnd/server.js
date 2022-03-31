import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { application } from 'express';
import morgan from 'morgan'
import cors from 'cors';

import { home } from './routes/home.js';
import { login } from './routes/login.js';
import { register } from './routes/register.js';
import { addPeep } from './routes/AddPeep.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/', home)
app.use('/login', login)
app.use('/register', register)
app.use('/addPeep', addPeep)


const main = async () => {
    console.log(`Connecting to DB: ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().then(console.log('database')).catch(err => console.log(err))


const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`App listening at http://${SERVERHOST}:${SERVERPORT}`)
});

export default server;