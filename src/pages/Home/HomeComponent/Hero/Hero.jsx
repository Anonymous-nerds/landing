// import React from 'react'
import Nav from "../../../../components/Nav";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero bg-[#fffaeb]">
      <Nav />
      <div className="p-20 flex justify-center text-center">
        <div className="">
          <h1 className="text-5xl leading-snug max-w-3xl mx-auto font-bold">
            The Countdown Begins
          </h1>
          <p className="mt-3 leading-snug max-w-3xl mx-auto text-xl">
            We`re baaaack!!! DevFest Lagos 2024 is coming. It`s bigger and
            better, and we know it will be unforgettable. Are you ready?
          </p>
          <div className="mt-10">
            <button className="p-5 text-lg bg-black text-white px-10 rounded-sm">
              Join the Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
