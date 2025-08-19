  'use server';

import { ID } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../server/appwrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"
//import { redirect } from "next/navigation"

export const signIn = async ({ email, password }: signInProps) => {
  try {
    //Mutation / Database / Make fetch
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password)

    return parseStringify(response);
  } catch (error) {
    console.error('Error', error)
  }
}

// address1, city, state, postalCode, dateOfBirth, ssn 

export const signUp = async (userData: SignUpParams) => {


  const { email, password, firstName, lastName} = userData;

  try {

    const { account } = await createAdminClient();
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );

    
    const session = await account.createEmailPasswordSession(email, password);

    await cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
  });

    return parseStringify(newUserAccount)

  } catch (error) {
    console.error('Error', error)
  }
}


// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();
    return parseStringify(user);
  } catch (error) {
    return null;
  }
}

export const logOutAccount = async () => {
  try {
    const { account} = await createSessionClient();
    (await cookies()).delete("appwrite-session");
    await account.deleteSession('current');

  } catch (error) {
    return null
  }
}


