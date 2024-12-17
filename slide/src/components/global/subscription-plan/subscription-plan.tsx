import React from 'react'

type Props = {
    children: React.ReactNode,
    type: 'FREE' | 'PRO'
}

function SubscriptionPlan({children, type}: Props) {
    //showing the user subscription plan in the sidebar, data of user is prefetched in another component and this is used here 
 
    return (
        children
    )
}

export default SubscriptionPlan