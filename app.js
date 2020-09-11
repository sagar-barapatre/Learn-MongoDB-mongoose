const express = require('express');

require('./utils/db');

const user = require('./utils/db');
const app = express();

app.use(express.json());


//POST request is to insert a element into the database
app.post('/users', async (req, res) => {
    const user1 = new user(req.body);
    try {
        await user1.save()
        // res.statusCode.toString(201).send(user);
    } catch (e) {
        // res.statusCode.toString(400).send(e.message);
    }

});


// GET request is to find the element into the database
app.get('/users', async (req, res) => {
    try {
        const user2 = await user.find({})
        if (!user2)
            res.status(404)
    } catch (e) {

    }
});


//GET Request to find a particular user by id 
app.get('/users/:id', async (req, res) => {
    try {
        const user3 = await user.findById(req.params.id)
        console.log(user3);
    } catch (e) {

    }
});


//PATCH request to update any particular value in the database
app.patch('/users/:id', async (req, res) => {
    try {
        const user4 = await user.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

    } catch (e) {

    }
});

//DELETE request to delete a particular entry in the database
app.delete('users/:id', async (req, res) => {
    try {
        const user5 = await user.findByIdAndDelete(req.params.id);
        console.log(user5);
    } catch (e) {

    }
});

app.listen(2020);