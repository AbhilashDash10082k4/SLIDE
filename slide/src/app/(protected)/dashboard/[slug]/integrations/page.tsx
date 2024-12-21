import { INTEGRATIONS_CARDS } from '@/constants/integrations'
import React from 'react'
import IntegrationCard from './_components/integrationcard'

type Props = {}

function Page({}: Props) {
  return (
    <div className='flex justify-center'>
        <div className="flex flex-col w-full lg:8/12 gap-y-5">
        {/*IntegrationCard will never be needed anywhere except in this folder */}
        {INTEGRATIONS_CARDS.map((Card, key) => (
          <IntegrationCard
          key={key}
          {...Card}
          />
        ))}
        </div>
    </div>
  )
}

export default Page