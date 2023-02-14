const mongoose = require('mongoose');
const Joi = require('joi');

const {Invoice} = require('./Invoice');


const subscriptionSchema = new mongoose.Schema({
    name: {type:String, required: true, unique: true, maxlenght: 50},
    price: {type:Number, required: true},
    startDate: {type:Date, default: Date.now},
    availability: {type: Boolean, default: false}
}
);
const timeInterval = 3000;
const createInvoice = async function(sunbscriptionName, sunbscriptionprice, timeInterval){
    const newInvoice = new Invoice({
        name: sunbscriptionName,
        cost: sunbscriptionprice,
        startDate: Date.now() - timeInterval
    });

    try{
        await newInvoice.save();
    }
    catch(err){
       console.error(err);
    }
    const invoiceText = newInvoice.getInvoice();
    console.log(invoiceText);
}

subscriptionSchema.method("sendInvoice", function(){
    const name = this.name;
    const cost = this.price;

    if(this.availability){
        setInterval(function(){
            createInvoice(name, cost, timeInterval);
        },timeInterval);
    }
});


function validateSubscription(subscription){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        price: Joi.number()
    });
    return schema.validate();
}


module.exports.Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports.validateSubscription = validateSubscription;

