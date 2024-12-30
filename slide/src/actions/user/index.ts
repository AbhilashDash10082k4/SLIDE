"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/refresh";
import { updateIntegrations } from "../integrations/queries";

//currentUser - allows you to securely retrieve information about the currently authenticated user during a server-side request. This fn returns an object containing the user details
export const onCurrentUser = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return user;
};

  /* user = {
  "id": "user_12345", - this is the clerkId
  "firstName": "John",
  "lastName": "Doe",
  "emailAddresses": [
    {
      "id": "email_67890",
      "emailAddress": "john.doe@example.com",
      "verification": "verified"
    }
  ],
  "username": "john_doe",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-10T00:00:00.000Z",
  "imageUrl": "https://example.com/avatar.jpg"
}
*/
export const onBoardUser = async () => {
  const user = await onCurrentUser();
  console.log(`user = ${await currentUser()}`);
  try {
    //finding unique user from User's table
    //findUser = {id:" ",clerkId:" ",email:" ",firstname:" ",lastname:" ",createdAt:" ", subscription:{}, integrations:[{id:"", token:"", expiresAt:"", name:""}] }
    const found = await findUser(user.id);
    console.log(`found = ${await findUser(user.id)}`)
    
    if (found) {
      //integrating user's insta accnt, refresh access token is used to access insta that refreshes in a certain time frame
      if (found.integrations.length > 0) {
        //if user is found with integrations- to chk if the refresh_access token needs to be refreshed
        const today = new Date();

        const time_left = found.integrations[0].expiresAt?.getTime()! - today.getTime();

        ///days left for refresh token, refresh token any time tehy login to this app, time left in days for expiry
        const days = Math.round(time_left / (1000*3600*24));

        //if days < 5 then token needs to be refreshed
        if (days < 5) {
          console.log("refresh the token");

          //helper fn to refresh the token., token string is passed in the refreshToken fn
          const refresh = await refreshToken(found.integrations[0].token);

          //once the refresh token is recieved from instagram api , it has to be stored and updated
          const today = new Date();

          //giving the refresh token some time to expire
          const expire_date = today.setDate(today.getDate() + 60);

          //helper fn to update the token
          const update_token = await updateIntegrations(
            refresh.access_token,
            new Date(expire_date),
            found.integrations[0].id
          );
          console.log(update_token);
          if (!update_token) {
            console.log("Update token failed");
          }
        }
      }
      return {
        status: 200,
        data: {
          firstname: found?.firstname,
          lastname: found?.lastname,
        },
      };
    }
    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress
    )
    console.log(created);
    return {status: 201, data: created}
  } catch (error) {
    console.log(error)
    return {status : 500}
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    if (profile) {
      return {status: 200, data: profile};
    }
    return {status: 404}
  } catch (error) {
    return {status: 500}
  }
}