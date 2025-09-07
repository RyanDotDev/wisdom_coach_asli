import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { lato } from '@/lib/utils/fonts';

const BookingButton = () => {
  const [buttonOnScroll, setButtonOnScroll] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const changeButtonOnScroll = () => {
      const scrollThresholds: Record<string, number> = {
        '/': 650,
        '/privacy': 1,
      };

      let threshold = 0;
      if (pathname && pathname?.startsWith('/privacy')) {
        threshold = 1
      } else if (pathname && pathname in scrollThresholds) {
        threshold = scrollThresholds[pathname]
      }
      setButtonOnScroll(window.scrollY >= threshold)
    };

    changeButtonOnScroll();
    window.addEventListener('scroll', changeButtonOnScroll);
    return () => {
      window.removeEventListener('scroll', changeButtonOnScroll);
    }

  }, [pathname]);

  return (
    <div>
      <button 
        className={`
          ${buttonOnScroll 
            ? 'border-[var(--wisdom-red)] text-[var(--wisdom-red)] hover:text-white hover:bg-[var(--wisdom-red)]' 
            : 'border-white text-white hover:text-blue-400 hover:bg-white'
          } 
          relative cursor-pointer border-2 p-2 pr-3 pl-3 text-[0.9rem] top-[-0.6rem] 
          rounded-2xl z-50 duration-300
        `} 
      >
        <span className={`${lato.className}`}>Enquire today</span>
      </button>
    </div>
  )
}

export default BookingButton;