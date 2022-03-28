import express from 'express';
import Peep from '../Models/peepSchema.js';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        //Peep.find().sort('-date')
        Peep.find((error, peeps) => {
            console.log(peeps);
            error ? res.status(404).send({ message: 'Peeps are not here' }) : res.json(peeps);
        })
    })

export { router as home }