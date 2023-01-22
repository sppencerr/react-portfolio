import React from "react";
import javascriptQuiz from "../../img/projects/javascriptQuiz.png";
import passwordGenerator from "../../img/projects/passwordGenerator.png";
import timeManager from "../../img/projects/timeManager.png";
import weatherForecast from "../../img/projects/weatherForecast.png";
import dayAtGlance from "../../img/projects/dayAtGlance.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: javascriptQuiz,
    },
    {
      id: 2,
      src: passwordGenerator,
    },
    {
      id: 3,
      src: timeManager,
    },
    {
      id: 4,
      src: weatherForecast,
    },
    {
      id: 5,
      src: dayAtGlance,
    },
    
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-sky-900 to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Here are some of my projects I've built</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;