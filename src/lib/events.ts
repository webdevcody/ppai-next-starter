import { env } from "@/env";

export async function trackEvent(key: string) {
  if (env.NEXT_PUBLIC_SKIP_EVENTS) {
    return;
  }
  await fetch("https://projectplannerai.com/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key,
      projectId: env.NEXT_PUBLIC_PROJECT_PLANNER_ID,
    }),
  });
}
