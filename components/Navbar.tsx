"use client"

import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/netflix_logo.svg"
import { usePathname } from "next/navigation"
import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"

type linkProps = {
  name: string
  href: string
}

type NavbarProps = {
  avatar?: string | null
  username?: string | null
  email?: string | null
}

const links: linkProps[] = [
  { name: "主页", href: "/home" },
  { name: "剧集", href: "/home/shows" },
  { name: "电影", href: "/home/movies" },
  { name: "最近添加", href: "/home/recently" },
  { name: "我的列表", href: "/home/user/list" },
]

export default function Navbar({ avatar, username, email }: NavbarProps) {
  const pathName = usePathname()
  return (
    <div className='w-full max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex'>
      <div className='flex items-center'>
        <Link href='/home' className='w-32'>
          <Image src={Logo} alt='Netflix logo' priority />
        </Link>
        <ul className='md:flex gap-x-4 ml-14 hidden'>
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className='text-white font-semibold underline text-sm'>
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className='text-gray-300 font-normal text-sm'
                    href={link.href}>
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className='flex items-center gap-x-8'>
        <Search className='w-5 h-5 text-gray-300 cursor-pointer' />
        <Bell className='h-5 w-5 text-gray-300 cursor-pointer' />
        <UserNav avatar={avatar} username={username} email={email} />
      </div>
    </div>
  )
}
