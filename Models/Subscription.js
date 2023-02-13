const mongoose = require('mongoose');
const Joi = require('joi');


const subscriptionSchema = new mongoose.Schema({
    name: {type:String, required: true, unique: true, minlength: 5, maxlenght: 50},
    price: {type:Number, required: true},
    startDate: {type:Date, default: Date.now}
}
);

function validateSubscription(subscription){
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        price: Joi.number()
    });
    return schema.validate();
}


module.exports.Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports.validateSubscription = validateSubscription;

