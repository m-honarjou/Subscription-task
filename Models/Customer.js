const mongoose = require('mongoose');
const Joi = require('joi');
const {Subscription, validateSubscription} = require('./Subscription');


const customerSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true, minlength: 5, maxlenght: 50},
    password: {type:String, required: true},
    credit: {type:Number, required: true},
    invoicesCount: {type:Number, default: 0},
    payedAmount: {type:Number, default: 0}
}
);

function validateCustomer(customer){
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required()
    });
    return schema.validate();
}


module.exports.Customer = mongoose.model('Customer', customerSchema);
module.exports.validateCustomer = validateCustomer;

