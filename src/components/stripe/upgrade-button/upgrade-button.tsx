"use client";

import { Button } from "@/components/ui/button";
import { generateStripeSessionAction } from "./actions";
import { useFormStatus } from "react-dom";
import { Loader2Icon } from "lucide-react";
import { ReactNode } from "react";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

export function UpgradeButton({ className }: { className?: string }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        trackEvent("user clicked upgrade button");
        generateStripeSessionAction();
      }}
    >
      <LoaderButton className={className}>Upgrade</LoaderButton>
    </form>
  );
}

function LoaderButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      type="submit"
      className={cn("flex gap-2 justify-center", className)}
    >
      {pending && <Loader2Icon className="animate-spin w-4 h-4" />} {children}
    </Button>
  );
}
