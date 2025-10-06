import React from 'react'
import Benefits from "../../images/benefit.png";
import { GoDash } from "react-icons/go";
import { CiCircleCheck } from "react-icons/ci";

const Benefit = () => {
  return (
    <section className="bg-bg-darkest text-white w-full">
        <div className="grid md:flex md:items-center gap-8 px-6 md:px-24 py-10 w-full">
            <div>
                      <img src={Benefits} alt="" className="md:w-159" />
                    </div>
                    <div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <GoDash />
                          <h4 className="text-sm md:text-xl text-bg-soft font-normal md:font-medium">BENEFIT FOR YOU</h4>
                        </div>
            
                        <h1 className="text-3xl md:text-5xl font-semibold mt-4">
                          Fast, reliable and secure for your conferences
                        </h1>
                        <p className="text-xl md:text-2xl font-normal text-bg-faint mt-6">
                          By using us, get the benefits that make it easier for you in the conference for your convenience and the participants
                        </p>
                      </div>
                      <div className="mt-10">
                        <div className="flex items-center space-x-2">
                          <CiCircleCheck className="text-accent-light" />
                          <p className="text-sm md:text-xl text-bg-faint">
                            Security & Privacy

                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CiCircleCheck className="text-accent-light" />
                          <p className="text-sm md:text-xl text-bg-faint">
                            Audience Q&A
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CiCircleCheck className="text-accent-light" />
                          <p className="text-sm md:text-xl text-bg-faint">
                            Engagement
                          </p>
                        </div>
                      </div>
                    </div>
        </div>
    </section>
    
  )
}

export default Benefit