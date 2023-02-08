import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Html from "@/myicons/Html";
import Docker from "@/myicons/Docker";
import Typescript from "@/myicons/Typescript";
import Next from "@/myicons/Next";
import Css from "@/myicons/Css";
import Jslogo from "@/myicons/Jslogo";
import Reactlogo from "@/myicons/React";
import Node from "@/myicons/Node";
import Express from "@/myicons/Express";
import Redux from "@/myicons/Redux";
import Redis from "@/myicons/Redis";
import Graphql from "@/myicons/Graphql";
import Solidity from "@/myicons/Solidity";
import Nginx from "@/myicons/Nginx";
import Sass from "@/myicons/Sass";
import Tailwind from "@/myicons/Tailwind";
import Mongodb from "@/myicons/Mongodb";
import Mysql from "@/myicons/Mysql";
import Git from "@/myicons/Git";
import Firebase from "@/myicons/Firebase";
import styles from "@/styles/Skills.module.css";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div className="h-screen flex flex-col text-center md:text-left max-w-[2000px] items-center justify-center mx-auto ">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Skills
      </h3>
      <div
        className={` grid grid-cols-4 justify-center items-center mt-[20px] p-3  gap-6`}
      >
        <Html />
        <Css />
        <Jslogo />
        <Typescript />
        <Solidity />
        <Reactlogo />
        <Next />
        <Node />
        <Express />
        <Redux />
        <Redis />
        <Graphql />
        <Nginx />
        <Docker />
        <Sass />
        <Tailwind />
        <Mongodb />
        <Mysql />
        <Git />
        <Firebase />
      </div>
    </motion.div>
  );
};

export default Skills;
