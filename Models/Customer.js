const mongoose = require('mongoose');
const Joi = require('joi');
const {Subscription} = require('./Subscription');


const customerSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true, minlength: 5, maxlenght: 50},
    password: {type:String, required: true},
    credit: {type:Number, required: true},
    invoicesCount: {type:Number, default: 0},
    subscriptionsCount: {type:Number, default: 0},
    payedAmount: {type:Number, default: 0},

}
);
customerSchema.method("add", function(id){

    this.subscriptionsCount++;
    return id;
});


customerSchema.method("list", function(id){
    return this.subscriptions;
});

customerSchema.method("remove", function(){
    this.subscriptionsCount--;
});


function validateCustomer(customer){
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required()
    });
    return schema.validate();
}

Customer = mongoose.model('Customer', customerSchema);
module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;

