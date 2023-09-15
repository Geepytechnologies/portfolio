import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {
  platform: string;
  title: string;
  img: string;
  color: string;
  border: string;
  description: string;
  projectlink: string;
  tools: Array<{
    icon: string;
    framework: string;
  }>;
};

const ProjectTemplate = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className=" py-3 space-y-2 w-[350px] md:w-[400px]"
    >
      <div className="flex items-center flex-row gap-1">
        <FaAward style={{ fontSize: 20 }} className={`${props.color}`} />
        <h3 className={`${props.color} tracking-[10px] uppercase`}>
          {props.platform}
        </h3>
      </div>
      <h2 className="font-[600] tracking-wider text-left">{props.title}</h2>
      <div className=" max-w-[350px] md:max-w-[400px]">
        <img
          src={props.img}
          alt=""
          className=" h-auto w-full border-[white] object-cover border rounded-r-lg cursor-pointer"
        />
      </div>
      <div className="flex text-[#e4ab86] gap-3 mt-2 flex-row items-start justify-start">
        {props.tools &&
          props.tools.map((tools, index) => (
            <div key={index} className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-white">
                <i className={tools.icon}></i>
              </div>
              <h2 className="text-white">{tools.framework}</h2>
            </div>
          ))}
      </div>
      <p className="text-gray-300 text-left">{props.description}</p>
      <Link href={props.projectlink}>
        <div
          className={`flex my-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg border  ${props.color} ${props.border}`}
        >
          <AiFillEye className="text-[20px]" />
          Preview
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectTemplate;
