import * as express from 'express'
import {Request, Response, NextFunction} from 'express'
import * as cors from 'cors'

export const app = express()
app.use(cors({ origin:true }))



//PAYMENT INTENTS
import {createPaymentIntent} from './payments'
app.post('/payments', runAsync( async( {body} : Request, res: Response) => {
        res.send(await createPaymentIntent(body.amount, body.currency))
    })
)



//HELPER FUNCTION GOD BLESS YOU FIRESHIP.IO
/* tslint:disable-next-line */
function runAsync(callback:any){
    return (req: Request, res: Response, next:NextFunction)=>{
        callback(req, res, next).catch(next)
    }
}