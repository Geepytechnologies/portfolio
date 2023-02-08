import React from "react";
import { FaAward } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left max-w-full justify-evenly px-10 mx-auto items-center">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div>
        <div>
          <div className="flex flex-row gap-2">
            <FaAward
              size={"5em"}
              style={{ fontSize: 5 }}
              className="text-[8px]"
            />
            <h3>Web</h3>
          </div>
          <h2>XYZ Academy</h2>
          <div>
            <img
              src="/gp1.JPG"
              alt=""
              className="w-[400px] h-[250px] object cover cursor-pointer"
            />
          </div>
          <div className="flex flex-row items-start justify-start">
            <h2 className="bg-[red] p-2 rounded-lg">React</h2>
            <h2>Node JS</h2>
            <h2>MongoDB</h2>
          </div>
          <p>A youtube clone</p>
          <div className="flex flex-row gap-2 items-center cursor-pointer justify-start w-[50%] p-2 rounded-lg border border-white">
            <AiFillEye className="text-[20px]" />
            preview
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
