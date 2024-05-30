"use server";

import { getXataClient, UserRecord } from "@/xata";
import { handleError } from "../utils";

export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  photo: string;
};

export async function createUser(user: Pick<UserRecord, "clerkId" | "email" | "photo" | "firstname" | "lastname" | "username">) {
  try {
    const newUser = await getXataClient().db.user.create(user);

    return newUser
  } catch (error) {
    handleError(error);
  }
}
