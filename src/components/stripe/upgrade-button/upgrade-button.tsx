"use client";

import { Button } from "@/components/ui/button";
import { generateStripeSessionAction } from "./actions";
import { useFormStatus } from "react-dom";
import { Loader2Icon } from "lucide-react";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/events";

export function UpgradeButton() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        trackEvent("user clicked upgrade button");
        generateStripeSessionAction();
      }}
    >
      <LoaderButton>Upgrade</LoaderButton>
    </form>
  );
}

function LoaderButton({ children }: { children: ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className="flex gap-2 justify-center"
    >
      {pending && <Loader2Icon className="animate-spin w-4 h-4" />} {children}
    </Button>
  );
}
