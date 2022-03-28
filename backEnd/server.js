import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { application } from 'express';
import cors from 'cors';

import { homePage } from './routes/homepage.js';
import { login } from './routes/login.js';
import { register } from './routes/register.js';
import { addPeep } from './routes/addPeep.js'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/', homePage)
app.use('/login', login)
app.use('/register', register)
app.use('/addPeep', addPeep)
// app.use('/', userPageRouter);m    -----input actul route 

const main = async () => {
    console.log(`Connecting to DB: ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(err => console.log(err))


const server = app.listen(port, () => {
    const SERVERPORT = server.address().port;
    console.log(`App listening at http://localhost:${SERVERPORT}`)
});

export default server;