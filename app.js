const express = require('express');
const routes = require('./routes/index');
const port = 1234;
const hostname = 'localhost';

const app = express();

//middleware - which excecutes for every incoming request
app.use('/', routes);

app.listen(port, hostname, () => {
    console.log('Server has started!!');
})