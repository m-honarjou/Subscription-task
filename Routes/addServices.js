const router = require('express').Router();
const {Subscription} = require('../Models/Subscription');


const _ = require('lodash');
const bcrypt = require('bcrypt');



router.post('/', async (req, res) => {
    

    let newService = await Subscription.findOne({name: req.body.name});
    if(newService) return res.status(400).send('Service alraedy exists');


    newService = new Subscription({
        name: req.body.name,
        price:  req.body.price
    });

    try{
        await newService.save();
        res.status(201).json(newService);
    }
    catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;