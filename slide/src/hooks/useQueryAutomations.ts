import { getAllAutomations } from "@/actions/automations"
import { useQuery } from "@tanstack/react-query"

export const useQueryAutomations = () => {
    //useQuery makes a query call based on queryKey and queryFn
    return useQuery({
        queryKey:['user-automations'],
        queryFn: getAllAutomations,
    })
}