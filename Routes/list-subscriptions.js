const router = require('express').Router();
const {Customer, validateCustomer} = require('../Models/Customer');
const {Subscription, validateSubscription} = require('../Models/Subscription');
 
const auth = require('../middleware/auth');

router.get('/list-subscriptions', auth, async (req, res) => {

    const subscriptions = await Subscription.find({availability: true});

    res.send(subscriptions);

});

module.exports = router;