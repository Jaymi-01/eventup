import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import TransitionWrapper from "../../components/TransitionWrapper";

const Signup = () => {
  return (
    <TransitionWrapper>
      <div className="min-h-screen bg-bg-darkest flex items-center justify-center px-4 py-20">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-bg-darkest">
                Get Started
              </h2>
              <p className="text-bg-light mt-2">
                Create your account and join the community
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-bg-dark font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-bg-light" />
                  <input
                    type="text"
                    id="name"
                    className="w-full pl-10 pr-4 py-3 border border-bg-soft rounded-lg focus:outline-none focus:border-accent-darkest focus:ring-1 focus:ring-accent-darkest transition"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-bg-dark font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-bg-light" />
                  <input
                    type="email"
                    id="email"
                    className="w-full pl-10 pr-4 py-3 border border-bg-soft rounded-lg focus:outline-none focus:border-accent-darkest focus:ring-1 focus:ring-accent-darkest transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-bg-dark font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-bg-light" />
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-10 pr-4 py-3 border border-bg-soft rounded-lg focus:outline-none focus:border-accent-darkest focus:ring-1 focus:ring-accent-darkest transition"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                 <input type="checkbox" id="terms" className="accent-accent-darkest" />
                 <label htmlFor="terms" className="text-sm text-bg-light">I agree to the <a href="#" className="text-accent-darkest hover:underline">Terms of Service</a></label>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-darkest hover:bg-accent-darker text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
              >
                Create Account <FiArrowRight />
              </button>
            </form>

            <div className="mt-8 text-center text-bg-light">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-accent-darkest font-semibold hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Signup;
