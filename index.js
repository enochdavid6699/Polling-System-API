//Setting Up Express Server
const express = require('express');
const app = express();
const port = 8000;

//Connect to Database
const db = require('./config/mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

//use exxpress router
app.use( '/' , require('./routes/index' ));

app.listen(port, function (err) {
    if (err) {
        console.log(` Error: ${err} `)
    }

    console.log(`Server is up and running on Port: ${port} `);
});