import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { faqs } from '@/lib/helpers/faqs/faqs';

const FAQS = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;

      if (openIndex === i) {
        // expand
        gsap.to(ref, {
          height: 'auto',
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        // collapse
        gsap.to(ref, {
          height: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
  }, [openIndex])
  return (
    <div className='max-w-4xl mx-auto h-auto p-[2rem]'>
      <div className='text-center'>
        <h1 className='font-serif text-4xl text-[var(--wisdom-red)]'>Frequently Asked Questions</h1>

        <div className='mt-[2rem] space-y-4 text-left'>
          {faqs.map((faq, i) => (
            <div key={i} className='border-b border-gray-300 pb-2'>
              <button
                className='w-full cursor-pointer flex justify-between items-center py-3 text-left text-lg font-medium'
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.question}
                <span>{openIndex === i ? "-" : "+"}</span>
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[i] = el
                }}
                className='overflow-hidden h-0 text-left text-md font-[200]'
              >
                {faq.answer}
              </div>
            </div>
          ))}
          <p className='text-md font-[200]'>These are skills that most programs geared for kids do not cover.</p>
        </div>
      </div>
    </div>
  )
}

export default FAQS;