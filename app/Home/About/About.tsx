'use client'
import React from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';


const About = () => {
  return (
    <div id="about" className="min-h-screen  flex items-center ">
      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="text-white flex flex-col items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Hello,I am Pavithra</h1>
          <span className='flex justify-center lg:justify-start gap-2'>
          <h1 className="text-1xl sm:text-2xl md:text-3xl font-semibold text-white">I'm a</h1>
          <h1 className="text-1xl sm:text-2xl md:text-3xl font-semibold text-red-500">
      <Typewriter
        words={[
          'Front End Developer',
          'Back End Developer',
          'Mobile App Developer',
          'Web Application Developer',
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h1>
          </span>
          
          <p className="text-base sm:text-lg md:text-xl text-white text-opacity-60 mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem temporibus omnis id quasi rem deleniti! Maxime omnis ullam perferendis impedit.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8">
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 
                dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Get in touch
            </button>

            <div className="relative inline-flex group">
              <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#887373] via-[#df87d6] to-[#d3067d] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
              <a
                href="#"
                className="border border-amber-700 relative inline-flex items-center justify-center px-5 py-2.5 
                  text-sm md:text-lg font-bold text-white bg-gray-900 rounded-xl focus:outline-none 
                  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]">
            <Image
              src="/images/avatar.svg"
              alt="About"
              width={300}
              height={300}
              className="w-full h-full border border-gray-300 p-2 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
