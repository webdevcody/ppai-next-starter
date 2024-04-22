import { GetStartedButton } from "@/app/_components/get-started-button";
import { SignedIn } from "@/components/auth/signed-in";
import { SignedOut } from "@/components/auth/signed-out";
import { UpgradeButton } from "@/components/stripe/upgrade-button/upgrade-button";
import { CheckIcon } from "lucide-react";

export function PricingSection() {
  return (
    <section className="bg-white dark:bg-gray-900" id="pricing">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="grid grid-cols-2 max-w-4xl mx-auto">
          <div className="flex flex-col w-fit p-6 text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option if when you&apos;re just starting out.
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">FREE</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <SignedOut>
              <GetStartedButton />
            </SignedOut>
          </div>
          <div className="flex flex-col w-fit p-6 text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Much more features for growing teams.
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">$10</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckIcon className="text-green-400" />
                <span>
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>

            <SignedOut>
              <GetStartedButton />
            </SignedOut>

            <SignedIn>
              <UpgradeButton className="w-full" />
            </SignedIn>
          </div>
        </div>
      </div>
    </section>
  );
}
