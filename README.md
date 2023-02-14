# Subscription-task

A simple project for subscribing system services with having a credit for each customer to pay service price and getting their invoices

## How to run:

    npm install
    node index.js

## How to use:

    add new customers with a post request to /api/register alongside with your object in the body
    add new services with a post request to /api/add-services alongside with your object in the body
    login with a post request to /api/login alongside with your object in the body
    subscribe a service with a post request to /api/subscribe alongside with the name of the service and your jasonwebtoken
    unsubscribe a service with a post request to /api/unsubscribe alongside with the name of the service and your jasonwebtoken
    get list of your subscriptions with a get request to /api/list-subscriptions alongside with your jasonwebtoken
    get list of your invoices with a get request to /api/invoices/list alongside with your jasonwebtoken
    get the number of your invoices with a get request to /api/invoices/count alongside with your jasonwebtoken
