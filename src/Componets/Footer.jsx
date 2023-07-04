import React from "react";
import image from "../assets/Images/hero.jpg";
import image1 from "../assets/Images/footer.jpg";
import {BsFacebook,BsInstagram,BsTwitter} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"

function Footer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
      <div>
        <div
          className="relative flex items-center justify-center h-96"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffc38d] via-[#fea968] to-transparent opacity-80"></div>
          <div className="z-10 text-white p-3">
            <h3 className="text-xl lg:text-2xl ml-2 uppercase">Sample headline</h3>
            <h1 className="text-4xl lg:text-6xl ml-2 font-semibold">
              Contact Us
            </h1>
            <p className="p-3">
              Address: Address
              <br />
              Location: Location
              <br/>
              County: Country 
              <br/>
              Phone: 1234567890
            </p>
            <div className="flex text-2xl gap-2  text-center p-3">
                <BsFacebook/>
                <BsTwitter/>
                <BsInstagram/>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div
          className="hidden lg:flex md:flex relative  items-center justify-center h-96"
          style={{ backgroundImage: `url(${image1})`, backgroundSize: "cover" }}
        >
        </div>
      </div>
    </div>
  );
}

export default Footer;
