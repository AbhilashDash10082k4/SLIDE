import React from 'react'
import PaymentCard from './paymentcard'

type Props = {}

export default function Billing({}: Props) {
  return (
    <div className='flex lg:flex-orw flex-row gap-5w-full lg:w-10/12 xl:w-8/12 container'>
        <PaymentCard/>
    </div>
  )
}