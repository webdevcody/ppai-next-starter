"use client";

import { trackEvent } from "@/lib/events";
import { useEffect } from "react";

export function SendEventOnLoad({ eventKey }: { eventKey: string }) {
  useEffect(() => {
    trackEvent(eventKey);
  }, [eventKey]);

  return null;
}
