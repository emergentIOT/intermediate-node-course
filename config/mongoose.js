const mongoose = require('mongoose');
// Basic nodejs api for general use
const util = require('util');
//For debugging purpose
const debug = require('debug')('express-mongoose-es6-rest-api:index');
const config = require('../config/config');
const mongoUri = config.mongo.uri;

/**
 * useNewUrlParser is a separate key they used to eliminate the previous one.
 */
mongoose.connect(mongoUri, {keepAlive: 1, useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to db: ${mongoUri}.`);
})

db.on('error', () => {
   throw new Error(console.log(`Unable to connect to the database: ${mongoUri}.`));
})

if(config.mongo.isDebug) {
    mongoose.set('debug', (collectionName, method, query, doc) => {
        debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
    })
}

module.exports = db;