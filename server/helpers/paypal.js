const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode: "sandbox", // Use "sandbox" for testing
    client_id: "your-real-client-id",
    client_secret: "your-real-client-secret"
});

module.exports = paypal;
