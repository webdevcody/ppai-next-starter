import { Loader2Icon } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

export function LoaderButton({
  children,
  isLoading,
  ...props
}: ButtonProps & { isLoading?: boolean }) {
  return (
    <Button
      disabled={isLoading}
      type="submit"
      {...props}
      className="flex gap-2 justify-center px-3"
    >
      {isLoading ? <Loader2Icon className="animate-spin w-4 h-4" /> : children}
    </Button>
  );
}
