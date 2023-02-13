const express = require('express');
const mongoose = require('mongoose');

const createCustomerRoute = require('./Routes/createCustomer');

mongoose.connect('mongodb://localhost/Subscription_taskDB')
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.error('Error:', err));

const app = express();
app.use(express.json());

app.use('/api/createCustomer', createCustomerRoute);
app.use('/api/createCustomer', createCustomerRoute);


const port = process.env.port || 3000;

app.listen(port, () => { console.log(`listening on port ${port}`) });