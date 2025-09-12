"use client"
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { lato } from '@/lib/utils/fonts';
import Logo from './Logo';
import BookingButton from './BookingButton';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import MobileNav from './MobileNav';

interface NavItems {
  id: number,
  title: string,
  href: string,
};

// Navigation function
const navigation: NavItems[] = [
  { id: 101, title: "Home", href: "/" },
  { id: 102, title: "Why Life Coaching?", href: "service" },
  { id: 103, title: "My Approach", href: "approach" },
  { id: 104, title: "About", href: "about" },
  { id: 105, title: "FAQ's", href: "faqs" },
  { id: 106, title: "Free Story", href: "free-story" },
  { id: 107, title: "Contact", href: "contact" },
];

const Navbar = () => {
  const pathname = usePathname(); // to locate url 
  const router =  useRouter();
  const [colourOnScroll, setColourOnScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  gsap.registerPlugin(ScrollToPlugin);

  // Change appea on scroll
  useEffect(() => {
    const changeColourOnScroll = () => {
      const scrollThresholds: Record<string, number> = {
        '/': 650,
        '/privacy': 200
      };

      let threshold = 0;
      if (pathname && pathname?.startsWith('/privacy')) {
        threshold = 200;
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

  const handleClick = (sectionId: string) => {
    if (sectionId === "/") {
      // This will always result in going to the homepage/top of homepage
      if (pathname === "/") {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: 0,
            offsetY: 0
          },
          ease: "power2.out"
        });
      } else {
        router.push("/")
      }
      return;
    }

    if (pathname === '/') {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: `#${sectionId}`,
          offsetY: 80,
        },
        ease: 'power2.out',
      });
    } else {
      router.push(`/#${sectionId}`)
    }
  };

  return (
    <div className={`${colourOnScroll ? 'bg-transparent backdrop-blur-3xl shadow-md' : 'bg-transparent'} 
      w-full p-[1.1rem] lg:pb-[0rem] pb-[3.9rem] h-auto lg:h-[80px] fixed z-[99]`}>
      <div className='flex items-left justify-between relative top-[0.5rem]'>
        <Logo />
        <div className='hidden flex-1 justify-end lg:flex'>
          <ul className={`flex gap-[40px] mt-[-1.2rem] mr-[2rem] ${lato.className}`}>
            {navigation.map((item) => {
              const isActive = pathname === item?.href;

              return (
                <button
                  key={item.id} 
                  onClick={() => handleClick(item?.href)}
                  className={` 
                    cursor-pointer relative font-[300] text-[1rem] overflow-hidden group duration-300
                    ${colourOnScroll ? "text-black hover:text-[var(--wisdom-red)]" : "text-white hover:text-blue-300"}
                  `}
                >
                  <li className={`${isActive ? (colourOnScroll ? "text-[var(--wisdom-red)]" : "text-blue-300") : ""}`}>
                    {item?.title}
                  </li>
                </button>      
              ) 
            })}
          </ul>
          <BookingButton />
        </div>
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  )
};

export default Navbar;