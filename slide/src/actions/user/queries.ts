"use server";

import { client } from "@/lib/prisma";

//query to find user based on their clerkId
export const findUser = async (clerkId: string) => {
    //client.user.findUnique- A Prisma query to find a single user in the user table.

    //The where clause filters the user table for a record with the specified clerkId.

    //include:- Fetches all subscription-(model Subscription is related to User model by the name of subscriptions, subscription:true fetches all the fields in Subscription model) and specific integrations data related to the user.

    //integrations:- Fetches specific fields (id, token, expiresAt, and name="INSTAGRAM") from the integrations relation with User model

    //client = an instance of db connection
    //findUnique is used with fields with @unique or @id tags only
    //so findUser = {id:" ",clerkId:" ",email:" ",firstname:" ",lastname:" ",createdAt:" ", subscription:{}, integrations:[{}] }, automations from User table will not be shown as it is not included
  return await client.user.findUnique({
    where: { clerkId },
    include: {
      subscription: true,
      integrations: {
        select: {
          id: true,
          token: true,
          expiresAt: true,
          name: true,
        },
      },
    },
  });
};

export const createUser = async (
  clerkId: string,
  firstname: string,
  lastname: string,
  email: string
) => {
  return await client.user.create({
    data: { 
      clerkId,
      firstname,
      lastname,
      email,
      subscription: { create: {} }
    },
    select: {
      firstname: true,
      lastname: true
    }
  })
}