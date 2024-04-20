import { database } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function deleteUser(userId: string) {
  await database.delete(users).where(eq(users.id, userId));
}
