import express from 'express';
import Peeps from '../Models/peep.Schema.js';

const router = express.Router();

router.route('/')
    .get((req, res) => {
        Peeps.find().sort('-date').find({}, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                res.json(result);
            }
        })
    })

router.route(`/`)
    .post([
        body(`firstName`).exists(),
        body(`date`).exists().isDate(),
        body(`lastName`).exists(),
        body(`userHandle`).exists(),
    ],

        (req, res) => {
            console.log(req.body.peep.name);
            const peep = new Peep(req.body);
            console.log(peep);
            peep.save()
                .then(peep => {
                    res.status(200).json({ 'peep': `peep is a success` });
                })
                .catch(err => res.status(400).send(`Adding peep failed`));
        });

export { router as addPeep };