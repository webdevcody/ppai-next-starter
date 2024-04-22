import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DeleteAccountButton } from "./_components/delete-account-button";

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl mb-8">Account Settings</h1>

      <section className="space-y-6">
        <div className="bg-white dark:border-neutral-800 dark:bg-transparent rounded-md border">
          <div className="border-b px-4 py-2 sm:px-6 md:py-3 dark:bg-neutral-900/50 bg-neutral-50 rounded-t-md">
            <span className="text-base sm:text-lg font-medium mb-4">
              Manage Subscription
            </span>
          </div>

          <div className="p-4 sm:px-6">
            <div className="mb-4 flex text-sm sm:text-base flex-col gap-4">
              <div>You can cancel your subscription with the link below</div>
              <Button asChild className="max-w-fit">
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

        <div className="bg-white border-red-500 dark:bg-transparent rounded-md border">
          <div className="border-b px-4 py-2 sm:px-6 md:py-3 dark:bg-neutral-900/50 bg-neutral-50 rounded-t-md">
            <span className="text-base sm:text-lg font-medium mb-4">
              Danger Zone
            </span>
          </div>

          <div className="p-4 sm:px-6">
            <div className="mb-4 flex text-sm sm:text-base flex-col gap-4">
              <div>You can delete your account below</div>
              <DeleteAccountButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
