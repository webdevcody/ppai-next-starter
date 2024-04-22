import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignedIn } from "@/components/auth/signed-in";
import { SignedOut } from "@/components/auth/signed-out";
import { UpgradeButton } from "@/components/stripe/upgrade-button/upgrade-button";
import { Unsubscribed } from "@/components/auth/subscription-status";
import { LogOut, Settings2Icon } from "lucide-react";
import { getSSRSession } from "@/lib/get-server-session";
import { ModeToggle } from "../mode-toggle";
import FeedbackButton from "./feedback";
import { Links } from "./links";
import Image from "next/image";

export async function Header() {
  const { user } = await getSSRSession();

  return (
    <div className="border-b py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/" className="flex gap-2 items-center text-xl">
            <Image
              className="rounded w-8 h-8"
              width="50"
              height="50"
              src="/computer.jpeg"
              alt="hero image"
            />
            <span className="font-bold">StarterKit</span>
          </Link>

          <Links />
        </div>

        <div className="flex justify-between gap-4">
          <SignedIn>
            <Button variant={"secondary"} asChild>
              <Link href="/todos">Manage Todos</Link>
            </Button>
          </SignedIn>

          <Unsubscribed>
            <UpgradeButton />
          </Unsubscribed>

          <FeedbackButton />

          <ModeToggle />

          <SignedIn>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user?.image || undefined} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/settings" className="flex gap-2 items-center">
                    <Settings2Icon className="w-4 h-4" /> Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/api/auth/signout?callbackUrl=/"
                    className="flex gap-2 items-center"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <Button asChild>
              <Link href="/api/auth/signin/google">Sign In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
