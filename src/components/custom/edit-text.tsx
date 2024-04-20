"use client";

import { ReactNode, useEffect, useState, useTransition } from "react";
import { Input } from "../ui/input";
import { CheckIcon, PencilIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { LoaderButton } from "../loader-button";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

export const updateTitleSchema = z.object({
  title: z.string().min(1),
});

export function EditText({
  children,
  onSaveAction,
  className,
  value,
}: {
  children: ReactNode;
  onSaveAction: (title: string) => Promise<void>;
  value: string;
  className?: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof updateTitleSchema>>({
    resolver: zodResolver(updateTitleSchema),
    defaultValues: {
      title: value,
    },
  });

  function onSubmit(values: z.infer<typeof updateTitleSchema>) {
    startTransition(() => {
      onSaveAction(values.title);
    });
    setIsEditing(false);
    form.reset();
  }

  useEffect(() => {
    form.setValue("title", value);
  }, [form, value]);

  return (
    <div>
      {isEditing && (
        <div className="flex gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex gap-4 items-center"
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        autoFocus
                        className={cn("py-6", className)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <LoaderButton
                variant={"default"}
                size="icon"
                type="submit"
                isLoading={isPending}
              >
                <CheckIcon />
              </LoaderButton>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  setIsEditing(false);
                  form.setValue("title", value);
                }}
              >
                <XIcon />
              </Button>
            </form>
          </Form>
        </div>
      )}
      {!isEditing && (
        <div className="flex gap-4 items-center">
          <span>{children}</span>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(true)}
          >
            <PencilIcon />
          </Button>
        </div>
      )}
    </div>
  );
}
