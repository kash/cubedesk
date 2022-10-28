# cubedesk-app
Stripe webhook setup

-   Install Stripe CLI: `brew install stripe/stripe-cli/stripe`
-   Login to Stripe: `stripe login`
-   Forward webhooks to your local machine: `stripe listen --forward-to http://localhost:3000/api/stripe-webhook`
-   Trigger event, ex: `stripe trigger subscription_schedule.canceled`
    -   Optional: override customerId: `stripe trigger subscription_schedule.canceled --add subscription_schedule.canceled:customer=cus_LTTtUOyKZzEhhn`
