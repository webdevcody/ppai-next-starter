import { Session } from "next-auth";
import { AwaitedReactNode } from "react";
import { getSSRSession } from "@/lib/get-server-session";

export async function SignedIn({
  children,
}: {
  children:
    | (({ user }: { user: Session["user"] }) => AwaitedReactNode)
    | AwaitedReactNode;
}) {
  const { isLoggedIn, user } = await getSSRSession();
  if (children instanceof Function) {
    return isLoggedIn && children?.({ user: user! });
  } else {
    return isLoggedIn && children;
  }
}
