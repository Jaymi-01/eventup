import React from "react";
import Assets from "../../images/Assets.png";

const About = () => {
  return (
    <section className="bg-about w-full">
      <div className="grid md:flex md:items-center gap-8 px-6 md:px-24 py-10 w-full">
        <div>
          <img src={Assets} alt="" className="w-82 md:w-131" />
        </div>
        <div className="flex flex-col space-y-4 md:space-y-2">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Everyone on their own device.
          </h1>
          <p className="text-bg-mid text-lg md:text-xl font-normal">
            EventUp is designed to be inclusive, by being able to use your own
            device to help hybrid-conference teams create, collaborate and
            celebrate together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
