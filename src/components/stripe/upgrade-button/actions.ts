"use server";

import { env } from "@/env";
import { getSSRSession } from "@/lib/get-server-session";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

export async function generateStripeSessionAction() {
  const session = await getSSRSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  if (!session.user) {
    throw new Error("Unauthorized");
  }

  if (!session.user.email) {
    throw new Error("Email is required");
  }

  if (!session.user.id) {
    throw new Error("Id is required");
  }

  const stripeSession = await stripe.checkout.sessions.create({
    success_url: `${env.HOSTNAME}/success`,
    cancel_url: `${env.HOSTNAME}/cancel`,
    payment_method_types: ["card"],
    mode: "subscription",
    customer_email: session.user.email,
    line_items: [
      {
        price: env.PRICE_ID,
        quantity: 1,
      },
    ],
    metadata: {
      userId: session.user.id,
    },
  });

  redirect(stripeSession.url!);
}
