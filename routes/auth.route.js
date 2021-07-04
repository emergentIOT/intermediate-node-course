//Register API

const express = require('express');
const userController = require('../controllers/user.controller');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/User');

//Inbuilt middleware
const router = express.Router();

//api/auth/register
router.post('/register', asyncHandler(insert));
router.get('/login', asyncHandler(getUser));


async function insert(req, res, next) {
    
    const user = req.body
    console.log('Register user', user);
    const saveUser = await userController.insert(user);
    res.json(saveUser);
}

async function getUser(req, res, next) {

    const {email, password} = req.body;
    console.log(`Searching user for ${email}`);
    const savedUser = await userController.getUserByEmail(email, password);
    res.json(savedUser);
}


module.exports = router;