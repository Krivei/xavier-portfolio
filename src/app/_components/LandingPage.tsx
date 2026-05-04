'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function LandingPage() {
  return (
    <div className=" w-screen h-screen bg-black flex flex-col justify-center items-center px-3 overflow-hidden">
      <div className="z-10 text-white flex flex-col text-center w-full overflow-hidden">
        <h1 className="text-5xl md:text-5xl font-bold mb-4 z-20 lg:translate-x-50">
          Xavier Julian Theodosius
        </h1>
        <p className="text-md md:text-xl lg:translate-x-50">Frontend Developer | UI/UX Designer</p>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none w-screen h-screen overflow-hidden">
        <Image
          src="/assets/landing.png"
          alt="Xavier Julian Theodosius"
          fill
          className="object-contain object-center md:object-cover md:object-bottom md:translate-x-40 scale-350 translate-x-70 lg:scale-95 lg:translate-x-10 lg:translate-y-15"
          priority
        />
        </div>
      <div className="z-1 flex flex-row justify-center lg:w-full lg:align-bottom p-3 gap-5 lg:translate-x-50 mt-2">
        <a href="https://github.com/Krivei" className='bg-white rounded-full w-10 h-10 flex items-center justify-center hover:shadow-[0_0_10px_white] duration-300'>
          <Icon className='text-black' icon="mdi:github" width="30"></Icon>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=xaviersipasulta@gmail.com" className='bg-white rounded-full w-10 h-10 flex items-center justify-center hover:shadow-[0_0_10px_white] duration-300'>
          <Icon className='text-black' icon="mdi:gmail" width="30" />
        </a>
        <a href="https://www.linkedin.com/in/xavier-theodosius/" className='bg-white rounded-full w-10 h-10 flex items-center justify-center hover:shadow-[0_0_10px_white] duration-300'>
          <Icon className='text-black' icon="mdi:linkedin" width="30" height="30"></Icon>
        </a>
      </div>
    </div>
  );
}