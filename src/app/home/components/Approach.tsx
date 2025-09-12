import React from 'react';
import Image from 'next/image';

const Approach = () => {
  return (
    <div className='h-auto p-[2rem]'>
      <div className='text-center flex flex-col'>
        <h1 className='font-serif text-4xl text-[var(--wisdom-red)]'>
          My Approach
        </h1>
        <div className='flex lg:flex-row-reverse flex-col justify-center gap-[20px] mt-[4rem]'>
          <div className='lg:shrink-0 shrink'>
            <Image 
              src='/images/wisdom_coach_asli_child_learning.webp'
              alt='Wisdom Coach Asli'
              width={500}
              height={300}
              className='mx-auto'
            />
          </div>
          <div className='lg:text-left mx-auto text-md font-[200] text-center lg:w-[600px] w-auto'>
            <p>
              I believe every child already carries the wisdom they need to grow — my role is to help them uncover it.
              My coaching is <span className='font-bold'>child-led</span>, which means I meet each child where they are. Using storytelling, creativity, and connection, I gently guide them through self-discovery. Whether we’re exploring confidence, friendships, or big emotions, sessions are shaped by what the child brings — not just what adults expect.
              In a warm, safe space, children are encouraged to share, play, reflect, and stretch — all at their own pace.
            </p>
            <br></br>
            <p>Here&#39;s how I work:</p>
            <br></br>
            <ul className='list-disc lg:text-left text-center'>
              <li><span className='font-bold'>Mindset first</span> – We explore how thoughts shape feelings and choices, helping kids shift from “I can&#39;t” to “I can.”</li>
              <li><span className='font-bold'>Emotional awareness</span> – Children learn tools to name and manage big emotions with confidence.</li>
              <li><span className='font-bold'>Strengths-based</span> – I focus on what&#39;s already working, helping each child trust their inner strengths.</li>
              <li><span className='font-bold'>Parent partnership</span> – After each session, you&#39;ll receive a short Wisdom at Home summary so you can stay connected to your child&#39;s journey.</li>
            </ul>
            <br></br>
            <p>
              My coaching isn&#39;t about “fixing” kids — it&#39;s about empowering them to understand themselves, grow their confidence, and feel proud of who they are.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Approach