"use server";

import { getSSRSession } from "@/lib/get-server-session";
import z from "zod";
import { todoSchema } from "./validation";
import {
  createTodoUseCase,
  deleteTodoUseCase,
  setTodoCompleteStatusUseCase,
} from "@/use-cases/todos";
import { revalidatePath } from "next/cache";

export async function createTodoAction(data: z.infer<typeof todoSchema>) {
  const { user } = await getSSRSession();

  if (!user) {
    throw new Error("Unauthorized");
  }

  const newTodo = todoSchema.parse(data);

  await createTodoUseCase(user.id, newTodo.text);

  revalidatePath("/todos");
}

export async function deleteTodoAction(todoId: string) {
  const { user } = await getSSRSession();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await deleteTodoUseCase(user.id, todoId);

  revalidatePath("/todos");
}

export async function setTodoCompleteStatusAction(
  todoId: string,
  isCompleted: boolean
) {
  const { user } = await getSSRSession();

  if (!user) {
    throw new Error("Unauthorized");
  }

  await setTodoCompleteStatusUseCase(user.id, todoId, isCompleted);

  revalidatePath("/todos");
}
