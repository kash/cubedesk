import {NextRequest, NextResponse} from 'next/server';
import {getUserByStripeCustomerId} from '@/server/models/user_account';
import {logger} from '@/server/services/logger';
import {getProSubscriptionAndUpdateUserProStatus} from '@/server/utils/pro';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: '2020-08-27',
});

export async function POST(request: NextRequest) {
	const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
	const sig = request.headers.get('stripe-signature');

	if (!sig) {
		return NextResponse.json({error: 'No signature'}, {status: 400});
	}

	let event: Stripe.Event;
	const body = await request.text();

	try {
		event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
	} catch (err: any) {
		return NextResponse.json({error: `Webhook Error: ${err.message}`}, {status: 400});
	}

	const eventType = event.type;
	const customerId = (event.data.object as any).customer;

	if (!customerId) {
		return NextResponse.json({success: true});
	}

	const user = await getUserByStripeCustomerId(customerId);

	if (!user) {
		logger.warn(
			`Could not find user with Stripe Customer. Stripe Customer ID: ${customerId}. Event Type: ${eventType}`
		);
		return NextResponse.json({success: true});
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
	return NextResponse.json({success: true});
}