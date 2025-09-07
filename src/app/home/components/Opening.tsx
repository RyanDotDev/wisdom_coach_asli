import React from 'react';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Image from 'next/image';
import { HandFist } from 'lucide-react';

const Opening = () => {
  return (
    <div className='h-auto w-full text-center p-[2rem] pt-[5rem]'>
      <h1 className={`font-serif text-4xl text-[var(--wisdom-red)]`}>Core Values of Childhood</h1>
      <div className='flex justify-around mt-[6rem]'>
        <div>
          <div className='border border-[var(--wisdom-red)] p-[1rem] rounded-[50%] w-[60px] h-[60px] mx-auto'
          >
            <FamilyRestroomIcon style={{ color: 'var(--wisdom-red)' }} />
          </div>
          <div className='text-center'>
            <h3 className={`font-serif text-[var(--wisdom-red)] text-[1.5rem] mt-[1rem]`}>Navigating childhood</h3>
            <p className='text-md mt-[1rem] font-[200] w-[380px]'>
              Childhood is the most precious time that we ever experience in our lives and it is imperative that
              that children are nurtured and guided through those times. With most internal struggles dating back 
              to early childhood of some individuals, I make sure to coach children and help give them the courage
              that is needed to go through life with whatever challenge or obstacle that may arise early on in their
              lives and make sure they carry on through life with confidence.
            </p>
          </div>
        </div>

        <div>
          <div className='border border-[var(--wisdom-red)] p-[1rem] rounded-[50%] w-[60px] h-[60px] mx-auto'>
            <HandFist style={{ color: 'var(--wisdom-red)' }} />
          </div>
          <h3 className={`font-serif text-[var(--wisdom-red)] text-[1.5rem] mt-[1rem]`}>Inner strength and power</h3>
          <p className='text-md mt-[1rem] font-[200] w-[380px]'>
            With most internal struggles dating back to early childhood of some individuals, I make it my mission
            to help bring out the inner strength in children as early as possible, whether that be in their mind, 
            imagination or their self-confidence. Children are extremely bright and imagination is almost like
            their truest and most precious strength, my job is to help maintain that strength.
          </p>
        </div>

        <div>
          <div className='border border-[var(--wisdom-red)] p-[1rem] rounded-[50%] w-[60px] h-[60px] mx-auto'>
            <Image
              src='/assets/broken_wall.svg'
              alt='Broken Wall Icon'
              width={50}
              height={50}
            />
          </div>
          <h3 className={`font-serif text-[var(--wisdom-red)] text-[1.5rem] mt-[1rem]`}>Breaking barriers</h3>
          <p className='text-md mt-[1rem] font-[200] w-[380px]'>
            Just like adulthood, childhood can have their mental barriers as well. The difference is that
            when a child has mental barrier, they often lack the wisdom to express that barrier but ironnically
            have the will to break it, even more so than adults sometimes. If a child can channel that inner power
            within themselves in combination with some guidance, any barrier in their way becomes breakable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Opening;