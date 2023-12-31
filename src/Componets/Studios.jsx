import React from 'react';
import image from '../assets/Images/neon.jpg';

function Studios() {
  return (
    <div className="grid lg:flex">
      <div className="w-full lg:w-1/3 grid">
      <div className="bg-[#01172f] w-full text-white  items-center justify-center p-8 flex">
         <div className="grid">
         <h3>UNDERGRADUATES</h3>
          <h2 className='text-4xl mt-2'>Studios + Shops</h2>
          <p className='mt-2'>
            Do duis enim et mollit minim nisi commodo officia.
            Commodo nisi Lorem irure reprehenderit cillum eiusmod deserunt minim anim cillum anim nisi commodo irure.
          </p>
         </div>
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-96"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <h2 className="text-6xl px-3 py-72 font-semibold text-right text-white">03</h2>
      </div>
    </div>
  );
}

export default Studios;
