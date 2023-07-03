import React from 'react';
import image from "./Images/about.jpg";

function About() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-[#01172f] w-full text-white flex items-center justify-center text-6xl p-8">
          01
        </div>
        <div className="bg-[#4ad7d1] text-white">
          <div className="p-8">
            <h3>ABOUT US</h3>
            <h1 className="mt-2 text-3xl lg:text-4xl">Immerse yourself in our creative culture</h1>
            <p className="mt-2">
              Anim exercitation aliquip laborum ipsum esse deserunt reprehenderit ex ipsum laborum et veniam nulla. Ex deserunt in Lorem enim duis.Et esse nulla incididunt proident et.
            </p>
            <button className="bg-[#ea505b] mt-2 px-4 py-2 rounded border border-[#ea505b] hover:bg-transparent">
              Connect
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={image} alt="Image" className="h-96" />
        </div>
      </div>
    </div>
  );
}

export default About;
