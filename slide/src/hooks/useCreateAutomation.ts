'use client'
import { createAutomations } from "@/actions/automations";
import { useMutationData } from "./useMutationData";

export const useCreateAutomation = () => {
  //hook for optimistic UI
  const { isPending, mutate } = useMutationData(
    ["create-automation"], //mutation key 
    () => createAutomations(), //mutation fn
    'user-mutations' //query key
  );
  return { isPending, mutate }
};
