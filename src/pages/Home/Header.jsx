import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Person1 from "../../images/person1.png";
import Person2 from "../../images/person2.png";
import Person3 from "../../images/person3.png";
import Person4 from "../../images/person4.png";
import bubble from "../../images/speech-bubble 1.png";
import text1 from "../../images/Cool!!.png";
import text2 from "../../images/HAHA!.png";
import text3 from "../../images/LOL😂.png";
import text4 from "../../images/WOW!!.png";

const Header = () => {
  return (
    <section className="bg-bg-darkest text-white min-h-screen pt-15 flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* LEFT CLUSTER */}
        <motion.div
          className="w-full md:w-1/2 text-left space-y-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Reliable, secure{" "}
            <span className="block text-accent-darkest">conference</span> to get
            the best events
          </h1>

          <p className="text-bg-soft text-base md:text-lg">
            Hold incredible events, share knowledge, build and grow your
            product, create opportunity
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4">
            <button className="bg-accent-darkest hover:bg-accent-darker text-white font-medium px-8 py-3 rounded-md transition">
              Create Conference
            </button>
            <button className="flex items-center gap-2 border border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-bg-darkest transition">
              Watch story <FiArrowRight className="text-lg" />
            </button>
          </div>
        </motion.div>

        {/* RIGHT CLUSTER */}
        <motion.div
  className="relative w-full md:w-1/2 flex justify-center md:justify-end"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }}
>
  <div className="grid grid-cols-2 gap-6 place-items-center md:grid-cols-2 md:gap-6">
    {/* PERSON 1 */}
    <motion.div
      className="relative flex items-center justify-center z-30"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <div className="relative w-36 sm:w-40 md:w-40 h-36 sm:h-40 md:h-40 rounded-full overflow-hidden shadow-lg bg-[#FDECEF] flex items-center justify-center">
        <img
          src={Person1}
          alt="Person1"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 right-[60%] md:right-[60%] w-12 sm:w-14 md:w-16"
          animate={{ x: [0, -2, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative scale-x-[-1]">
            <img src={bubble} alt="bubble" className="w-full h-auto block" />
            <img
              src={text4}
              alt="WOW!!"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain scale-x-[-1]"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* PERSON 4 */}
    <motion.div
      className="relative flex items-center justify-center z-40"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.45 }}
    >
      <div className="relative w-36 sm:w-40 md:w-36 h-36 sm:h-40 md:h-36 rounded-full overflow-hidden shadow-lg bg-[#EAFBF1] flex items-center justify-center">
        <img
          src={Person4}
          alt="Person4"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[60%] md:left-[60%] w-12 sm:w-14 md:w-16"
          animate={{ x: [0, 2, 0] }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={bubble} alt="bubble" className="w-full h-auto block" />
          <img
            src={text3}
            alt="LOL😂"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain"
          />
        </motion.div>
      </div>
    </motion.div>

    {/* PERSON 3 */}
    <motion.div
      className="relative flex items-center justify-center z-10"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.65 }}
    >
      <div className="relative w-40 sm:w-44 md:w-44 h-40 sm:h-44 md:h-44 rounded-full overflow-hidden shadow-lg bg-[#FFF7E6] flex items-center justify-center">
        <img
          src={Person3}
          alt="Person3"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[60%] md:left-[60%] w-12 sm:w-14 md:w-16"
          animate={{ x: [0, 2, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={bubble} alt="bubble" className="w-full h-auto block" />
          <img
            src={text2}
            alt="HAHA!"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain"
          />
        </motion.div>
      </div>
    </motion.div>

    {/* PERSON 2 */}
    <motion.div
      className="relative flex items-center justify-center z-20"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.85 }}
    >
      <div className="relative w-40 sm:w-44 md:w-40 h-40 sm:h-44 md:h-40 rounded-full overflow-hidden shadow-lg bg-[#E6F3FF] flex items-center justify-center">
        <img
          src={Person2}
          alt="Person2"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 left-[60%] md:left-[60%] w-12 sm:w-14 md:w-16"
          animate={{ x: [0, 2, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={bubble} alt="bubble" className="w-full h-auto block" />
          <img
            src={text1}
            alt="Cool!!"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Header;
