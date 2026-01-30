import React from "react";
import Ecommerce from "../assets/Ecommerce.png";
import Stopwatch from "../assets/Stopwatch.png";
import DrumKit from "../assets/DrumKit.png";
import RayalHotel from "../assets/RayalHotel.png";
import DiceGame from "../assets/DiceGame.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Ecommerce,
    },
    {
      id: 2,
      src: Stopwatch,
    },
    {
      id: 3,
      src: DrumKit,
    },
    {
      id: 4,
      src: RayalHotel,
    },
    {
      id: 5,
      src: DiceGame,
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
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
