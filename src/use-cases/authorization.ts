import { getTodo } from "@/data-access/todos";

/**
 * Use this method inside of use cases to verify a user has access to a todo.
 */
export async function getTodoAccess(userId: string, todoId: string) {
  const todo = await getTodo(todoId);

  if (!todo) {
    return null;
  }

  if (todo.userId !== userId) {
    return null;
  }

  return { todo };
}
