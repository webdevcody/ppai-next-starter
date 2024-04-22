# ProjectPlannerAI StarterKit - A boilerplate for building SaaS products

Welcome to the [ProjectPlannerAI](https://projectplannerai.com) StarterKit boilerplate! This is a github template which contains the following technology we feel is a great starting point for any new SaaS product.

Built with the Next.js 14 App Router, TypeScript, Drizzle ORM, Stripe, Shadcn & Tailwind CSS.

![demo](https://github.com/webdevcody/ppai-next-starter/assets/39573679/46f68cfd-5f85-4150-ace6-5a140ac5a3a5)

## Features

- 🔒 Authentication (Next-Auth)
- 🚨 Authorization
- 💳 Subscription Management (Stripe)
- 💵 Stripe Integration / Webhooks
- 🗂️ Todo Management
- 🌧️ Drizzle ORM
- 😎 Light / Dark Mode
- 🌟 Tailwind CSS & ShadCN
- ✅ Account Management
- 🔁 Changelog
- 📈 Analytics
- 💬 Feedback

We kept this project pretty simple but with enough functionality to allow you to start adding on new features as needed.

## Getting started

Start by clicking the "Use this template" button on the github repo. We suggest creating a new repository so you can track your code changes. After, clone your own repository down to your computer and start working on it.

### Prerequisites

This starter kit uses Docker and Docker Compose to run a postgres database, so you will need to either have those installed, or modify the project to point to a hosted database solution.

## How to Run

1. `cp .env.sample .env`
2. `npm i`
3. `npm run dev`
4. `docker compose up`
5. `npm run db:push`

## Env Setup

This starter kit depends on a few external services, such as **google oauth**, **stripe**, etc. You'll need to following the steps below and make sure everything is setup and copy the necessary values into your .env file:

### Database

This starter kit assumes you will use the docker postgres locally, but if you'd rather use a third party database host, simply change your .env **DATABASE_URL** to point to your preferred postgres host.

### Stripe Setup

This starter kit uses stripe which means you'll need to setup a stripe account at https://stripe.com. After creating an account and a project, you'll need to set the following env variables:

- STRIPE_API_KEY
- NEXT_PUBLIC_STRIPE_KEY
- STRIPE_WEBHOOK_SECRET
- PRICE_ID
- NEXT_PUBLIC_STRIPE_MANAGE_URL

How you can find these are outlined below:

#### Stripe Keys

You need to define both **NEXT_PUBLIC_STRIPE_KEY** and **STRIPE_API_KEY** inside of .env. These can get found here:

- https://dashboard.stripe.com/test/apikeys

#### Webhook Keys

Depending on if you are developing locally or deploying to prod, there are two paths you need to take for getting a webhook key:

##### Local Development

We provided an npm alias `stripe:listen` you can run if you want to setup your locally running application to listen for any stripe events. Run this command and copy the webhook secret it prints to the console into your .env file.

##### Production

When going to production, you'll need to create a webhook endpoint and copy your webhook secret into _STRIPE_WEBHOOK_SECRET_:

1. https://dashboard.stripe.com/test/webhooks
2. create an endpoint pointing to https://your-domain.com/api/webhooks/stripe
3. listen for events invoice.payment_succeeded and checkout.session.completed
4. find your stripe secret key and copy into your projects

#### Price Id (Product)

You'll need to create a subscription product in stripe:

1. https://dashboard.stripe.com/products/create
2. Make your recurring product
3. Copy the price id
4. paste price id into .env of **PRICE_ID**

#### Customer Portal

Stripe has a built in way for customers to cancel their subscriptions. You'll need to enable this feature:

1. https://dashboard.stripe.com/settings/billing/portal
2. Click activate portal link button
3. Copy your portal link
4. Paste as env variable as **NEXT_PUBLIC_STRIPE_MANAGE_URL**

### Project Planner ID

After you create your project inside of https://projectplannerai.com, copy your project id from your url and set in:

- **NEXT_PUBLIC_PROJECT_PLANNER_ID**

### HOSTNAME

When deplying to production, you want to set HOSTNAME to your FQDN, such as `https://you-domain.com`

### Next-Auth

We use [Next-Auth](https://next-auth.js.org/) for our authentication library. In order to get this start kit setup correctly, you need to setup a google provider.

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

- **GOOGLE_CLIENT_ID**
- **GOOGLE_CLIENT_SECRET**

8. run `openssl rand -base64 32` and set **NEXTAUTH_SECRET** (this is used for signing the jwt)

## Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. We want to keep this starter simple with the core technology picked, so we don't recommend trying to add in various things without prior approval.
