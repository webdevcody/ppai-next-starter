import { database } from "@/db";
import { Todo, todos } from "@/db/schema";
import { count, eq } from "drizzle-orm";

/**
 * Here is an example CRUD methods for the todo table.
 * If you plan to keep your code base "clean", we recommend
 * no where else know about dizzle other than your data-access directory.
 */

export async function getTodo(todoId: string) {
  const todo = await database.query.todos.findFirst({
    where: (todos, { eq }) => eq(todos.id, todoId),
  });

  return todo;
}

export async function getTodos(userId: string) {
  const todos = await database.query.todos.findMany({
    where: (todos, { eq }) => eq(todos.userId, userId),
    orderBy: (todos, { asc }) => [asc(todos.createdAt)],
  });

  return todos;
}

export async function createTodo(newTodo: Omit<Todo, "id" | "createdAt">) {
  const [todo] = await database.insert(todos).values(newTodo).returning();
  return todo;
}

export async function updateTodo(todoId: string, updatedFields: Partial<Todo>) {
  await database.update(todos).set(updatedFields).where(eq(todos.id, todoId));
}

export async function deleteTodo(todoId: string) {
  await database.delete(todos).where(eq(todos.id, todoId));
}

export async function getTodosCount(userId: string) {
  const [{ count: totalTodos }] = await database
    .select({ count: count() })
    .from(todos)
    .where(eq(todos.userId, userId));

  return totalTodos;
}
