const router = require('express').Router();
const {Customer, validateCustomer} = require('../Models/Customer');


const _ = require('lodash');
const bcrypt = require('bcrypt');



router.post('/register', async (req, res) => {
    let customer = _.pick(req.body, ['username', 'password', 'credit']);
    const {error} = validateCustomer(customer);
    if(error) return console.log(error);;
    

    let newUser = await Customer.findOne({username: req.body.username});
    if(newUser) return res.status(400).send('User already registered');

    // const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);


    newCustomer = new Customer({
        username: req.body.username,
        password: hashedPassword,
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