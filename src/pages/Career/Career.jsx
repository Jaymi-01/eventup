import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";
import BenefitImg from "../../images/benefit.png"; 

const benefits = [
  "Competitive Salary & Equity",
  "Remote-First Culture",
  "Health & Wellness Budget",
  "Annual Learning Stipend",
  "Home Office Setup",
  "Flexible Working Hours",
];

const openPositions = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    role: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 3,
    role: "Marketing Manager",
    department: "Marketing",
    location: "New York, USA",
    type: "Hybrid",
  },
  {
    id: 4,
    role: "Customer Success Specialist",
    department: "Support",
    location: "London, UK",
    type: "Full-time",
  },
];

const Career = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-bg-darkest text-white pt-32 pb-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Join the <span className="text-accent-darkest">EventUp</span> Team
          </motion.h1>
          <motion.p
            className="text-bg-soft text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We are building the future of virtual and hybrid events. Come work with
            passionate people and make a global impact.
          </motion.p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={BenefitImg} alt="Office Culture" className="w-full h-auto object-contain" />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-bg-darkest mb-6">
              Why Work With Us?
            </h2>
            <p className="text-bg-mid mb-8 text-lg">
              We believe in a culture of trust, autonomy, and continuous growth.
              Here’s what you can expect when you join our team.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                    <FiCheck size={14} />
                  </div>
                  <span className="text-bg-dark font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-bg-pale">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-bg-darkest mb-4">
              Open Positions
            </h2>
            <p className="text-bg-mid">
              Find the role that fits your skills and passion.
            </p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-bold text-bg-darkest mb-2">
                    {job.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-bg-light text-sm">
                    <span className="flex items-center gap-1">
                      <FiBriefcase /> {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock /> {job.type}
                    </span>
                  </div>
                </div>
                <button className="bg-accent-darkest hover:bg-accent-darker text-white font-medium px-6 py-2 rounded-md transition shrink-0 whitespace-nowrap">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
          
           <div className="mt-12 text-center text-bg-mid">
            Don't see a role for you? <a href="#" className="text-accent-darkest font-semibold hover:underline">Send us your resume</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
