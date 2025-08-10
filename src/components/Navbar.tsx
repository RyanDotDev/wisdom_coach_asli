"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { cagliostro } from '@/lib/utils/fonts';
import Link from 'next/link';
import Logo from './Logo';

interface NavItems {
  id: number,
  title: string,
  href: string,
}

// Navigation function
const navigation: NavItems[] = [
  { id: 101, title: 'Home', href: '/' },
  { id: 102, title: 'Why Life Coaching?', href: '/service' },
  { id: 103, title: 'About', href: '/about' },
  { id: 104, title: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname(); // to locate url 

  return (
    <div className='w-full p-[1rem] bg-[var(--main-creme)]'>
      <div className='flex items-left justify-between p-2 relative'>
        <Logo />
        <ul className={`flex justify-end gap-[40px] ${cagliostro.className}`}>
          {navigation.map((item) => (
            <Link 
              key={item.id} 
              href={item?.href}
              className='relative text-black font-[300] text-[1.1rem] hover:text-[var(--wisdom-red)] duration-300 overflow-hidden group'
            >
              <li className={`${item.href === pathname && "text-[var(--wisdom-red)]"}`}>
                {item?.title}
              </li>
            </Link>  
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar