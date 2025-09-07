"use client"
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { lato } from '@/lib/utils/fonts';
import Link from 'next/link';
import Logo from './Logo';
import BookingButton from './BookingButton';

interface NavItems {
  id: number,
  title: string,
  href: string,
};

// Navigation function
const navigation: NavItems[] = [
  { id: 101, title: "Home", href: "/" },
  { id: 102, title: "Why Life Coaching?", href: "/service" },
  { id: 103, title: "About", href: "/about" },
  { id: 104, title: "FAQ's", href: "/faqs" },
  { id: 105, title: "Free Story", href: "/free-story" },
  { id: 106, title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname(); // to locate url 
  const [colourOnScroll, setColourOnScroll] = useState<boolean>(false);

  // Change appea on scroll
  useEffect(() => {
    const changeColourOnScroll = () => {
      const scrollThresholds: Record<string, number> = {
        '/': 650,
        '/privacy': 1
      };

      let threshold = 0;
      if (pathname && pathname?.startsWith('/privacy')) {
        threshold = 1;
      } else if (pathname && pathname in scrollThresholds) {
        threshold = scrollThresholds[pathname];
      }
      setColourOnScroll(window.scrollY >= threshold)
    }

    changeColourOnScroll();
    window.addEventListener('scroll', changeColourOnScroll);

    return () => {
      window.removeEventListener('scroll', changeColourOnScroll);
    }
  }, [pathname]);

  return (
    <div className={`${colourOnScroll ? 'bg-transparent backdrop-blur-3xl shadow-md' : 'bg-transparent'} w-full p-[1.1rem] fixed z-[99] duration-300`}>
      <div className='flex items-left justify-between relative top-[0.5rem]'>
        <Logo />
        <div className='hidden flex-1 justify-end lg:flex'>
          <ul className={`flex gap-[40px] mr-[2rem] ${lato.className}`}>
            {navigation.map((item) => {
              const isActive = pathname === item?.href;

              return (
                <Link 
                  key={item.id} 
                  href={item?.href}
                  className={` 
                    relative font-[300] text-[1rem] overflow-hidden group duration-300
                    ${colourOnScroll ? "text-black hover:text-[var(--wisdom-red)]" : "text-white hover:text-blue-300"}
                  `}
                >
                  <li className={`${isActive ? (colourOnScroll ? "text-[var(--wisdom-red)]" : "text-blue-300") : ""}`}>
                    {item?.title}
                  </li>
                </Link>      
              ) 
            })}
          </ul>
          <BookingButton />
        </div>
      </div>
    </div>
  )
};

export default Navbar;