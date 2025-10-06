import React from "react";

const Setup = () => {
  return (
    <section className="bg-white w-full px-6 py-6 md:px-24 md:py-24">
      <div className="bg-[#953314] grid md:grid-cols-2 gap-8 md:gap-24 px-6 py-14 md:px-16 md:py-24 rounded-lg text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold">
            Ready to setup your next conference?
          </h1>
          <p className="text-lg md:text-xl font-normal text-bg-faint mt-4">
            Build opportunities for future opportunities for products, startups.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4">
          <button className="bg-accent-darkest hover:bg-accent-darker text-white font-medium px-8 py-3 rounded-md transition w-full ">
            Create Conference
          </button>
          <button className=" border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-bg-darkest transition w-full">
            Watch story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Setup;
