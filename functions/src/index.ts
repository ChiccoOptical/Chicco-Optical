import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
	functions.logger.info("Hello logs!", {structuredData: true});
	response.send("Hello from Firebase!");
});

//EXPRESS AND SO ON
import * as express from 'express'
import {Request, Response, NextFunction} from 'express'
import * as cors from 'cors'
import Stripe from 'stripe';


const stripe = new Stripe(functions.config().stripe.secret, {
	apiVersion: "2020-08-27"
})
const app = express()
app.use(cors({ origin: true }));


app.get('/test', (req, res) => {
	res.send('yes!')
});

app.post('/intent', runAsync(async ({body}: Request, res:Response) => {
	const {amount, currency, payment_method_types} = body
	if(typeof(amount) != typeof(0) || typeof(currency) != typeof("")){
		res.status(500).send('WRONG TYPES!')
		return
	}
	console.log("create payment intent")
	const PI = await stripe.paymentIntents.create({ amount, currency, payment_method_types })
	res.send(PI)
}));


app.post('/deleteIntent', runAsync(async({body}: Request, res:Response) => {
	console.log("cancel payment")
	res.send(await stripe.paymentIntents.cancel(body.intentID, {
		cancellation_reason: "abandoned"
	}));
}))

// PAYMENTS
export const payments = functions.https.onRequest(app)

//HELPERS
type appAction = (arg0: Request, arg1: Response, arg2: NextFunction) => any;
function runAsync(callback:appAction){
	return (req: Request, res: Response, next:NextFunction)=>{
			callback(req, res, next).catch(next)
	}
}