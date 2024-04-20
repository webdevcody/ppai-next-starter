# Welcome

Welcome to the Project Planner AI Next Starter Kit!

## How to Run

`npm i`
`npm run dev`
`docker compose up`

## Database

This starter kit uses postgres and assumes you will be using docker with docker-compose to spin up a local postgres database. You'd rather use a third party database host, simply change your .env DATABASE_URL to point to your preferred postgres host.

### Migrating Drizzle Schema Changes Locally

Whenever you make changes to your drizzle schema, you'll need to remember to run the following command to generate and apply your migration scripts to your database.

`npm run db:push`
