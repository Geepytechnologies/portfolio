import React from "react";
import { FaAward } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

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
            <FaAward style={{ fontSize: 22 }} className="" />
            <h3>Web</h3>
          </div>
          <h2 className="font-[600]">XYZ Academy</h2>
          <div>
            <img
              src="/gp1.JPG"
              alt=""
              className="w-[400px] h-[250px] border-white border-l-2 object cover cursor-pointer"
            />
          </div>
          <div className="flex text-[#e4ab86] flex-row items-start justify-start">
            <h2 className="">React /&nbsp;</h2>
            <h2>Node JS /&nbsp;</h2>
            <h2>MongoDB </h2>
          </div>
          <p>A youtube clone</p>
          <Link href="">
            <div className="flex font-[600] text-[#4faa41] flex-row gap-2 items-center cursor-pointer justify-start w-[40%] p-2 rounded-lg border border-[#4faa41]">
              <AiFillEye className="text-[20px]" />
              Preview
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
