import React from 'react';
import Image from 'next/image';

const Service = () => {
  return (
    <div className='h-auto w-full text-center p-[2rem]'>
      <div className='mt-[2rem]'>
        <h1 className={`font-serif text-4xl text-[var(--wisdom-red)]`}>
          Why Life Coaching?
        </h1>
        <div className='lg:flex-row flex flex-col justify-around gap-[10px] mt-[4rem]'>
          <Image 
            src='/images/wisdom_coach_asli_children_learning.webp'
            alt="Children Playing"
            width={400}
            height={600}
            className='mx-auto'
          />
          <div className='lg:text-left mx-auto text-md font-[200] text-center lg:w-[600px] w-auto'>
            <p>
              Childhood should be the best and happiest times of our lives but it can also come with its challenges.
              Most children do not have the tools to handle the inevitable such as life tansitions and disappointment.
              Life Coaching gives children the right <span className='font-bold'>mindset</span> tools to handle them. As a Wisdom Coach I help kids learn 
              how to identify and shift limiting beliefs that hold them back in life and proactively create supporting 
              beliefs to believe in themselves, own who they are, and go for it in life.
            </p>
            <br></br>
            <p>
              WISDOM coaches like myself help children develop powerful mindset skills using coaching stories, engaging
              questions, activities/art projects and proven <span className='font-bold'>STORY</span> coaching process. With stories, children can see mindset
              skills in action. This allows them to connect to their own thoughts and feelings so that they can apply the 
              skills to their own lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;