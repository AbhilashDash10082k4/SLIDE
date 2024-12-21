import { InstagramDuoToneBlue } from "@/icons/instagram-duotone-blue";
import { SalesForceDuoToneBlue } from "@/icons/salesforce-duotone-blue";

type Props = {
    title: string,
    description: string,
    icon: React.ReactNode,
    strategy: 'INSTAGRAM' | 'CRM'
}
export const INTEGRATIONS_CARDS : Props[] = [
    //CAARD COMPONENTS TO CONNECT TO SERVICES- insta and crm
    {title: 'Connect Instagram',
     description: 'Connect instagram to automate DM and comment replies',
     icon: <InstagramDuoToneBlue/>,
     strategy: 'INSTAGRAM',
     //in production env, have a fn to connect to insta profiles
    },
    {title: 'Connect Salesforce',
    description: 'Connect crm tool to automate DM and comment replies',
    icon: <SalesForceDuoToneBlue/>,
    strategy: 'CRM',
    }
]