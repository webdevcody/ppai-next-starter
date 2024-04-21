"use client";

import { trackEvent } from "@/lib/events";
import { useEffect, useRef } from "react";

export function SendEventOnLoad({
  eventKey,
  afterEventSent,
}: {
  eventKey: string;
  afterEventSent?: () => void;
}) {
  const isSent = useRef(false);

  useEffect(() => {
    if (isSent.current) return;
    isSent.current = true;
    trackEvent(eventKey)
      .then(() => {
        afterEventSent?.();
      })
      .catch((err) => {
        console.error("Error sending event:", err);
      });
  }, [eventKey, afterEventSent]);

  return null;
}
