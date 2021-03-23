import {stripe} from './'
import {supportedCurrency} from './types'


export async function createPaymentIntent(amountIn: number, currencyIn: supportedCurrency){
     return await stripe.paymentIntents.create({
         amount: amountIn,
         currency: currencyIn,
     })
}