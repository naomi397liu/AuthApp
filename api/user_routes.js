const express = require('express');
const router = express.Router();
const morgan = require("morgan"); //all requests funnel thru -> calls the next function; middlewear
const app = express();


app.use(express.urlencoded({extended:false}));
app.use(express.json());



// const mongoose = require('mongoose');
// const user = require('./routes/user');
//route: '/user_route/signup'
// colon goes in front of dynamic parameters to create a route parameter -> add a colon in front of any item that will become a route parameter

router.get('/:id', (req, res, next) => {
    // display user's email/username
    const id = req.params.id;
    if (id === 'special') {
        res.status(200).json({
            message: 'you discovered a special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an id'
        });
    }
});
router.post('/post', (req, res, next) => {

    const product = req.body; //how to get info out of body of req?-price is empty
    console.log(req.body)
    
    res.status(201).json({
        message: 'user created',
        createdProduct: product //exists but empty

    });
    
});

router.patch('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'user updated'
    });
});
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        message: 'user deleted'
    });
});

router.post('/signup', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => { //10 salting rounds is considered safe
        if (err) {
            return res.status(500).json({
                error:err
            });
        } else { //create a new user if bcrypt creates a hash
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: req.body.email,
                password: hash
            });
            user
            .save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'user created'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });

        } 
    });
});


app.use(morgan('dev'));
app.use('/', router); //mounts all the above routes on the app

//Adding error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404; //route not found
    next(error); //forward error request
})
//next sends any errors below to be handled
app.use((error, req, res, next) => {
    res.status(error.status || 500) //error it already has or 500 if no error has been assigned to it yet
    res.json({
        error: {
            message: error.message //error usually already have a message property
        }
    });
});
module.exports = app;
