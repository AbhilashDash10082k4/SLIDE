'use server'

import { onCurrentUser } from "../user"
import { createAutomation, getAutomations } from "./query";

export const createAutomations = async () => {
    const user = await onCurrentUser();
    try {
        //creating an automation
        const create = await createAutomation(user.id);
        console.log(create)
        if (create) return {status: 200, data: 'Automation Created'}

        return {status: 404, data:"Something went wrong"}
    } catch (error) {
        return {status: 500, data: "Internal server error"}
    }
}

export const getAllAutomations = async () => {
    const user = await onCurrentUser();
    try {
        //getting all the automations
        const automations = await getAutomations(user.id);
        if (automations) return {status: 200, data: automations.automations}
        return {status: 404, data: []}
    } catch (error) {
        return {status: 500, data: []}
    }
}