import React from "react";
import { GoDash } from "react-icons/go";

const About = () => {
  return (
    <section className="bg-white text-bg-darkest w-full">
      <div className="px-4 md:px-10 py-10">
        <div className="flex items-center space-x-2 text-bg-soft">
          <GoDash />
          <h4 className="text-sm md:text-xl  font-normal md:font-medium">
            ABOUT US
          </h4>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-4">
            <div>
                <h1 className="text-3xl md:text-5xl font-semibold">We provide enterprises with innovative technology</h1>
            </div>
            <div className="text-xl md:text-2xl font-normal text-bg-lighter mt-4 grid grid-cols-1 gap-2">
                <p>Discover radically unique video calls designed to help hybrid conference teams create, collaborate, and celebrate together.</p>
                <p>We are here with a solution that can solve your problem. Distance might be a barrier, but it won't bean obstacle for you to develop your product to the public.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
