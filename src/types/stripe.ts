export interface infoInterface {
    payment_intent: string
    payment_intent_client_secret: string
    redirect_status: "succeeded" | "failed"
}