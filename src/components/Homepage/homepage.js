import React from "react";
import pfp from "../../img/profilePicture.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Homepage = () => {
  return (
    <div
      name="Homepage"
      className="h-screen w-full bg-gradient-to-b from-sky-900  to-sky-300"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have just over 2 years of experience creating and testing software and webapps.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={pfp}
            alt="my profile"
            className="rounded-2xl mx-auto object-scale-down h-150 w-60"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;