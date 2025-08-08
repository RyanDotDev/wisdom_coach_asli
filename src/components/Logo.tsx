import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Link href='/'>
        <Image
          src='/logos/wisdom_coach_asli_logo.webp'
          alt='Wisdom Coach Asli Logo'
          width={200}
          height={100}
          style={{ height: 'auto' }}
        />
      </Link>
    </div>
  )
}

export default Logo