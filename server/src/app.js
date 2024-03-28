const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./controller/controller')

const app = express();

app.use(cors({
    // origin: 'http://localhost:3001',
    method: 'GET,POST,PUT,DELETE,PATCH',
    credentials: true
}));
app.use(bodyParser.json());

app.use('/user', router);

app.use((er, _req, res, _next) => {
    res.send(er.message)
});


module.exports = { app }