const User = require('../models/User');
const bcrypt = require('bcrypt');

async function insert(user) {

    console.log(`Save user data in db`);
    user.hashedPassword = bcrypt.hashSync(user.hashedPassword, 10);
    
    //to delete any property.
    delete user.password;
    console.log(`Save user data in db`, user);
    const submitted =  await new User(user).save();
    return submitted;
}

async function getUserByEmail(email, password) {

    let user = await User.findOne({email});
    if(isUserValid(user, password, user.hashedPassword)) {
        user = user.toObject();
        delete user.hashedPassword;
        return user;
    } else {
        return null;
    }
}

function isUserValid( user, password, hashedPassword) {
    return user && bcrypt.compareSync(password, hashedPassword);
}


module.exports = { 
    insert, 
    getUserByEmail 
}