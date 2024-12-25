import axios from 'axios'

//The purpose of the function is to refresh an Instagram access token. Instagram access tokens expire after a set period, and this API endpoint extends the token's validity.

//Often used in applications that integrate with Instagram to ensure continuous access to user data without requiring frequent re-authentication.

//refresh_access_tokenThis endpoint is part of the Instagram Graph API's Basic Display API. It is used to refresh short-lived access tokens, turning them into long-lived access tokens.

/*Query params = grant_type=ig_refresh_token: Specifies the grant type for refreshing the token.
access_token=${token}: Passes the current access token to the API.

The function returns the data field from the API response.- 
{
  "access_token": "new_long_lived_access_token",
  "token_type": "bearer",
  "expires_in": 5184000 // Time to expiry in seconds (e.g., 60 days)
}

The API response typically includes the new access token and its expiration time.*/
export const refreshToken = async (token: string) => {
    const refresh_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`)

    return refresh_token.data;
}