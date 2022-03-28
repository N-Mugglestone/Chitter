import express from 'express';
import Peep from '../Models/peep.Schema';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        Peep.find().sort('.peepCreatedDate').find((error, peeps) => {
            error ? res.status(404).send({ message: 'Peeps not found' }) : res.status(200).send(peeps);
        })
    })

export { router as homePage }