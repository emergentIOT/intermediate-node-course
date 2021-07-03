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


module.exports = { insert }