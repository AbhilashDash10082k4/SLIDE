import axios from 'axios'
export const refreshToken = async (token: string) => {
    //in order to update integrations refresh token is reqd
    const refresh_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`)

    return refresh_token.data;
}