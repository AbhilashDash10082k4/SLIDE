"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/refresh";
import { updateIntegrations } from "../integrations";

export const onCurrentUser = async () => {
  //currentUser - allows you to securely retrieve information about the currently authenticated user during a server-side request. This fn returns an object containing the user details
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {
  //calling the helper fn, the onCurrentUser returns user that is stored in user var,
  // user= {id: "",email:"", firstName:"", lastName:"",username:"", etc.} has fields defined in User model as keys and respective values in an object
  const user = await onCurrentUser();
  try {
    //finding unique user from User 's table
    //findUser = {id:" ",clerkId:" ",email:" ",firstname:" ",lastname:" ",createdAt:" ", subscription:{}, integrations:[{}] }
    const found = await findUser(user.id);
    //found = 
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
    return {status: 201, data: created}
  } catch (error) {
    console.log(error)
    return {status : 500}
  }
};
