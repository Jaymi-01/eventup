import React from "react";
import Conference from "../../images/conference.png";

const Header = () => {
  return (
    <section className="bg-bg-darkest text-white pt-15 overflow-hidden">
      <div className="px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 justify-between mb-8 pr-4">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Experience You Can Trust
          </h1>
          <p className="mt-4 text-bg-pale text-lg md:text-2xl font-normal">
            From year to year, we strive to invest in the most innovative
            technology that is used by both small enterprises and space
            enterprises
          </p>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full">
        <img
          src={Conference}
          alt="Conference"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Header;
