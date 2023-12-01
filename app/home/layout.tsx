import { getServerSession } from "next-auth"
import { ReactNode } from "react"
import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import Navbar from "@/components/Navbar"

export default async function HomeLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return redirect("/login")
  }

  return (
    <>
      <Navbar
        avatar={session?.user?.image}
        username={session?.user?.name}
        email={session?.user?.email}
      />
      <main className='w-full max-w-7xl mx-auto sm:px-6 lg:px-8'>
        {children}
      </main>
    </>
  )
}
