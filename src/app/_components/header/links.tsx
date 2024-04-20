"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Links() {
  const path = usePathname();

  if (path !== "/") {
    return null;
  }

  return (
    <div>
      <Button variant={"link"} asChild>
        <Link href="/#features">Features</Link>
      </Button>

      <Button variant={"link"} asChild>
        <Link href="/#pricing">Pricing</Link>
      </Button>

      <Button variant={"link"} asChild>
        <Link href="/changelog">Changelog</Link>
      </Button>
    </div>
  );
}
