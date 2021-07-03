//Register API

const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');

//Inbuilt middleware
const router = express.Router();

//api/auth/register
router.post('/register', asyncHandler(insert));


async function insert(req, res, next) {
    const user = req.body
    console.log('Register user', user);
    const saveUser = userController.insert(user);
    res.json(saveUser);
}

module.exports = router;