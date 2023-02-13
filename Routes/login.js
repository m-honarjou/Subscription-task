const router = require('express').Router();
const {Customer, validateCustomer} = require('../Models/Customer');

const config = require('config');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcrypt');


router.post('/login', async (req, res) => {

    let customer = await Customer.findOne({username: req.body.username});
    if(!customer) return res.status(400).send('Invalid username or password');
    const validPassword = await bcrypt.compare(req.body.password, customer.password);
    if(!validPassword) return res.status(400).send('Invalid username or password');

    const token = jwt.sign({username: req.body.username}, /*config.get('jwtPrivateKey')*/ "jsonwebtoken with we get from environment variables");
    res.send(token);
});

module.exports = router;
