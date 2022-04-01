import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../Models/userSchema.js'

const router = express.Router();

router.route(`/`)
    .post([
        body('firstName').exists(),
        body('lastName').exists(),
        body('email').exists().normalizeEmail().escape().isEmail(),
        body('userHandle').exists(),
        body('password').exists(),
    ],

        (req, res) => {
            const { email } = req.body;

            User.findOne({ email }, (err, user) => {

                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() })
                }

                if (user) {
                    res.send({ message: `user exists` });
                }
                else {
                    const newUser = new User(req.body);
                    newUser.save(err => {
                        if (err) {
                            res.send({ message: err });
                        }
                        else {
                            res.send({ message: `success` });
                        }
                    });
                }
            });
        });

export { router as register };