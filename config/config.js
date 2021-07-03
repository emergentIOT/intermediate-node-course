//Bring all defined values from .env file
require('dotenv').config();
const envVars = process.env;

module.exports = {
    port: envVars.PORT,
    env:  envVars.NODE_ENV
}