"use client";

import { useCallback } from "react";

import { useRouter } from "next/navigation";

import { Loader2 } from "lucide-react";
import { SendEventOnLoad } from "@/components/send-event-on-load";

export default function SuccessPage() {
  const router = useRouter();

  const afterEventSent = useCallback(() => {
    setTimeout(() => {
      router.push("/todos");
    }, 1500);
  }, [router]);

  return (
    <>
      <SendEventOnLoad
        eventKey="user subscribed"
        afterEventSent={afterEventSent}
      />
      <div className="flex flex-col gap-8 items-center pb-24">
        <h1 className="text-4xl mt-24">Subscription Successful</h1>
        <p>Thank you for subscribing!</p>
        <p>redirecting to your dashboard...</p>
        <Loader2 className="mr-2 h-24 w-24 animate-spin" />
      </div>
    </>
  );
}
