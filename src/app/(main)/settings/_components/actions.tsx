"use server";

import { getSSRSession } from "@/lib/get-server-session";
import { deleteUserUseCase } from "@/use-cases/users";

export async function deleteAccountAction() {
  const { user } = await getSSRSession();

  if (!user) {
    throw new Error("You must be signed in to delete your account");
  }

  await deleteUserUseCase(user.id, user.id);
}
