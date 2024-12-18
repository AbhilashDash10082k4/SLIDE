import { AutomationDuoToneBlue } from "@/icons/automation-duotone-blue"
import { ContactsDuoToneBlue } from "@/icons/contacts-duotone-blue"
import { HomeDuoToneBlue } from "@/icons/home-duotone-blue"
import { RocketDuoToneBlue } from "@/icons/rocket-duotone-blue"
import { SettingsDuoToneWhite } from "@/icons/setting-duotone-white"
import React from "react"

export const PAGE_BREAD_CRUMBS: string[] = [
    'contacts','automations','integrations','settings'
]

type Props =  {
    [page in string]: React.ReactNode
}

export const PAGE_ICONS: Props = {
    AUTOMATION: <AutomationDuoToneBlue/>,
    CONTACT: <ContactsDuoToneBlue/>,
    SETTINGS: <SettingsDuoToneWhite/>,
    INTEGRATIONS: <RocketDuoToneBlue/>,
    HOME: <HomeDuoToneBlue/>
}