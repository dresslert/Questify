const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const missionRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Middleware para registrar todas as requisições
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api/mission', missionRoutes);

mongoose.connect('mongodb://192.168.0.11:27017/mydb')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });


app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});