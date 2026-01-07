import React from "react";
import Feature2 from "../../images/feature2.png";
import { GoDash } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";

const Features2 = () => {
  return (
    <section className="bg-bg-darkest text-white w-full">
      <div className="grid md:flex md:flex-row-reverse md:items-center gap-8 max-w-7xl mx-auto px-4 py-4 w-full">
        <div>
          <img src={Feature2} alt="" className="md:w-159" />
        </div>
        <div>
          <div>
            <div className="flex items-center space-x-2">
              <GoDash />
              <h4 className="text-sm md:text-xl text-bg-soft font-normal md:font-medium">ALL FEATURES</h4>
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold mt-4">
              Video calls loved by extraordinary teams.
            </h1>
            <p className="text-xl md:text-2xl font-normal text-bg-faint mt-6">
              Making hybrid‑conference inclusive with unique audio technology.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center space-x-2">
              <CiCircleCheck className="text-accent-light" />
              <p className="text-sm md:text-xl text-bg-faint">
                High-quality video and audio
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CiCircleCheck className="text-accent-light" />
              <p className="text-sm md:text-xl text-bg-faint">
                Screen sharing and collaboration tools
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CiCircleCheck className="text-accent-light" />
              <p className="text-sm md:text-xl text-bg-faint">
                Customizable virtual backgrounds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
