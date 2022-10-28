import {Request, Response} from 'express';
import {getUserByStripeCustomerId} from '../models/user_account';
import {logger} from '../services/logger';
import {getProSubscriptionAndUpdateUserProStatus} from '../util/pro';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const stripe = require('stripe');

export default async function stripeWebhookListener(request: Request, response: Response) {
	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
	const sig = request.headers['stripe-signature'];

	let event: any;

	try {
		event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
	} catch (err) {
		response.status(400).send(`Webhook Error: ${err.message}`);
		return;
	}

	const eventType = event.type;
	const customerId = event.data.object.customer;

	if (!customerId) {
		return;
	}

	const user = await getUserByStripeCustomerId(customerId);

	if (!user) {
		logger.warn(
			`Could not find user with Stripe Customer. Stripe Customer ID: ${customerId}. Event Type: ${eventType}`
		);
		return;
	}

	// Handle the event
	switch (eventType) {
		case 'customer.subscription.deleted':
		case 'customer.subscription.created':
		case 'customer.subscription.updated':
			await getProSubscriptionAndUpdateUserProStatus(user);
			break;
	}

	// Return a 200 response to acknowledge receipt of the event
	response.send();
}
