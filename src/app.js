const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./controller/controller')

app.use(bodyParser.json());

app.use('/user', router);

app.use((er, _req, res, _next) => {
    res.send(er.message)
});


module.exports = { app }