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
                Hi, I&#39;m Asli Maltsios — mum of two, seasoned expat, and certified Kids Life Coach. I currently 
                live in London, but my journey has taken me through Turkey, Jordan, Cyprus, and Greece.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                For over a decade, I led international teams and coached senior leaders in FTSE 100 companies, helping 
                them navigate challenges around mindset, confidence, and communication. While working with high-performing 
                executives, I noticed a clear pattern: many of their struggles traced back to beliefs formed in early childhood. 
                Even top achievers from prestigious universities often lacked the inner confidence, emotional resilience, and 
                mindset skills needed to lead fulfilling lives.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                After becoming a mum, I realised something powerful — all children come into this world with the WISDOM of 
                curiosity, creativity, and courage. But as life unfolds, challenges, setbacks, and pressures often bury that 
                wisdom. Their spark and eagerness to thrive can fade.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                That realisation led me to my true calling: empowering children with the right mindset tools to face life&#39;s 
                challenges while staying connected to their inner wisdom.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                I earned my first coaching certification with the <span className='font-bold'>International Coaching Federation (ICF)</span>, 
                and two years ago, I became a certified life coach for kids 
                through <span className='font-bold'>Adventures in Wisdom®.</span>
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                Today, I work with children and teens who may feel unsure of themselves — whether it&#39;s shyness, 
                low self-esteem, or social struggles. I also support kids navigating big life transitions, such as 
                moving abroad, starting a new school, or adjusting to a new sibling. These moments can shake a child&#39;s 
                confidence, and that&#39;s where mindset coaching makes all the difference.
              </p>
              <br></br>
              <p className='text-md font-[200]'>
                I love working one-on-one with children to build trust, insight, and confidence. I also design group workshops 
                for libraries, museums and children&#39;s centres and extracurricular activities for schools with fun, 
                story-based activities that help kids learn, grow, and feel supported.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About