const mongoose = require('mongoose');
const Joi = require('joi');


const invoiceSchema = new mongoose.Schema({
    name: {type:String, required: true, maxlenght: 50},
    cost: {type:Number, required: true},
    startDate: {type:Date, default: Date.now},
    finishDate: {type:Date, default: Date.now}
}
);

invoiceSchema.method("getInvoice", function(){
    return `${this.name} Invoice\nPrice: ${this.cost}\nStrat Time: ${this.startDate}\nFinish Time: ${this.finishDate}`
});



module.exports.Invoice = mongoose.model('Invoice', invoiceSchema);

