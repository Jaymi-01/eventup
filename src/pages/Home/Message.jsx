import React from "react";
import Founder from "../../images/founder.png";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

const Message = () => {
  return (
    <section className="bg-white">
      <div className="grid md:grid-cols-2 md:items-center gap-6 px-6 md:px-24 py-10 w-full">
        <div className="flex">
          <img src={Founder} alt="" className="w-14 md:w-20" />
          <div className="ml-4">
            <h1 className="text-xl md:text-2xl font-semibold text-[#292D32]">
              Sunaryo Situmorang
            </h1>
            <p className="text-sm md:text-xl font-normal mt-1 text-bg-mid">
              Founder & CEO | eventup
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative text-bg-darkest text-3xl md:text-4xl font-medium">
            {/* Left Quote */}
            <FaQuoteLeft className="absolute -top-4 -left-1 text-accent-darkest text-xl md:text-3xl" />

            {/* Text */}
            <p className="pl-6 md:pl-10 pr-6 md:pr-10">
              Our goal is to build software that enables users who need it to
              launch their products in this pandemic and all-digital time
            </p>

            {/* Right Quote */}
            <FaQuoteRight className="absolute -bottom-4 -right-1 text-accent-darkest text-xl md:text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
