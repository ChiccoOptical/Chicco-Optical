// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
import * as functions from "firebase-functions";

// IMPORTS AND HELPERS
import Stripe from "stripe"
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2020-08-27"
})

import { app } from './api'
export const payments = functions.https.onRequest(app)

// TODO Webhooks
//WEBHOOK THINGS
// app.post('/webhook', async (req, res) => {
//     const sig = req.headers['stripe-signature'] as string
//     const endpointSecret = '';


//     let event;
//     try{
//         event = stripe.webhooks.constructEvent(req.body.rawBody, sig, endpointSecret)
//     }catch (err){
//         res.status(400).end()
//         return;
//     }

//     //handle webhook
//     const intent = event.data.object
//     switch(event.type){
//         case 'payment_intent.succeeded':
//             //UPDATE FIRESTORE TO SHOW ORDER
//             break;
//         case 'payment_intent.failed':
//             //SOMETHING IDK YET
//             break;
//     }
// })



//Expose express api as a single cloud function