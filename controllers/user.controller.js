users = [];
async function insert(user) {
    //Save user data in db

    users.push(user);
    return user;
}


module.exports = { insert }