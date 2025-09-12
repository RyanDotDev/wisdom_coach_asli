import React from 'react';
import Link from 'next/link';

const FirstSection = () => {
  return (
    <section>
      <p><strong>Last updated 09/09/2025</strong></p>
      <br></br>
      <div className='font-[200]'>
        <p >
          This privacy notice for <span className='font-bold'>ASLI MALTSIOS COACHING</span> doing business 
          as <span className='font-bold'>WISDOM COACH ASLI</span> &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, 
          describes how and why we might collect, store, use, and/or share &quot;process&quot; your information when 
          you use our services &quot;Services&quot;, such as when you:
        </p>
        <br></br>
        <ul className='list-disc ml-[1rem]'>
          <li>
            Visit our website 
            at <Link className='text-blue-600 underline underline-offset-1' href='www.wisdomcoachasli.com'>www.wisdomcoachasli.com</Link>, or 
            any website of ours that links to this privacy notice.
          </li>
          <li>
            Engage with us in other related ways ― including any sales, marketing, or events.
          </li>
        </ul>
        <br></br>
        <p>
          Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. 
          If you do not agree with our policies and practices, please do not use our Services. If you still have any 
          questions or concerns, please contact us 
          at <a href='mailto:hello@wisdomcoachasli.com' className='text-blue-600 underline underline-offset-1'>hello@wisdomcoachasli.com</a>.
        </p>
        <br></br>
        <p>
          This privacy policy was created by <Link className='text-blue-600 underline' href='https://termly.io/products/privacy-policy-generator/'>Termly&#39;s Privacy Policy Generator</Link>.
        </p>
        <br></br>
        <span className='font-bold'>SUMMARY OF KEY POINTS</span>
        <br></br>
        <p className='mt-[1rem]'><span className='font-bold'><i>
          This summary provides key points from our privacy notice, but you can find out more details 
          about any of these topics by clicking the link following each key point or by using our table 
          of contents below to find the section you are looking for.
        </i></span></p>
        <br></br>
        <p>
          <span className='font-bold'>What personal information do we process?</span> When you visit, use, 
          or navigate our Services, we may process personal information depending on how you interact with 
          us and the Services, the choices you make, and the products and features you use. Learn more about 
          personal information you disclose to us.
        </p>
        <br></br>
        <p>
          <span className='font-bold'>Do we process any sensitive personal information?</span> We do not process 
          sensitive personal information.
        </p>
      </div>
    </section>
  )
}

export default FirstSection