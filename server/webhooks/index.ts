import bodyParser from 'body-parser';
import stripeWebhookListener from './stripe';
import mailchimpWebhookListener from './mailchimp';

export function initWebhookListeners() {
	global.app.post(
		'/api/mailchimp-webhook',
		mailchimpWebhookListener
	);
}

export function initWebhookListenersRaw() {
	global.app.post('/api/stripe-webhook', bodyParser.raw({type: 'application/json'}), stripeWebhookListener);

}
