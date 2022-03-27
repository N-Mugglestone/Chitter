import express, { Router } from 'express';
import Peeps from '../Models/peep.model';

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
    .post((req, res) => {
        console.log(req.body.peep.name);
        const peep = new Peep(req.body.peep);
        console.log(peep);
        peep.save()
            .then(peep => {
                res.status(200).json({ 'peep': `peep is a success` });
            })
            .catch(err => res.status(400).send(`Adding peep failed`));
    });

module.exports = router;