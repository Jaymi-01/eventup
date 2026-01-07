import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import TransitionWrapper from "../../components/TransitionWrapper";

const Login = () => {
  return (
    <TransitionWrapper>
      <div className="min-h-screen bg-bg-darkest flex items-center justify-center px-4 py-20">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-bg-darkest">
                Welcome Back
              </h2>
              <p className="text-bg-light mt-2">
                Sign in to manage your events
              </p>
            </div>

            <form className="space-y-6">
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
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-bg-dark font-medium" htmlFor="password">
                    Password
                  </label>
                  <a href="#" className="text-sm text-accent-darkest hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-bg-light" />
                  <input
                    type="password"
                    id="password"
                    className="w-full pl-10 pr-4 py-3 border border-bg-soft rounded-lg focus:outline-none focus:border-accent-darkest focus:ring-1 focus:ring-accent-darkest transition"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent-darkest hover:bg-accent-darker text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
              >
                Sign In <FiArrowRight />
              </button>
            </form>

            <div className="mt-8 text-center text-bg-light">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-accent-darkest font-semibold hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="bg-bg-pale py-4 text-center text-sm text-bg-light">
            &copy; 2026 EventUp. All rights reserved.
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default Login;
