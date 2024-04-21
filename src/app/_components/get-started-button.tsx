"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/events";
import { signIn } from "next-auth/react";

export function GetStartedButton() {
  return (
    <Button
      onClick={() => {
        trackEvent("user clicked get started");
        signIn("google", { callbackUrl: "/todos" });
      }}
    >
      Login to Get Started
    </Button>
  );
}
