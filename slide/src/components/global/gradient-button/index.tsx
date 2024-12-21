import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode,
    href?: string,
    type: 'BUTTON'|'LINK'
    className?: string
}

const GradientButton = ({children, type, className,href}: Props) => {
    //storing style in a var
    const gradients = 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-[2px]'

    switch (type) {
        case 'BUTTON':
            return <div className={gradients}>
                <Button className={cn(className, 'rounded-xl')}>{children}</Button>
            </div>
        case 'LINK':
            return <div className={gradients}>
                <Link className={cn(className, 'rounded-xl')}
                href={href!}>{children}</Link>
            </div>
        default: return null
    }
}

export default GradientButton