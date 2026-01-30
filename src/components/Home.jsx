import React from "react";
import HeroImage from "../assets/hamza.jpg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-black to-gray-800 text-white flex items-center py-20 md:py-0">
      <div className="max-w-5xl mx-auto h-full flex flex-col items-center justify-center px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold">
            I'm a Front-End Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a computer science graduate passionate about creating innovative
            web applications. Skilled in HTML, CSS, JavaScript, and React, I
            strive to build responsive and user-friendly interfaces. Let's work
            together to bring your ideas to life!
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/projects">
              <button className="group text-white flex items-center cursor-pointer bg-linear-to-r from-cyan-500 to-blue-500 rounded-md w-fit px-6 py-3 my-2">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-10">
          <img
            src={HeroImage}
            alt="Hero"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
