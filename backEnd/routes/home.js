import express from 'express';
import Peep from '../Models/peepSchema.js';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        Peep.find().sort('-peepCreatedDate').find((error, peeps) => {

            error ? res.status(404).send({ message: 'Peeps are not here' }) : res.status(200).send(peeps);
        });
    });

export { router as home }