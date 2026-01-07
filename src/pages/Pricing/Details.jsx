import React from "react";

const Details = () => {
  return (
    <section className="pt-15 bg-white text-bg-darkest">
      <div className="px-4 md:px-10 text-center mt-8">
        <div>
          <h4 className="text-sm md:text-xl text-bg-light mb-2 font-normal">
            PRICING PLAN
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 px-10 md:px-0">
            Find Your Perfect Plan
          </h1>
          <p className="text-lg md:text-2xl text-bg-light font-medium">
            Start building for free. purchase the paid sites plan when you are
            ready to go live, then upgrade your workspace to unlock greater
            collaboration
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pricing cards will go here */}
            <div className="bg-white p-4 rounded-lg border-1 border-bg-pale shadow-md">
              <h2 className="text-xl font-bold mb-2">Basic Plan</h2>
              <p className="text-gray-600 mb-4">Ideal for individuals getting started.</p>
              <p className="text-2xl font-bold mb-4">$10/month</p>
              <button className="bg-white hover:bg-accent-darkest border-1 border-accent-darkest text-accent-darkest hover:text-white py-2 px-4 rounded w-full">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg border-1 border-bg-pale shadow-md">
              <h2 className="text-xl font-bold mb-2">Pro Plan</h2>
              <p className="text-gray-600 mb-4">Perfect for small teams.</p>
              <p className="text-2xl font-bold mb-4">$30/month</p>
              <button className="bg-white hover:bg-accent-darkest border-1 border-accent-darkest text-accent-darkest hover:text-white py-2 px-4 rounded w-full">
                Choose Plan
              </button>
            </div>
            <div className="bg-white p-4 rounded-lg border-1 border-bg-pale shadow-md">
              <h2 className="text-xl font-bold mb-2">Enterprise Plan</h2>
              <p className="text-gray-600 mb-4">Best for large organizations.</p>
              <p className="text-2xl font-bold mb-4">$100/month</p>
              <button className="bg-white hover:bg-accent-darkest border-1 border-accent-darkest text-accent-darkest  hover:text-white py-2 px-4 rounded w-full">
                Choose Plan
              </button>
            </div>
        </div>
      </div>
      
    </section>
  );
};

export default Details;
