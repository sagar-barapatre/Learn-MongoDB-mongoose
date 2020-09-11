const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const validator = require('validator');

// we will be requiring express, nodemon, validator, mongoose packages
// to download, be sure to download these packages using npm package manager


mongoose.connect('mongodb+srv://sagar:FyQ1Cir7ENR3CIRr@cluster0.my17r.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value <= 0)
                throw new Error('Age must not be less than or equal to 0');
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value))
                throw new Error('This is not a valid Email');
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;

// const user1 = new user({
//     name: "Sagar Barapatre",
//     age: 21,
//     email: 'sagarbarapatre2019@gmail.com'
// })

// user1.save()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));