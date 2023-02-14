const mongoose = require('mongoose');
const Joi = require('joi');
const {Subscription} = require('./Subscription');


const customerSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true, minlength: 5, maxlenght: 50},
    password: {type:String, required: true},
    credit: {type:Number, required: true},
    invoicesCount: {type:Number, default: 0},
    subscriptionsCount: {type:Number, default: 0},
    // subscriptionIDs:[String],
    subscriptions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Subscription'
    },
    payedAmount: {type:Number, default: 0},

}
);
customerSchema.method("add", function(id){
    // if(this.subscriptions.find(sub => {sub === id})){
    //     // return new Error("Already Subscribed");
    //     console.log('ereo');
    // }
    // function check(ids){
    //     return true;
    // }
    // this.subscriptions.forEach(element => {
    //     if(element == id){
    //         return new Error("Already Subscribed"); 
    //         process.exit(1);

    //     }
    // });
    this.subscriptions[this.subscriptionsCount] = id;
    this.subscriptionsCount++;
    return id;
});


customerSchema.method("list", function(id){
    return this.subscriptions;
});

// customerSchema.method("add", function(id){
//     this.subscriptionIDs[this.subscriptionsCount] = id;
//     this.subscriptionsCount++;
//     return id;
// });
// customerSchema.method("remove", function(id){
//     this.subscriptionIDs.;
//     this.subscriptionsCount--;
//     return id;
// });


function validateCustomer(customer){
    const schema = Joi.object({
        username: Joi.string().min(5).max(50).required()
    });
    return schema.validate();
}

Customer = mongoose.model('Customer', customerSchema);
module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;

