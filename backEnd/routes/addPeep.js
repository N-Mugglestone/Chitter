import express from 'express';
import { body } from 'express-validator';
import Peeps from '../Models/peepSchema.js';

const router = express.Router();

router.route(`/_id`)
    .post([
        body(`firstName`).exists(),
        body(`userHandle`).exists(),
        body('peepContent').exists(),
        body(`timeStamp`).exists().isDate(),
        // body(`lastName`).exists(),
    ],

        (req, res) => {

            const newPeep = new Peeps(req.body);

            newPeep.save(err => {
                if (err) {
                    res.status(400).send(`Adding peep failed, try again? `)
                } else {

                } res.status(200).send(`peep is a success`)
            })

        })

export { router as addPeep };


// router.route('/')
//     .get((req, res) => {
//         Peeps.find().sort('-date').find({}, function (err, result) {
//             if (err) {
//                 console.log(err);
//             } else {
//                 res.json(result);
//             }
//         })

