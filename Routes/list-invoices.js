const router = require('express').Router();
const {Invoice} = require('../Models/Invoice');
 
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {

    const invoices = await Invoice.find();

    res.send(invoices);

});

module.exports = router;