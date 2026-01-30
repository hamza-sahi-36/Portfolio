import React from "react";
import Node from "../assets/node.png";
import ReactLogo from "../assets/react.png";
import HTMLLogo from "../assets/html.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/javaScript.png";
import Tailwind from "../assets/tailwind.png";
import Githublogo from "../assets/github.png";

const Experience = () => {
  const techs = [
    { id: 1, src: HTMLLogo, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: CSS, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: JavaScript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: ReactLogo, title: "React", style: "shadow-blue-600" },
    { id: 5, src: Tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: Node, title: "Node.js", style: "shadow-green-500" },
    { id: 7, src: Githublogo, title: "GitHub", style: "shadow-gray-400" },
  ];

  return (
    <div className="bg-linear-to-b from-black to-gray-800 w-full min-h-screen text-white py-20">
      <div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline p-2">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md rounded-lg hover:scale-105 duration-500 py-4 ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
