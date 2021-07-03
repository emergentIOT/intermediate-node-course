const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
//For cross origin communication
const cors = require('cors');
//To secure the server
const helmet = require('helmet');
const config = require('./config');
//API calls
const routes = require('../routes');

//Get app
const app = express();

//Logger 
if(config.env === 'development') {
    app.use(logger('dev'));
}

//Get dist folder
const distDir = path.join(__dirname, '../dist');

//Use dist folder as hosting folder
app.use(express.static(distDir));

//parsing from API
app.use(bodyParser.json())

//Extended: true ---> extend the native feature of nodejs, eg 
// req.body.
app.use(bodyParser.urlencoded({extended: true}));

//Secure app 
app.use(helmet());

//Allow CORS
app.use(cors());

//Api router, https://localhost:PORT/api
app.use('/api', routes);

//Serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(distDir, 'index.html'))
})

module.exports = app;