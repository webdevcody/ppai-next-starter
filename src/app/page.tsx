import { SignedIn } from "@/components/auth/signed-in";
import { SignedOut } from "@/components/auth/signed-out";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GetStartedButton } from "./_components/get-started-button";
import Image from "next/image";
import { PricingSection } from "./(landing)/_sections/pricing";
import { HeroSection } from "./(landing)/_sections/hero";
import { FeaturesSection } from "./(landing)/_sections/features";

export default async function Home() {
  return (
    // <h1 className="text-4xl flex flex-col gap-4">
    //   The Project Planner AI Starter Kit
    // </h1>

    // <p className="text-xl max-w-xl">This SaaS starter kit includes:</p>

    // <ul className="list-disc grid grid-cols-2 px-12 leading-10">
    //   <li>Authentication (Next-Auth)</li>
    //   <li>Authorization (custom)</li>
    //   <li>Subscription Management (Stripe)</li>
    //   <li>Stripe Integration / Webhooks</li>
    //   <li>Todo Management</li>
    //   <li>Drizzle ORM</li>
    //   <li>Light / Dark Mode</li>
    //   <li>ShadCN components</li>
    //   <li>Tailwind CSS</li>
    //   <li>Account Deletion</li>
    //   <li>Changelog (via Project Planner AI)</li>
    //   <li>Analytics (via Project Planner AI)</li>
    //   <li>Feedback (via Project Planner AI)</li>

    // <SignedIn>
    //   <Button asChild>
    //     <Link href="/todos">Go to your Dashboard</Link>
    //   </Button>
    // </SignedIn>

    // <SignedOut>
    //   <GetStartedButton />
    // </SignedOut>

    <div>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
    </div>
    // </main>
  );
}
