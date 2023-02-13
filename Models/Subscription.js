const mongoose = require('mongoose');
const Joi = require('joi');


const subscriptionSchema = new mongoose.Schema({
    name: {type:String, required: true, unique: true, maxlenght: 50},
    price: {type:Number, required: true},
    startDate: {type:Date, default: Date.now},
    availability: {type: Boolean, default: false}
}
);

subscriptionSchema.method("sendInvoice", function(){
    if(this.availability){
        setInterval(function(){console.log("invoooice")},2000);
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

