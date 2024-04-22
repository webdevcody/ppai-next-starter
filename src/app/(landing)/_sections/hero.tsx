import { GetStartedButton } from "@/app/_components/get-started-button";
import { SignedIn } from "@/components/auth/signed-in";
import { SignedOut } from "@/components/auth/signed-out";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              The Starter Kit you&apos;ve needed from the start.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              This <strong className="font-bold">free</strong> and{" "}
              <strong className="font-bold">open-source</strong> starter kit we
              created for you to acheive your next{" "}
              <strong className="font-bold">SaaS projects</strong> with ease.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <SignedIn>
                <Button asChild>
                  <Link href="/todos">Go to your Dashboard</Link>
                </Button>
              </SignedIn>

              <SignedOut>
                <GetStartedButton />
              </SignedOut>
            </div>
          </div>

          <div className="hidden lg:mt-0 lg:col-span-4 lg:flex">
            <Image
              className="rounded-xl w-full"
              width="200"
              height="200"
              src="/computer.jpeg"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
