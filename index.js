const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const createCustomerRoute = require('./Routes/createCustomer');
const loginRoute = require('./Routes/login');
const SubscribeRoute = require('./Routes/Subscribe');


// if(!config.get('jwtPrivateKey')){
//     console.error('FATAL ERROR: jwtPrivateKey is not defined');
//     process.exit(1);
// }


mongoose.connect('mongodb://localhost/Subscription_taskDB')
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.error('Error:', err));

const app = express();
app.use(express.json());

app.use('/api', createCustomerRoute);
app.use('/api', loginRoute);
app.use('/api', SubscribeRoute);



const port = process.env.port || 3000;

app.listen(port, () => { console.log(`listening on port ${port}`) });