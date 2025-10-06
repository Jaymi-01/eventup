import React from "react";
import Feature from "../../images/feature.png";

const Features = () => {
  return (
    <section className="bg-white w-full">
      <div className="px-6 md:px-24 py-10 w-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Powerful virtual conferencing platform solution
          </h1>
          <p className="mt-4 text-bg-mid text-lg md:text-xl font-normal">
            Dedicated spaces that make it easy to come together.
          </p>
        </div>
        <div className="mt-8 md:mt-16">
          <img src={Feature} alt="" className="w-82 md:w-300" />
        </div>
      </div>
    </section>
  );
};

export default Features;
