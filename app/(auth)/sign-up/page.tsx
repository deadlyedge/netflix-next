import Link from "next/link"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import GithubSignInButton from "@/components/GithubSignInButton"
import GoogleSignInButton from "@/components/GoogleSignInButton"
import { authOptions } from "@/lib/auth"

export default async function SignUp() {
  const session = await getServerSession(authOptions)

  if (session) return redirect('/home')
  
  return (
    <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
      <form method="post" action='/api/auth/signin'>
        <h1 className='text-3xl font-semibold text-white'>注册</h1>
        <div className='space-y-4 mt-5'>
          <Input
            type='email'
            name='email'
            placeholder='Email'
            className='bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block'
          />
          <Button
            type='submit'
            variant='destructive'
            className='w-full bg-[#e50914]'>
            注册
          </Button>
        </div>
      </form>
      <div className='mt-2 text-sm text-gray-500'>
        已经有账号了吗？
        <Link href='/login' className='text-white hover:underline'>
          现在登录
        </Link>
      </div>
      <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  )
}
