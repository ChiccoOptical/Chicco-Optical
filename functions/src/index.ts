import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


import * as express from 'express'
import * as cors from 'cors'
const app = express()
app.use(cors({ origin: true }));

export const payments = functions.https.onRequest(app)

//
//CHANGE WITH firebase functions:config:set stripe.secret=[ENTER SECRET KEY HERE]
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51IXE3zJY5AEAzijm7vmdUygn26Le6VJIbZf9bwGKMc8zm1RZLivd5EvUgUJ6flMaYSppFf0dDZ9P89cTDZ5Toatg00WHoBa3Zl', {
    apiVersion: "2020-08-27"  
})

stripe.balance

///process.env.STRIPE_SECRET_KEY as string