const router = require('express').Router();
const {Customer, validateCustomer} = require('../Models/Customer');
const {Subscription, validateSubscription} = require('../Models/Subscription');
 
const auth = require('../middleware/auth');

router.post('/:subscriptionName', auth, async (req, res) => {

    let logedInCustomer = await Customer.findOne({username: req.customer.username});
    let subscription = await Subscription.findOne({name: req.params.subscriptionName});
    if(!subscription) return res.status(400).send('Invalid subscription name');

    try{
        logedInCustomer.add(subscription._id);
        subscription.availability = true;
        subscription.startDate = Date.now();
        console.log(logedInCustomer);
        await logedInCustomer.save();
    
        subscription.sendInvoice();
    
        await subscription.save();
        res.send(logedInCustomer);
    }
    catch(err){
        res.send(err)
    }
});

module.exports = router;