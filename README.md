# Welcome

Welcome to the Project Planner AI Next Starter Kit!

## How to Run

1. `cp .env.sample .env` (one time setup command)
2. `npm i` (one time setup command)
3. `npm run dev`
4. `docker compose up`
5. `npm run db:push` (one time setup command unless schema chamges)

## Setup

You'll need to modify your .env to have all the proper values. Please read through this readme to learn where to get these values.

### Database

This starter kit uses postgres and assumes you will be using docker with docker-compose to spin up a local postgres database. You'd rather use a third party database host, simply change your .env DATABASE_URL to point to your preferred postgres host.

#### Migrations

Whenever you make changes to your drizzle schema, you'll need to remember to run the following command to generate and apply your migration scripts to your database.

`npm run db:push`

### Stripe Setup

You'll need to setup multiple things in stripe to get these values for your app:

STRIPE_API_KEY=
NEXT_PUBLIC_STRIPE_KEY=
STRIPE_WEBHOOK_SECRET=
PRICE_ID=
NEXT_PUBLIC_STRIPE_MANAGE_URL=

Please read below

#### Stripe Keys

You need to define both NEXT_PUBLIC_STRIPE_KEY and STRIPE_API_KEY inside of .env. These can get found here:

1. https://dashboard.stripe.com/test/apikeys

#### Webhook Keys

When going to production, you'll need to create a webhook endpoint and copy your webhook secret into STRIPE_WEBHOOK_SECRET:

1. https://dashboard.stripe.com/test/webhooks
2. create an endpoint pointing to https://your-domain.com/api/webhooks/stripe
3. listen for events invoice.payment_succeeded and checkout.session.completed

#### Price Id (Product)

You'll need to create a subscription product in stripe:

1. https://dashboard.stripe.com/products/create
2. Make your recurring product
3. Copy the price id
4. paste price id into .env of PRICE_ID

#### Customer Portal

Stripe has a built in way for customers to cancel their subscriptions. You'll need to enable this feature:

1. https://dashboard.stripe.com/settings/billing/portal
2. Click activate portal link button
3. Copy your portal link
4. Paste as env variable as NEXT_PUBLIC_STRIPE_MANAGE_URL

### Project Planner ID

After you create your project inside of https://projectplannerai.com, copy your project id from your url and set in:

NEXT_PUBLIC_PROJECT_PLANNER_ID=

### HOSTNAME

When deplying to prod, you want to set HOSTNAME to your FQDN, such as `https://you-domain.com`

### Next-Auth

#### Google Provider

By default, this starter only comes with the google provider which you'll need to setup:

1. https://console.cloud.google.com/apis/credentials
2. create a new project
3. setup oauth consent screen
4. create credentials - oauth client id
5. for authorized javascript origins

- http://localhost:3000
- https://your-domain.com

6. Authorized redirect URIs

- http://localhost:3000/api/auth/callback/google
- https://your-domain.com/api/auth/callback/google

7. Set your google id and secret inside of .env

GOOGLE_ID=
GOOGLE_SECRET=

8. run `openssl rand -base64 32` and set NEXTAUTH_SECRET (this is used for signing the jwt)
