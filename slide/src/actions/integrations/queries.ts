'use server'
import { client } from "@/lib/prisma"

export const updateIntegrations = async (token: string, expire: Date, id: string) => {
    return client.integrations.update({
        where: { id },
        //updating the token and expiresAt to expire
        data: {
            token,
            expiresAt: expire,
        }
    })
}