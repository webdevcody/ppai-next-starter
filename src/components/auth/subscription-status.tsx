import { AwaitedReactNode } from "react";
import { getSSRSession } from "@/lib/get-server-session";
import { isUserSubscribed } from "@/use-cases/subscriptions";

export async function Unsubscribed({
  children,
}: {
  children: AwaitedReactNode;
}) {
  const { isLoggedIn, user } = await getSSRSession();
  if (!isLoggedIn) return null;
  const isSubscribed = isLoggedIn ? await isUserSubscribed(user!.id) : false;
  if (!isSubscribed) return children;
  return null;
}

export async function Subscribed({ children }: { children: AwaitedReactNode }) {
  const { isLoggedIn, user } = await getSSRSession();
  if (!isLoggedIn) return null;
  const isSubscribed = isLoggedIn ? await isUserSubscribed(user!.id) : false;
  if (isSubscribed) return children;
}
