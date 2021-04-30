const express = require('express');
const app = express(); //creates an express app
//next can send it to the next middleware
app.use((req, res, next) => {
    res.status(200).json({
        message: "It works"
    });
}); //middleware

module.exports = app;

// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://nhliu:' + 
// process.env.MONGO_ATLAS_PW + 
// '@authapp.szwi2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//     {
//         useMongoClient = true;
//     }
// );