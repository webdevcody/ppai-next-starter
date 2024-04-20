import { AwaitedReactNode } from "react";
import { getSSRSession } from "@/lib/get-server-session";

export async function SignedOut({ children }: { children: AwaitedReactNode }) {
  const { isLoggedIn } = await getSSRSession();
  return !isLoggedIn && children;
}
