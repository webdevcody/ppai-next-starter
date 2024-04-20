import { SignedIn } from "@/components/auth/signed-in";
import { SignedOut } from "@/components/auth/signed-out";
import { Button } from "@/components/ui/button";
import { getSSRSession } from "@/lib/get-server-session";
import Link from "next/link";

export default async function Home() {
  const { isLoggedIn } = await getSSRSession();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-4xl">
        All your TODOs behind a stripe subscription paywall
      </h1>

      <p className="text-xl max-w-xl">
        This is a starter kit using next.js which is already hooked into all of
        the project planner AI features, including feedback, events, and
        changelog. We also included drizzle ORM and a docker container to get
        you started.
      </p>

      <SignedIn>
        <Button asChild>
          <Link href="/todos">Go to your Dashboard</Link>
        </Button>
      </SignedIn>

      <SignedOut>
        <Button asChild>
          <Link href="/api/auth/signin/google">Get Started</Link>
        </Button>
      </SignedOut>
    </main>
  );
}
