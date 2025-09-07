import { Cagliostro } from 'next/font/google';
import { Lato } from 'next/font/google';

export const cagliostro = Cagliostro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cagliostro'
});

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato'
})