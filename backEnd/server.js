import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { application } from 'express';
// import { router as userPageRouter } from './routes/userPage.js' ---------put proper route in 
import cors from 'cors';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
const app = express();
// app.use(express.urlencoded({ extended: true }));

const main = async () => {
    console.log(`Connecting to DB: ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().catch(err => console.log(err))


app.use(cors());
// app.use('/', userPageRouter);m    -----input actul route 


const server = app.listen(port, () => {
    const SERVERPORT = server.address().port;
    console.log(`App listening at http://localhost:${SERVERPORT}`)
});

export default server;