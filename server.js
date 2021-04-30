//server set up
const http = require('http');
const app = require('./app')
const port = process.env.port || 3000;
const server = http.createServer(); //fill in later -> listens 
server.listen(port);


// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// // don't need a logout route because there is no session to clear with auth

// const User = require("/user")
// //security flaw: raw password saved in the db and the db can be hacked -> hash password w/node.bcrypt.js

// router.post('/signup', (req, res, next) => {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if (err) {
//             return res.status(500).json({
//                 error: err //consider making it more specific
//             });
//         } else {
//             const user = new User({
//                 _id: new mongoose.Types.ObjectId(),
//                 email: req.body.email,
//                 password: hash//10 salting rounds considered safe
//             });
//             user
//             .save()
//             .then(result => {
//                 res.status(201).json({
//                     message: 'User created'
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                     error: err
//                 });
//             });
//         }
//     })
    
// });

// module.exports = router;
