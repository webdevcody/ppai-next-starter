"use client";

import { Todo } from "@/db/schema";
import { TrashIcon } from "lucide-react";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { deleteTodoAction, setTodoCompleteStatusAction } from "./actions";
import { LoaderButton } from "@/components/loader-button";
import { Checkbox } from "@/components/ui/checkbox";
import { trackEvent } from "@/lib/events";

function TodoCheckbox({ todo }: { todo: Todo }) {
  const [pending, startTransition] = useTransition();

  return (
    <Checkbox
      checked={todo.isCompleted}
      id={todo.id}
      onCheckedChange={(checked) => {
        trackEvent("user toggled todo");
        startTransition(() => {
          setTodoCompleteStatusAction(todo.id, checked as boolean);
        });
      }}
    />
  );
}

export function Todo({ todo }: { todo: Todo }) {
  const { toast } = useToast();
  const [pending, startTransition] = useTransition();

  return (
    <div
      key={todo.id}
      className="bg-gray-200 dark:bg-gray-800 w-full py-4 px-4 rounded flex items-center gap-4"
    >
      <div className="flex items-center gap-4 flex-grow">
        <TodoCheckbox todo={todo} />

        <label
          htmlFor={todo.id}
          className="text-2xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {todo.text}
        </label>
      </div>

      <LoaderButton
        isLoading={pending}
        onClick={() => {
          trackEvent("user deleted todo");
          startTransition(() => {
            deleteTodoAction(todo.id)
              .then(() => {
                toast({
                  title: "Todo Deleted",
                  description: "Your todo has been removed",
                });
              })
              .catch((e) => {
                toast({
                  title: "Something went wrong",
                  description: e.message,
                  variant: "destructive",
                });
              });
          });
        }}
        variant="destructive"
        title="Delete Todo"
      >
        <TrashIcon className="w-4 h-4" />
      </LoaderButton>
    </div>
  );
}
