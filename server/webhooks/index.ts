import bodyParser from 'body-parser';
import stripeWebhookListener from './stripe';

export function initWebhookListeners() {

}

export function initWebhookListenersRaw() {
	global.app.post('/api/stripe-webhook', bodyParser.raw({type: 'application/json'}), stripeWebhookListener);

}
