const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
const jwt = require('jsonwebtoken');
const verifyToken = require('./verify');
require('dotenv').config();

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()

        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});




router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});




router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {

            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyemail/:email', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {

            if (result) res.status(200).json(result);
            else res.status(400).json({
                message: 'not found'
            })

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyrole/:role', (req, res) => {
    Model.findOne({ email: req.params.email })
        .then((result) => {

            if (result) res.status(200).json(result);
            else res.status(400).json({
                message: 'not found'
            })

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})


router.get('/getbyfullname/:fullname', (req, res) => {
    Model.findOne({ email: req.params.fullname })
        .then((result) => {

            if (result) res.status(200).json(result);
            else res.status(400).json({
                message: 'not found'
            })

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {

            res.status(200).json(result);

        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });

})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                console.log(result);
                const { _id, fullname, email, avatar } = result;
                const payload = { _id, fullname, email, avatar };

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '2 days' },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json({ message: 'error generating jwt' });
                        } else {
                            console.log(token);
                            res.status(200).json({ token, fullname, avatar });
                        }
                    }
                )
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/authorise', verifyToken, (req, res) => {
    res.status(200).json({status : 'success'});
})

module.exports = router;
