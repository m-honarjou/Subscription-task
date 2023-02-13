const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    username: {type:String, required: true, unique: true, minlength: 5, maxlenght: 50},
    credit: {type:Number, required: true}
}
);



module.exports.Customer = mongoose.model('Customer', customerSchema);

