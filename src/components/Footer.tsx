import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <div className='bg-[var(--main-creme)] h-auto w-full p-[2rem]'>
      <div className='text-center flex lg:flex-row flex-col lg:justify-between justify-center'>
        <Image 
          src='/logos/wisdom_coach_asli_logo_with_text.webp'
          alt="Wisdom Coach Asli Logo"
          id=''
          width={300}
          height={300}
          className='relative top-[-0.6rem] mx-auto lg:mx-0'
        />
        <div>
          <Link href=''>
            <Instagram className='text-[var(--wisdom-red)] text-[2rem]' />
          </Link>
        </div>
        <div>
          <a
            href='/docs/legal/wisdom_coach_asli_privacy_policy.pdf'
            target='_blank'
            rel='noopener noreferrer'
          >
            Privacy Policy
          </a>
        </div>
        <div>
          <p className='text-[0.8rem]'>© 2025 Copyright. Wisdom Coach Asli. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer