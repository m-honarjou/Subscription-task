const router = require('express').Router();
const {Customer} = require('../Models/Customer');




router.post('/register', async (req, res) => {


    let newUser = await Customer.findOne({username: req.body.username});
    if(newUser) return res.status(400).send('User already registered');



    newCustomer = new Customer({
        username: req.body.username,
        credit:  req.body.credit
    });

    try{
        await newCustomer.save();
        res.status(201).json(newCustomer);
    }
    catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;