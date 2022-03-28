import express from 'express';

const router = express.Router();

import User from '../Models/user.Schema.js'


router.route('/')
    .post((req, res) => {
        const { email, password } = req.body;
        User.findOne({ email }, (user) => {
            if (user && password === user.password) {
                res.send({ message: 'Login is a success', user })
            }
            else {
                res.send({ message: 'Are you sure that is right?' })
            }
        })
    })

export { router as login }