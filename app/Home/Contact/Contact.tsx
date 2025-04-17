import React from 'react'
import { ImInstagram, ImLinkedin } from 'react-icons/im'
import Heading from '../Helper/Heading'

const Contact = () => {
  return (
    <div id="contact" className='flex flex-col items-center justify-center mx-auto text-center bg-[#191919] pt-14 gap-6 pb-5 px-4'>
      <Heading heading='Get In Touch'/>
      

      <p className='text-sm md:text-xl  sm:w-[650px] text-[#CACACA] text-pretty font-sans'>
       {"Ready to bring your ideas to life? Let's collaborate! Whether you're a startup, established company, or individual with a vision, I'm here to help. From concept to execution, let's create something amazing together."} 
      </p>

      <a className="text-base font-semibold underline underline-offset-4 text-[#CACACA]" href="mailto:pavitrapavi1803@gmail.com">
        pavitrapavi1803@gmail.com
      </a>

      <a className="text-base font-semibold underline underline-offset-4 text-[#CACACA]" href="tel:+916382724389">
        +91 6382724389
      </a>

      <div className="flex items-center gap-4 mt-2">
        <a href="https://www.linkedin.com/in/pavitrapavi" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#CACACA] transition-colors">
          <ImLinkedin />
        </a>
        <a href="mailto:thoufiqthedesigner@gmail.com" className="text-white text-2xl hover:text-[#CACACA] transition-colors">
          <ImInstagram />
        </a>
      </div>

      <span className="text-sm text-[#818181] mt-5 flex flex-col sm:flex-row items-center gap-1">
        <p className="font-light">© Designed By</p>
        <p className="font-semibold">Pavithra M</p>
      </span>
    </div>
  )
}

export default Contact
