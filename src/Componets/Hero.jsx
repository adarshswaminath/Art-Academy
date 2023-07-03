import React from 'react';
import image from "./Images/hero.jpg";

function Hero() {
  return (
    <div
      className='relative flex items-center justify-center h-screen'
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#ffc38d] via-[#fea968] to-transparent opacity-80'></div>
      <div className='z-10 text-white p-3'>
        <h3 className='text-xl lg:text-2xl ml-2'>Overview</h3>
        <h1 className='text-4xl lg:text-6xl ml-2 font-semibold'>Art Acedemics</h1>
        <p className='p-3'>
            Exercitation eiusmod minim consectetur laborum esse labore nulla anim magna amet.<br/>
            Exercitation eiusmod minim consectetur laborum esse labore nulla anim magna amet.
        </p>
      </div>
    </div>
  );
}

export default Hero;
