import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Godspower",
      "Full Stack developer",
      "Blockchain Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <div className="w-[200px] h-[200px] bg-white rounded-full bg-[url('/geepy.jpeg')] bg-cover bg-center " />
      <div>
        <h2 className="uppercase text-sm text-gray-500 tracking-[15px] pb-2">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="">{text}</span>
          <Cursor cursorColor="#dfcdc7" />
        </h1>
      </div>
      <div className="flex flex-row w-full gap-6   items-center justify-center  ">
        <Link className="linkbtn" href={"#about"}>
          About
        </Link>
        <Link className="linkbtn" href={"#experience"}>
          Experience
        </Link>
        <Link className="linkbtn" href={"#skills"}>
          Skills
        </Link>
        <Link className="linkbtn" href={"#projects"}>
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Hero;
