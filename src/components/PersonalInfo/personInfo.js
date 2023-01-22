import React from "react";

const personalInfo = () => {
  return (
    <div
      name="Personal"
      className="w-full h-screen bg-gradient-to-b from-sky-300 to-sky-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Personal Info
          </p>
        </div>

        <p className="text-xl mt-20">
          I am currnetly located in Salt Lake City, Utah! I work at Sephora as a Software Engineer managing the Distribution Center. I work with TMS and WMS
          I love MY JOB :D
        </p>

        <br />

      </div>
    </div>
  );
};

export default personalInfo;