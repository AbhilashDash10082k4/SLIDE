import Navbar from '@/components/global/navbar/navbar'
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
            <div className="lg:ml-[250px]
            lg:pl-10
            lg:py-5
            flex
            flex-col
            overflow-auto">
                <Navbar slug={params.slug}/>
            </div>
        </div>
    )
}

export default Layout