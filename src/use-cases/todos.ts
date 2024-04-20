import { isUserSubscribed } from "./subscriptions";
import { getTodoAccess } from "./authorization";
import {
  createTodo,
  deleteTodo,
  updateTodo,
  getTodosCount,
  getTodos,
} from "@/data-access/todos";

const TODO_LIMIT = 1;

export async function createTodoUseCase(userId: string, text: string) {
  const isSubscribed = await isUserSubscribed(userId);

  if (!isSubscribed) {
    const total = await getTodosCount(userId);
    console.log({ total });
    if (total >= TODO_LIMIT) {
      throw new Error(
        "Todo limit reached - Upgrade to premium to add more todos"
      );
    }
  }

  const todo = await createTodo({
    text,
    userId,
    isCompleted: false,
  });

  return todo;
}

export async function deleteTodoUseCase(userId: string, todoId: string) {
  const accessObj = await getTodoAccess(userId, todoId);

  if (!accessObj) {
    throw new Error("Unauthorized");
  }

  await deleteTodo(todoId);
}

export async function setTodoCompleteStatusUseCase(
  userId: string,
  todoId: string,
  isCompleted: boolean
) {
  const accessObj = await getTodoAccess(userId, todoId);

  if (!accessObj) {
    throw new Error("Unauthorized");
  }

  await updateTodo(todoId, { isCompleted });
}

export async function getTodoByIdUseCase(userId: string, todoId: string) {
  const accessObj = await getTodoAccess(userId, todoId);

  if (!accessObj) {
    throw new Error("Unauthorized");
  }

  return accessObj.todo;
}

export async function getTodosUseCase(userId: string) {
  const todos = await getTodos(userId);

  return todos;
}
