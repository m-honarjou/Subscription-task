const router = require('express').Router();
const {Invoice} = require('../Models/Invoice');
 
const auth = require('../middleware/auth');

router.get('/list', auth, async (req, res) => {

    const invoices = await Invoice.find();

    res.send(invoices);

});
router.get('/count', auth, async (req, res) => {

    const invoicesCount = await Invoice.find({}).count();

    res.json(invoicesCount);

});

module.exports = router;