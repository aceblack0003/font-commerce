import { mongooseConnect } from "@/lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);
import { buffer } from "micro";

const endpointSecret = "whsec_94894280a7401e7483bf3c117e8343e2467de5d4d46795da19b8c4e1c07c125e";

export default async function handle(req, res) {
    await mongooseConnect()
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntentSucceeded = event.data.object;
            console.log(paymentIntentSucceeded);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
}

export const config={
    api:{bodyParser:false,}
}