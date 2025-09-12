import React, { useState, useEffect } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { useMobileMenu } from '@/lib/utils/popups/mobilemenu/useMobileMenu';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';

type NavItem = {
  id: number,
  title: string,
  href: string
};

type Props = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navTop: NavItem[] = [
  { id: 1, title: "Home", href: '/' },
  { id: 2, title: "Why Life Coaching?", href: 'service' },
  { id: 3, title: "About", href: 'about' },
  { id: 4, title: "FAQ's", href: 'faqs' }
];

const navBottom: NavItem[] = [
  { id: 5, title: 'Free Story', href: 'free-story' },
  { id: 6, title: 'Contact', href: 'contact' },
  { id: 7, title: 'Enquire Today', href: 'contact' },
]
const MobileNav = ({ isOpen, setIsOpen }: Props) => {
  const menuRef = useMobileMenu(isOpen);
  const pathname = usePathname();
  const router = useRouter();
  const [colourOnScroll, setColourOnScroll] = useState<boolean>(false);

  useEffect(() => {
      const changeColourOnScroll = () => {
        const scrollThresholds: Record<string, number> = {
          '/': 650,
          '/privacy': 1,
        };
        
        let threshold = 0;
        if (pathname && pathname?.startsWith('/privacy')) {
          threshold = 200
        } else if (pathname && pathname in scrollThresholds) {
          threshold = scrollThresholds[pathname];
        }
        setColourOnScroll(window.scrollY >= threshold)
      }
  
      changeColourOnScroll();
      window.addEventListener('scroll', changeColourOnScroll)
      return () => {
        window.removeEventListener('scroll', changeColourOnScroll)
      }
    }, [pathname]);

  const handleClick = (sectionId: string) => {
    setIsOpen(false);
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
    <div className={`relative flex justify-end lg:hidden w-full`}>
      <div className={`${colourOnScroll ? 'text-[var(--wisdom-red)]' : 'text-white'} absolute duration-300 ease-in top-[-1rem] z-[100]`}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={25} />
      </div>
      
      {/* DROPDOWN */}
      <div 
        ref={menuRef}
        className={`w-full relative mt-[2rem] duration-300 backdrop-blur-2xl ease-out
          ${isOpen ? 'grid opacity-100 pointer-events-auto' : 'hidden opacity-0 pointer-events-none'}
        `}
      >
        <div className="grid grid-cols-2 gap-2 mb-4 justify-center">
          {navTop.map((item) => (
            <button
              key={item.id} 
              onClick={() => 
              handleClick(item.href)} 
              className={`
                ${colourOnScroll ? 'text-black' : 'text-white'}
                bg-transparent cursor-pointer font-bold text-sm py-3 px-2 rounded hover:bg-gray-200 hover:text-black transition
              `}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 pb-[-2rem] lg:pb-[0rem] justify-center">
          {navBottom.map((item) => {
            const isCTA = item.title === "Enquire Today"
            return (
              <button 
                key={item.id} 
                onClick={() => handleClick(item.href)} 
                className={`py-3 px-2 text-sm font-bold rounded 
                  ${colourOnScroll ? 'text-black' : 'text-white'}
                  ${isCTA 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-transparent hover:bg-gray-200'
                }`}
              >
                {item.title}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MobileNav