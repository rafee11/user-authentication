const express = require('express');
const router = express.Router();
const db = require('../db')();

router.post('/forgot-password', (req, res) => {
    const emailData = db.users.find((obj) => obj.email === req.body.email);
    if (emailData) {
        res.status(200).json({message: 'Password reset link send to email please check'});
    } else {
        res.status(400).json({message: 'Email not found'});
    }
});

router.post('/change-password', (req, res) => {
    if (req.body.newPassword === req.body.confirmPassword) {
        res.status(200).json({message: 'Password successfully changed'});
    } else {
        res.status(400).json({message: 'Password does not matched'});
    }
});

router.post('/reset-password', (req, res) => {
    if (req.body.password === req.body.confirmPassword) {
        res.status(200).json({message: 'Password successfully changed'});
    } else {
        res.status(400).json({message: 'Password does not matched'});
    }
});
module.exports = router;