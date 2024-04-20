import { Loader2Icon } from "lucide-react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export function SubmitButton({ children }: { children: ReactNode }) {
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
