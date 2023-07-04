import React from "react";
import image from "../assets/Images/street.jpg";
import image2 from "../assets/Images/design.jpg";


function Design() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2  md:grid-cols-2">
        {/* card -1 */}
        <div className=" h-96 bg-[#fe4a49] text-white">
          <h3 className="ml-8 mt-8">CORE DISPLINES</h3>
          <h2 className="text-3xl lg:text-4xl mt-3 bg-[#4ad7d1] ml-0 w-3/5 p-2">
            Architecture
          </h2>
          <p className="ml-8 mt-3">
            Irure labore non veniam mollit ad sint velit ex ad esse consequat
            eiusmod. Fugiat dolore sit incididunt laborum anim aliquip sunt
            laborum occaecat enim veniam commodo ut esse. Sit occaecat quis enim
            sunt laborum minim occaecat nisi fugiat. Proident adipisicing ea ad
            eu adipisicing ea nulla aliquip laborum voluptate ea qui. Est ea
            reprehenderit aliqua elit eiusmod qui laborum
          </p>
        </div>
        {/* card -2 */}
        <div
          className=" h-96 opacity-90"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        >
          <h3 className="ml-8 mt-8 text-white">CORE DISPLINES</h3>
          <h2 className="text-3xl lg:text-4xl mt-3 bg-white ml-0 w-3/5 p-2">
            Design
          </h2>
          <p className="ml-8 mt-3 text-white">
            Irure labore non veniam mollit ad sint velit ex ad esse consequat
            eiusmod. Fugiat dolore sit incididunt laborum anim aliquip sunt
            laborum occaecat enim veniam commodo ut esse. Sit occaecat quis enim
            sunt laborum minim occaecat nisi fugiat. Proident adipisicing ea ad
            eu adipisicing ea nulla aliquip laborum voluptate ea qui. Est ea
            reprehenderit aliqua elit eiusmod qui laborum
          </p>
        </div>
          {/* card -3 */}
          <div
          className=" h-96 opacity-90"
          style={{ backgroundImage: `url(${image2})`, backgroundSize: "cover" }}
        >
          <h3 className="ml-8 mt-8 text-white">CORE DISPLINES</h3>
          <h2 className="text-3xl lg:text-4xl mt-3 bg-white ml-0 w-3/5 p-2">
            Fine Arts
          </h2>
          <p className="ml-8 mt-3 text-white">
            Irure labore non veniam mollit ad sint velit ex ad esse consequat
            eiusmod. Fugiat dolore sit incididunt laborum anim aliquip sunt
            laborum occaecat enim veniam commodo ut esse. Sit occaecat quis enim
            sunt laborum minim occaecat nisi fugiat. Proident adipisicing ea ad
            eu adipisicing ea nulla aliquip laborum voluptate ea qui. Est ea
            reprehenderit aliqua elit eiusmod qui laborum
          </p>
        </div>
        {/* card -4 */}
        <div className=" h-96 bg-[#43dad1] text-white">
          <h3 className="ml-8 mt-8">CORE DISPLINES</h3>
          <h2 className="text-3xl lg:text-4xl mt-3 bg-[#fe4a49] ml-0 w-3/5 p-2">
            Humanities
          </h2>
          <p className="ml-8 mt-3">
            Irure labore non veniam mollit ad sint velit ex ad esse consequat
            eiusmod. Fugiat dolore sit incididunt laborum anim aliquip sunt
            laborum occaecat enim veniam commodo ut esse. Sit occaecat quis enim
            sunt laborum minim occaecat nisi fugiat. Proident adipisicing ea ad
            eu adipisicing ea nulla aliquip laborum voluptate ea qui. Est ea
            reprehenderit aliqua elit eiusmod qui laborum
          </p>
        </div>
      
      </div>
    </div>
  );
}

export default Design;
