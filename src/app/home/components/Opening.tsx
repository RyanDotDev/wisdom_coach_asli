import React from 'react';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import { HandFist } from 'lucide-react';
import LanIcon from '@mui/icons-material/Lan';

const Opening = () => {
  return (
    <div className='h-auto w-full text-center p-[2rem] pt-[5rem]'>
      <h1 className={`font-serif text-4xl text-[var(--wisdom-red)]`}>How It Works</h1>
      <div className='grid justify-items-center justify-around mt-[4rem]
        gap-y-7 gap-x-11 lg:grid-cols-[repeat(auto-fill,_400px)] grid-cols-[repeat(auto-fill, auto)]'
      >
        <div>
          <div className='border border-[var(--wisdom-red)] p-[1rem] rounded-[50%] w-[60px] h-[60px] mx-auto'
          >
            <FamilyRestroomIcon style={{ color: 'var(--wisdom-red)' }} />
          </div>
          <div className='text-center'>
            <h3 className={`font-serif text-[var(--wisdom-red)] text-[1.5rem] mt-[1rem]`}>The Wisdom System</h3>
            <p className='text-md mt-[1rem] font-[200] lg:w-[380px] w-auto'>
              My coaching programs for children are based on the WISDOM System for Coaching Children from Adventures in Wisdom.
              This system is a story-based coaching model for children, with fun and engaging programs. The system provides tools 
              and resources to empower children to be leaders of their own lives by taking full responsibility for their journey. 
              This, combined with the coaching tools I used during my extensive experience in executive coaching in FTSE 100 companies, 
              delivers a unique approach that builds strong mindset skills early on — giving children the confidence, resilience, and 
              self-belief they need to thrive at school and beyond.
            </p>
          </div>
        </div>

        <div>
          <div className='border border-[var(--wisdom-red)] p-[1rem] rounded-[50%] w-[60px] h-[60px] mx-auto'>
            <HandFist style={{ color: 'var(--wisdom-red)' }} />
          </div>
          <h3 className={`font-serif text-[var(--wisdom-red)] text-[1.5rem] mt-[1rem]`}>Life Coaching for Kids and Teens</h3>
          <p className='text-md mt-[1rem] font-[200] lg:w-[380px] w-auto'>
            Life coaching for kids and teens is a supportive and empowering process that helps children navigate the challenges of growing up while developing essential life skills.
            Because children&#39;s brains are still developing, coaching them requires a unique approach — one that blends guidance, teaching, and coaching in a way that speaks to their stage of growth.
            As a certified life coach for kids, I create a safe, non-judgmental space where children can explore their thoughts and feelings, build a positive mindset, and discover their inner strengths.

            By investing in coaching for your child, you are giving them the tools they need to succeed in life and helping them become the best version of themselves.
          </p>
        </div>

        <div>
          <div className='border border-[var(--wisdom-red)] p-[1rem] rounded-[50%] w-[60px] h-[60px] mx-auto'>
            <LanIcon className='text-[var(--wisdom-red)]' />
          </div>
          <h3 className={`font-serif text-[var(--wisdom-red)] text-[1.5rem] mt-[1rem]`}>Services</h3>
          <p className='text-md mt-[1rem] font-[200] lg:w-[380px] w-auto'>
            <span className='font-bold'>One-on-one sessions</span> are based on The Adventures In Wisdom program exclusively tailored 
            for children and teens. It includes 10 to 12 weekly 60-minute sessions. <span className='font-bold'>Workshops:</span>I design interactive, 
            story-based and truly transformative workshops for schools, libraries and museums. <span className='font-bold'>The Wisdom Club</span> (extra curricular activities for schools); My 
            after school program is based on a proven system called WISDOM Coaching System ™. Through coaching stories, engaging questions 
            and activities, I help kids develop powerful mindset skills for school and life. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Opening;