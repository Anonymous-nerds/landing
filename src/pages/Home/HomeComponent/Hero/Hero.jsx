// import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Nav from "../../../../components/Nav";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <Nav />
      <div className="p-20 my-24 lg:py-16 flex justify-center text-center">
        <div className="">
          <div className="">
            <h1
              className="heroText mt-3 font-bold text-[3.1rem] leading-snug max-w-3xl mx-auto"
              style={{ lineHeight: "1.3em" }}
            >
              Find inspiration. Get answers. <br /> Be more productive.
            </h1>
            <p className="mt-5 font-light text-md leading-snug max-w-3xl mx-auto">
              Anonymous Nerds is a community-driven, open-source platform for
              coders, developers, and tech enthusiasts. Whether you`re a
              beginner or a pro, dive into collaborative projects, sharpen your
              skills, and contribute to the open-source ecosystem.
            </p>
          </div>
          <div className="pt-10 flex justify-center text-center">
            <div className="flex gap-5">
              <button className="p-3 px-8 rounded-full bg-white text-black flex gap-3 font-semibold">
                <span>Contribute on GitHub</span>{" "}
                <span className="py-1">
                  <FaGithub />
                </span>
              </button>
              <button className="p-3 px-8 rounded-full bg-transparent border border-white text-white flex gap-3 font-semibold">
                <span>Join Us Now</span>{" "}
                <span className="py-1">
                  <FaExternalLinkAlt />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
