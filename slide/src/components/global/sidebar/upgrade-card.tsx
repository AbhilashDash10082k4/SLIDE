import React from 'react'
import PaymentButton from '../payment-button/payment-button'

type Props = {}

function UpgradeCard({}: Props) {
  return (
    <div className="bg-[#252525] p-3 rounded-2xl flex flex-col gap-y-3">
        <span className='text-sm'>
            Upgrade to {' '}
            <span className="bg-gradient-to-r
            from-[#CC3BD4]
            to-[#D064AC]
            font-bold
            bg-clip-text
            text-transparent">
                Smart AI
            </span>
        </span>
        <p className='font-light text-sm text-[#9B9CA0]'>
            Unlock all features using AI and more
        </p>
        {/*Subscription button*/}
        <PaymentButton/>
    </div>
  )
}

export default UpgradeCard