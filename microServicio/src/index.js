const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extends: false}));

//Rutas
app.use(require('./routes/rutas'));

app.listen(1234);
console.log('puerto:1234');