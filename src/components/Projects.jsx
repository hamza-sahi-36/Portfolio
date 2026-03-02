import React from "react";
import Ecommerce from "../assets/Ecommerce.png";
import Stopwatch from "../assets/Stopwatch.png";
import DrumKit from "../assets/DrumKit.png";
import RayalHotel from "../assets/RayalHotel.png";
import DiceGame from "../assets/DiceGame.png";
import JobHunt from "../assets/JobHunt.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Ecommerce,
      demo: "https://hamza-sahi-36.github.io/E-commerce-Store/",
      code: "https://github.com/hamza-sahi-36/E-commerce-Store.git",
    },
    {
      id: 2,
      src: Stopwatch,
      demo: "https://hamza-sahi-36.github.io/Stopwatch/",
      code: "https://github.com/hamza-sahi-36/Stopwatch.git",
    },
    {
      id: 3,
      src: DrumKit,
      demo: "https://hamza-sahi-36.github.io/DrumKit/",
      code: "https://github.com/hamza-sahi-36/DrumKit.git",
    },
    {
      id: 4,
      src: RayalHotel,
      demo: "https://hamza-sahi-36.github.io/Hotel-Website/",
      code: "https://github.com/hamza-sahi-36/Hotel-Website.git",
    },
    {
      id: 5,
      src: DiceGame,
      demo: " https://hamza-sahi-36.github.io/DiceGame/",
      code: "https://github.com/hamza-sahi-36/DiceGame.git",
    },
    {
      id: 6,
      src: JobHunt,
      demo: "https://hamza-sahi-36.github.io/JobHunt/",
      code: "https://github.com/hamza-sahi-36/JobHunt.git",
    },
  ];

  return (
    <div className="bg-linear-to-b from-gray-800 to-black text-white w-full min-h-screen py-20">
      <div className="flex flex-col justify-center w-full h-full max-w-5xl p-4 mx-auto">
        <div className="pb-8">
          <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Projects
          </h2>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                    Demo
                  </button>
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
