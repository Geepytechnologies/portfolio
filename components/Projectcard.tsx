import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaAward } from "react-icons/fa";

type Props = {};

const Projectcard = (props: Props) => {
  return (
    <div className=" py-3 space-y-2 w-[350px] md:w-[400px]">
      <div className="flex items-center flex-row gap-1">
        <FaAward style={{ fontSize: 20 }} className="text-[#6b9c2f]" />
        <h3 className="text-[#6b9c2f] tracking-[10px] uppercase">Web3</h3>
      </div>
      <h2 className="font-[600] tracking-wider text-left">PamToken</h2>
      <div>
        <img
          src="/pam.png"
          alt=""
          className="max-w-[350px] max-h-[200px] md:max-w-[400px] md:max-h-[250px] h-auto w-auto border-[white] border rounded-r-lg cursor-pointer"
        />
      </div>
      <div className="flex text-[#e4ab86] gap-3 mt-2 flex-row items-start justify-start">
        <div className="flex flex-col">
          <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-white">
            <i className="devicon-react-original colored"></i>
          </div>
          <h2 className="text-white">React</h2>
        </div>
      </div>
      <p className="text-gray-300 text-left">
        Pam is a meme token project created for fun and entertainment, with no
        financial return expectation. The project was built using React, a
        JavaScript library for building user interfaces. The project showcases
        the developer&apos;s technical skills and creativity in a fun and
        playful way.
      </p>
      <Link href="https://pamtoken.io">
        <div className=" flex my-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg border  text-[#6b9c2f] border-[#6b9c2f]">
          <AiFillEye className="text-[20px]" />
          Preview
        </div>
      </Link>
    </div>
  );
};

export default Projectcard;
