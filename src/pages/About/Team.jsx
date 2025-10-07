import React, { useState, useEffect } from "react";
import { GoDash } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Berry from "../../images/berry.png";
import Mentari from "../../images/mentari.png";
import Samsul from "../../images/samsul.png";
import Sunny from "../../images/sunny.png";

const Team = () => {
  const members = [
    {
      name: "Berry D.",
      role: "Project Manager",
      image: Berry,
      bio: "Leads the team with strategic vision and ensures smooth project execution.",
    },
    {
      name: "Mentari S.",
      role: "UX Designer",
      image: Mentari,
      bio: "Crafts user-friendly and visually stunning experiences across platforms.",
    },
    {
      name: "Samsul K.",
      role: "Frontend Developer",
      image: Samsul,
      bio: "Turns designs into seamless, high-performance interfaces.",
    },
    {
      name: "Sunny P.",
      role: "Marketing Lead",
      image: Sunny,
      bio: "Drives engagement with creative campaigns and data-driven insights.",
    },
  ];

  const [flipped, setFlipped] = useState(Array(members.length).fill(false));
  const [autoIndex, setAutoIndex] = useState(0);

  // Handle click flip
  const toggleFlip = (index) => {
    setFlipped((prev) => prev.map((flip, i) => (i === index ? !flip : flip)));
  };

  // Auto flip one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => {
        const newFlips = [...prev];
        newFlips[autoIndex] = !newFlips[autoIndex];
        return newFlips;
      });

      // flip back after 3s
      const backTimer = setTimeout(() => {
        setFlipped((prev) => {
          const newFlips = [...prev];
          newFlips[autoIndex] = !newFlips[autoIndex];
          return newFlips;
        });
      }, 3000);

      // move to next
      setAutoIndex((prev) => (prev + 1) % members.length);
      return () => clearTimeout(backTimer);
    }, 4500);

    return () => clearInterval(interval);
  }, [autoIndex, members.length]);

  return (
    <section className="bg-bg-darkest text-white">
      <div className="px-4 md:px-10 py-14">
        {/* Header */}
        <div className="flex items-center space-x-2 text-bg-soft mb-4">
          <GoDash />
          <h4 className="text-sm md:text-xl font-normal md:font-medium">
            OUR TEAM
          </h4>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl">
          Meet our amazing team working behind the scenes
        </h1>

        {/* Team Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              onClick={() => toggleFlip(index)}
              className="relative w-full aspect-[4/3] cursor-pointer [perspective:1000px]"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  flipped[index] ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT SIDE */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-bg-darker rounded-xl flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent-light font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-bg-faint text-sm md:text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider Line */}
        <div className="my-12 border-t border-bg-mid"></div>

        {/* Join Our Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Join Our Team
          </h2>
          <div>
            <p className="text-bg-faint text-base md:text-lg leading-relaxed">
              We’re always looking for talented and passionate individuals who
              want to create meaningful experiences. At our company, we don’t
              just hire the right fit — we look for those who embody our core
              values and share our vision of making great products that truly
              matter.
            </p>
            <button className="flex items-center gap-2 text-accent-light hover:text-accent-darkest transition-colors font-medium">
              View Openings <FiArrowRight className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
