"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from './Logo';

interface NavItems {
  id: number,
  title: string,
  href: string,
}

const navigation: NavItems[] = [
  { id: 101, title: 'Home', href: '/' },
  { id: 102, title: 'About', href: '/about' },
  { id: 103, title: 'Service', href: '/service' },
  { id: 104, title: 'Certification', href: '/certification' },
  { id: 105, title: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className='w-full p-[1rem] bg-[var(--main-beige)]'>
      <div className='flex items-left justify-between p-2 relative'>
        <Logo />
        <ul className='flex justify-end gap-[40px]'>
          {navigation.map((item) => (
            <Link 
              key={item.id} 
              href={item?.href}
              className='relative text-black font-[200] text-[1.2rem] hover:text-[var(--main-crimson)] duration-300 overflow-hidden group'
            >
              <li className={`${item.href === pathname && "text-[var(--main-crimson)]"}`}>
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