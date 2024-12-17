import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
    params: {slug: string}
}

function Layout({children, params} : Props) {
    //Query clients- using react query, optimistic UI, caching

    return (
        <div className='p-3'>
            <Sidebar slug={params.slug}/>
        </div>
    )
}

export default Layout