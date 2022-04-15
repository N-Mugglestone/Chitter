import express from 'express';
import Peeps from '../Models/peepSchema.js';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newPeep = new Peeps(req.body);

            newPeep.save(err => {
                if (err) {
                    res.status(400).send(`Adding peep failed, try again? `)
                } else {

                } res.status(200).send(`peep is a success`)
            })

        })

export { router as addPeep };