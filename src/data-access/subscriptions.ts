import { database } from "@/db";

export async function getSubscription(userId: string) {
  const subscription = await database.query.subscriptions.findFirst({
    where: (users, { eq }) => eq(users.userId, userId),
  });

  return subscription;
}
