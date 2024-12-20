//UI while Loading the dashboard page
// import Loader from '@/global/loader'
import Loader from '@/components/global/loader'
import React from 'react'

type Props = {}

function Loading(props: Props) {
  return (
    <div className="h-screen flex justify-center items-center">
        <Loader state>...Loading</Loader>
    </div>
)
}

export default Loading