import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession as getNextAuthServerSession } from "next-auth";
import { authConfig } from "./auth";
import "server-only";

export async function getSSRSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  const session = await getNextAuthServerSession(...args, authConfig);

  return {
    isLoggedIn: !!session,
    user: session?.user,
  };
}
