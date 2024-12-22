import { PencilDuoToneBlack } from '@/icons/pencil-duotone-black'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activate-automation'

type Props = {
    id: string //comes from dynamic slug
}

const AutomationBreadCrumbs = ({id}: Props) => {
    //getting automations data, user mutation to update automation
  return (
    <div className='rounded-full w-full p-5 bg-[#18181B1A] flex items-center'>
        <div className="flex items-center gap-x-3 min-w-0">
            <p className="text-[#9B9CA0] truncate">Automations</p>
            <ChevronRight className='flex-shrink-0' color='#9B9CA0'/>
            <span className='flex gap-x-3 items-center min-w-0'>
                {/*to have an input so taht user can edit double clicking on this*/}
                {/*state to chk if user wants to edit- listening to double clicks, and rendering input field*/}
                <p className="text-[#9B9CA0] truncate">This is the automation title</p>
                <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-3'>
                    <PencilDuoToneBlack/>
                </span>
            </span>
        </div>
        <div className="flex gap-x-5 ml-auto">
            <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">All states are automatically saved
            </p>
            <div className="flex gap-x-5 flex-shrink-0">
                <p className="text-text-secondary text-sm truncate">Changes Saved</p>
                
            </div>
        </div>
        <ActivateAutomationButton/>
    </div>
  )
}

export default AutomationBreadCrumbs