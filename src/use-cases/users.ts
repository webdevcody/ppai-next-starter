import { deleteUser } from "@/data-access/users";

export async function deleteUserUseCase(
  userId: string,
  userToDeleteId: string
) {
  if (userId !== userToDeleteId) {
    throw new Error("You can only delete your own account");
  }

  await deleteUser(userId);
}
