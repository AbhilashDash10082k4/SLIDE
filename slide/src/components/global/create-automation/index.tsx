'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../loader'
import { AutomationDuoToneWhite } from '@/icons/automation-duo-tone-white'
import { useCreateAutomation } from '@/hooks/useCreateAutomation'
import { v4 } from 'uuid'

type Props = {}

export const CreateAutomation = ({}: Props) => {
    //creating automation in db using mutate to optimistic ui
    const {isPending, mutate} = useCreateAutomation()

  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-[#3352CC] font-medium to-[#1C2D70]'>
        <Loader state={isPending}>
           <AutomationDuoToneWhite/>
           <p className="lg:inline hidden">Create an automation</p>
        </Loader>
    </Button>
  )
}
