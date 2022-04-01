import express from 'express';
import User from '../Models/userSchema.js'

const router = express.Router();


router.route('/')
    .post((req, res) => {
        const { email, password } = req.body;
        console.log(email)
        User.findOne({ email }, (user) => {
            if (user && password === user.password) {
                res.send({ message: 'Login is a success', user })
            }
            else {
                res.send({ message: 'No account? Why not register?' })
            }
        })
    })

export { router as login }