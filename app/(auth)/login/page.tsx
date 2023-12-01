import Link from "next/link"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import GithubSignInButton from "@/components/GithubSignInButton"
import GoogleSignInButton from "@/components/GoogleSignInButton"
import { authOptions } from "@/utils/auth"

export default async function Login() {
  const session = await getServerSession(authOptions)

  if (session) return redirect("/home")

  return (
    <div className='mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14'>
      <form>
        <h1 className='text-3xl font-semibold text-white'>登录</h1>
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
            登录
          </Button>
        </div>
      </form>
      <div className='mt-2 text-sm text-gray-500'>
        还没有账号吗？
        <Link href='/sign-up' className='text-white hover:underline'>
          现在注册
        </Link>
      </div>
      <div className='flex w-full justify-center items-center gap-x-3 mt-6'>
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  )
}
