import { getAllAutomations } from "@/actions/automations"
import { onUserInfo } from "@/actions/user"
import { QueryClient, QueryFunction } from "@tanstack/react-query"

const prefetch = async (
    client: QueryClient,
    action: QueryFunction,
    key: string //key represents cached data
) => {
    return await client.prefetchQuery({
        queryKey: [key],
        queryFn: action,
        staleTime: 60000 //60*1000 milliseconds = 60secs
    })
}
export const PrefetchUserProfile = async (client: QueryClient) => {

    return await prefetch(client, onUserInfo,'user-profile')
}

export const PrefetchUserAutomations = async (client: QueryClient) => {
    return prefetch(client, getAllAutomations,'user-automations')
}