import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = async (props: Props) => {
    //Server acn to onboard users, if the user exists then direct to respective dashobard page, if user not found- then redirect to sign-in/sign-up page
  

  return redirect('/sign-in')
}

export default Page