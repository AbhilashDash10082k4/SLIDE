import { onBoardUser } from '@/actions/user'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    //Server acn to onboard users, if the user exists then direct to respective dashobard page, if user not found- then redirect to sign-in/sign-up page
  const user = await onBoardUser()
  if (user.status === 200 || user.status === 201) {
    return redirect(`dashboard/${user.data?.firstname}${user.data?.lastname}`)
  }

  return redirect('/sign-in')
}

export default Page