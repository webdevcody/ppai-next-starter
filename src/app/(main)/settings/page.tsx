import { Button } from "@/components/ui/button";
import Link from "next/link";

export function SettingsPage() {
  return (
    <div>
      <h1>Settings</h1>

      <div className="bg-white dark:border-neutral-800 dark:bg-transparent rounded-md border">
        <div className="border-b px-4 py-2 sm:px-6 md:py-3 dark:bg-neutral-900/50 bg-neutral-50 rounded-t-md">
          <span className="text-base sm:text-lg font-medium mb-4">
            Manage Subscription
          </span>
        </div>

        <div className="p-4 sm:px-6">
          <div className="text-neutral-500 mb-4 flex text-sm sm:text-base flex-col gap-4">
            <div>You can cancel your subscription with the link below</div>
            <Button className="max-w-fit">
              <Link
                href={process.env.NEXT_PUBLIC_STRIPE_MANAGE_URL!}
                target="_blank"
                rel="noreferrer"
              >
                Manage Subscription
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
