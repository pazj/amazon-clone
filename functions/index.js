const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51J7LFIHvt2W4zBJcPDxAsEkTVsbhN7OLlzbS9KMk1hXHqlh9pwoZhEgJd5rk66XwVOQkp1qreTmdrt7MMmEcNjvM00VRhHbwCP");

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("h world"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received BOOM!!! for this amount >>>", total);


  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK response- created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen command
exports.api = functions.https.onRequest(app);

// example of end-point
// local API endpoint
// http://localhost:5001/challenge-2ef9a/us-central1/api
