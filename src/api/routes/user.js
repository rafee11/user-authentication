const express = require('express');
const router = express.Router();
const db = require('../db')();

router.get('/', (req, res) => {
    const userData = db.user;
    if (userData) {
        res.status(200).json(userData);
    } else {
        res.status(400).json({message: 'user not found'});
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userData = db.user.find(user => user.id === id);
    if (userData) {
        res.status(200).json(userData);
    } else {
        res.status(400).json({message: 'user not found'});
    }
});

router.post('/', (req, res) => {
    const payload = {
        id: db.user.length + 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        dob: req.body.dob,
        country: req.body.country,
        pincode: req.body.pincode,
        gender: req.body.gender,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        hobbies: req.body.hobbies,
        bio: req.body.bio
    };
        db.user.push(payload);
        res.status(200).json(payload);
});

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const userData = db.user.find(user => user.id === id);
    userData['firstName'] = req.body.firstName;
    userData['lastName'] = req.body.lastName;
    userData['email'] = req.body.email;
    userData['phoneNumber'] = req.body.phoneNumber;
    userData['dob'] = req.body.dob;
    userData['country'] = req.body.country;
    userData['pincode'] = req.body.pincode;
    userData['gender'] = req.body.gender;
    userData['address1'] = req.body.address1;
    userData['address2'] = req.body.address2;
    userData['city'] = req.body.city;
    userData['state'] = req.body.state;
    userData['hobbies'] = req.body.hobbies;
    userData['bio'] = req.body.bio;

    res.status(200).json(userData);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const userList = db.user.filter(user => user.id === id);
    db.user = userList;
    res.status(200).json(db.user);
});
module.exports = router;