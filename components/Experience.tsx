import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-[95vh] flex flex-col relative text-left  min-w-full px-10 justify-evenly items-center pt-6 mx-auto"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full space-x-5 flex overflow-x-scroll p-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </motion.div>
  );
};

export default Experience;
