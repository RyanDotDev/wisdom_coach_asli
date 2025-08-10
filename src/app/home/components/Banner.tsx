import React from 'react';
import Image from 'next/image';
import { cagliostro } from '@/lib/utils/fonts';

const Banner = () => {
  return (
    <div className='w-full h-screen bg-[var(--main-creme)]'>
      <div className='h-full flex items-center justify-center'>
        <Image 
          src='/logos/wisdom_coach_asli_logo_transparent_background.webp'
          alt='Wisdom Coach Asli Logo (no-text)'
          width={400}
          height={400}
          className='absolute opacity-[0.2] blur-xs mt-[-20rem] h-auto'
        />
        <h1 className={`${cagliostro.className} text-6xl text-[var(--wisdom-red)] mt-[-15rem] hidden`}>Wisdom is here!</h1>

      </div>
    </div>
  )
}

export default Banner