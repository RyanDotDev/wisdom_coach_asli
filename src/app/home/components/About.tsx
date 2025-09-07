import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='h-auto p-[2rem]'>
      <div className='text-center flex flex-col'>
        <h1 className='font-serif text-4xl text-[var(--wisdom-red)]'>About Me</h1>
        <div className='lg:flex-row-reverse flex flex-col w-full justify-around items-center gap-8 mt-8'>
          <div>
            <Image 
              src='/images/wisdom_coach_asli.webp'
              alt='Profile Picture'
              width={300}
              height={300}
            />
          </div>
          <div className='w-auto lg:text-left text-center'>
            <h2 className='font-serif text-4xl text-[var(--wisdom-red)]'>I am Asli</h2>
            <div className='lg:w-[680px] lg:text-left mx-auto w-auto text-center'>
              <p className='text-md mt-[1rem] font-[200]'>
                Hi, I&#39;m <span className='font-bold'>Asli Maltsios</span>, mum of two, based in Southeast London and a 
                certified <span className='font-bold'>Kid&#39;s Life Coach.</span>
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                For over a decade, I coached senior leaders in FTSE 100 companies, helping them navigate challenge
                in confidence, communication, and mindest. But after becoming a mum, I discovered my true calling:
                empowering children to build those same mindset tools before adulthood.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                Working with high-performing executives, I saw a clear pattern - many of their struggles could
                be traced back to beliefs formed in early childhood. Even top achievers from prestigious universities
                often lacked the inner confidence, emotional resilience, and mindset skills needed to lead a truly
                fulfilling life. That realisation change everything for me.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                I became a certified <span className='font-bold'>WISDOM Coach™</span> through the Adventures 
                in Wisdom® program, and I&#39;m also an <span className='font-bold'>ICF-trained coach</span>.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                I now work with children aged 6 - 10, especially those who feel a little unsure of themselves, whether
                it&#39;s shyness, low self-esteem, or social challenges. I also support children navigating big life
                changes like moving house, switching schools, or welcoming a new sibling. These transitions often
                shake a child&#39;s confidence, and that&#39;s where mindset coaching can make all the difference.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                I love working one-on-one with children to build trust, insight, and confindence. I also design
                small-group workshops with fun, story-based activities that help kids learn while feeling safe and
                supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About