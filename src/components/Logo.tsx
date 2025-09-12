import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  const [logoOnScroll, setLogoOnScroll] = useState<boolean>(false);
  const pathname = usePathname();

  const isMobile = () => window.innerWidth <= 768;

  const handleLogoClick = (e: any) => { // eslint-disable-line @typescript-eslint/no-explicit-any
    if (pathname === '/' && isMobile()) {
      e.preventDefault();
      window.location.reload();
    }
  };

  useEffect(() => {
    const changeLogoOnScroll = () => {
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
      setLogoOnScroll(window.scrollY >= threshold)
    }

    changeLogoOnScroll();
    window.addEventListener('scroll', changeLogoOnScroll)
    return () => {
      window.removeEventListener('scroll', changeLogoOnScroll)
    }
  }, [pathname]);
  
  return (
    <div className='absolute top-[-0.3rem] flex-shrink-0'>
      <Link href='/' onClick={handleLogoClick}>
      {logoOnScroll ?
        <Image
          src='/logos/wisdom_coach_asli_logo_with_text.webp'
          alt='Wisdom Coach Asli Logo'
          width={200}
          height={100}
          style={{ height: 'auto' }}
        />
        :
        <Image
          src='/logos/wisdom_coach_asli_logo_with_text_white.webp'
          alt='Wisdom Coach Asli Logo'
          width={200}
          height={100}
          style={{ height: 'auto' }}
        />
      }
      </Link>
    </div>
  )
}

export default Logo;