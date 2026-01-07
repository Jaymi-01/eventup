import React from "react";
import Slack from "../../images/slack.png";
import Netflix from "../../images/netflix.png";
import Airbnb from "../../images/airbnb.png";
import Google from "../../images/google.png";
import Unicef from "../../images/unicef.png";
import Adobe from "../../images/adobe.png";
import Microsoft from "../../images/microsoft.png";
import Shipbob from "../../images/shipbob.png";

const Clients = () => {
  return (
    <section className="bg-bg-darker w-full">
      <div className="grid grid-cols-2 md:flex md:justify-between gap-8 max-w-7xl mx-auto px-4 py-4 w-full">
        <img src={Slack} alt="Slack" className="w-36 h-9" />
        <img src={Netflix} alt="Netflix" className="w-36 h-9" />
        <img src={Airbnb} alt="Airbnb" className="w-36 h-9" />
        <img src={Google} alt="Google" className="w-36 h-9" />
        <img src={Unicef} alt="Unicef" className="w-36 h-9" />
        <img src={Adobe} alt="Adobe" className="w-36 h-9" />
        <img src={Microsoft} alt="Microsoft" className="w-36 h-9" />
        <img src={Shipbob} alt="Shipbob" className="w-36 h-9" />
      </div>
    </section>
  );
};

export default Clients;
