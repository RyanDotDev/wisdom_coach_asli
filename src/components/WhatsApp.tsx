import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const whatsappNumber = process.env.WHATSAPP_NUMBER;
const whatsappUrl = `https://wa.me/${whatsappNumber}`

const WhatsApp = () => {
  return (
    <div className='fixed bottom-[1rem] right-[1rem] z-[99]'>
      <button
        className='whatsapp-btn whatsapp-btn-hover transition-shadow duration-300 group bg-[var(--whatsapp-green)] p-[0.8rem] rounded-full
        text-white items-center overflow-hidden cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.45)] active:scale-95'
      >
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon style={{ fontSize: '2rem' }}/>
          <span 
            className='max-w-0 opacity-0 overflow-hidden group-hover:max-w-[150px] group-hover:opacity-100
            group-hover:translate-x-1 group-hover:mr-[0.5rem] transition-shadow duration-300 whitespace-nowrap hidden'
          >
            Contact Us
          </span>
        </a>
      </button>
    </div>
  )
}

export default WhatsApp