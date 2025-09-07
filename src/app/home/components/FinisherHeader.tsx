"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import { lato } from '@/lib/utils/fonts';

interface FinisherHeaderOptions {
  position: "fixed" | "absolute";
  count: number;
  size: { min: number; max: number; pulse: number };
  speed: { x: { min: number; max: number; }, y: { min: number, max: number } };
  colors: {
    background: string;
    particles: string[];
  };
  blending: string;
  opacity: { center: number; edge: number };
  skew: number;
  shapes: string[];
}

interface FinisherHeaderConstructor {
  new (options: FinisherHeaderOptions): void;
  default?: FinisherHeaderConstructor
}

declare global {
  interface Window {
    FinisherHeader?: FinisherHeaderConstructor;
  }
}

const FinisherHeader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/background/finisher-header.es5.min.js"; // Always ensure this file is in the '/public' directory
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      setTimeout(() => {
        if (window.FinisherHeader) {
          const Finisher = window.FinisherHeader?.default || window.FinisherHeader;
          new Finisher({
            position: "fixed",
            count: 12,
            size: { min: 1300, max: 1500, pulse: 0 },
            speed: { x: { min: 0.6, max: 3 }, y: { min: 0.6, max: 3 } },
            colors: {
              background: "#FEF9EE",
              particles: ["#0000b2", "#005cb2", "#0000b2", "#005cb2"],
            },
            blending: "lighten",
            opacity: { center: 0.6, edge: 0 },
            skew: 0,
            shapes: ["c"],
          });
        }
      }, 100);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script)
    }
  }, []);

  return (
    <div className='finisher-header w-full h-screen'>
      <Image 
        src='/images/wisdom_coach_asli_children_playing.webp'
        alt='Wisdom Coach Asli Background'
        width={1400}
        height={700}
        className='object-cover absolute w-full h-full opacity-20'
      />
      <div className='h-full flex items-center justify-center'>
        <div className='text-center w-[800px]'>
    
          {/* HEADING TEXT */}
          <h1 className={`font-serif text-[2.5rem] text-white`}>
            Helping Children Grow Confident, Resilient and Ready for Life
          </h1>
    
          <div className='flex flex-col'>
            {/* CERTIFIED COACH BADGE/IMAGE */}
            <div className='flex justify-between m-auto items-center text-center'>
              <Image 
                src='/images/wisdom_coach_certified_badge.webp'
                alt='Wisdom Coach Badge'
                width={200}
                height={200}
                className='mx-auto h-auto'
              />
              <h2 className={`${lato.className} text-[1rem] text-left text-white`}>
                Certified WISDOM® Coach & ICF-accredited coach.<br/>
                Specialising in mindset coaching that empowers children to believe in themselves, handle
                challenges, and shine in their own unique way.
              </h2>
            </div>
            <div className='w-auto mx-auto'>
              {/* SUB HEADING */}
              <div className='mt-[1rem]'>
                <h2 className={`${lato.className} text-[1rem] text-center text-white`}>
                  With over a decade of coaching experience, I help children aged 6-12 develop inner strength,
                  confidence and the mindset skills they need to thrive, NOW and in the FUTURE.
                </h2>
                <br></br>
              </div>
    
            </div>
          </div>
    
          {/* CALL TO ACTION TEXT */}
          <h3 className={`${lato.className} text-[1.5rem] text-white`}>
            Let&#39;s give your child the tools for life.
          </h3>
          {/* CALL TO ACTION BUTTON */}
          <button className='relative mt-[1rem] cursor-pointer border-2 border-white text-white
            p-4 rounded-2xl z-50 hover:bg-white hover:text-blue-400 duration-300'
          >
            <span className={`${lato.className}`}>Enquire today</span>
          </button>
              
        </div>
      </div>
    </div>
  )
}

export default FinisherHeader;