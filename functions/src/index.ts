import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info("Hello logs!", {structuredData: true});
	response.send("Hello from Firebase!");
});

//EXPRESS AND SO ON
import * as express from 'express'
import {Request, Response, NextFunction} from 'express'
import * as cors from 'cors'
const app = express()
app.use(cors({ origin: true }));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.get('/test', (req, res) => {
	res.send('yes!')
});


app.post('/intent', runAsync(async ({body}: Request, res:Response) => {
	if(typeof(body.amount) != typeof(0) || typeof(body.currency) != typeof("")){
		res.status(500).send('WRONG TYPES!')
		return
	}

	console.log("create payment intent")
	res.send(await createPaymentIntent(body.amount, body.currency))
}));

app.post('/deleteIntent', runAsync(async({body}: Request, res:Response) => {
	console.log("cancel payment")
	res.send(await stripe.paymentIntents.cancel(body.intentID, {
		cancellation_reason: "abandoned"
	}));
}))

import Stripe from 'stripe';

const stripe = new Stripe(functions.config().stripe.secret, {
	apiVersion: "2020-08-27"  
})

// const runtime = require('../.runtimeconfig.json')
// const stripe = new Stripe(runtime.stripe.secret, {
// 	apiVersion: "2020-08-27"  
// })

const createPaymentIntent = async (amount: number, currency: string) => {
	return await stripe.paymentIntents.create({
		amount,
		currency,
	})
}


export const payments = functions.https.onRequest(app)

//HELPERS
type appAction = (arg0: Request, arg1: Response, arg2: NextFunction) => any;
function runAsync(callback:appAction){
	return (req: Request, res: Response, next:NextFunction)=>{
			callback(req, res, next).catch(next)
	}
}