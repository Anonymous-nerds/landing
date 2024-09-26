// import React from 'react'
import "./About.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div className="About p-20 pt-12">
      <div className="">
        <div className="">
          <div className="p-3 w-[25%] px-8 rounded-full bg-transparent border border-white text-white">
            <p>
              <a className="flex gap-2" href="/about">
                <span>About Anonymous Nerds</span>
                <span className="py-1">
                  <IoIosArrowRoundForward />
                </span>
              </a>
            </p>
          </div>
          <div className="mt-10">
            <h2
              className="font-bold text-5xl leading-snug max-w-3xl"
              style={{ lineHeight: "1.3em" }}
            >
              Anonymous Nerds is an inclusive open-source community designed to
              bring coders together from all levels of expertise.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
