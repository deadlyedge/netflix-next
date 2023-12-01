"use client"

import Image from "next/image"
import GoogleIcon from "@/public/google.svg"
import { signIn } from "next-auth/react"

import { Button } from "@/components/ui/button"

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("google")} variant='outline' size='icon'>
      <Image src={GoogleIcon} alt='Google icon' className='w-6 h-6' />
    </Button>
  )
}
