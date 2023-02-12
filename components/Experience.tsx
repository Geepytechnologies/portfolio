import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

type Props = {};

const experience = [
  {
    title: "Frontend Developer",
    company: "Vicmie Inc",
    src: "/vicmie.png",
    date: "from 2021 - 2022",
    description: "Built responsive websites with modern technologies",
  },
  {
    title: "Smart Contract Developer Intern",
    company: "Communiti",
    src: "/communi.png",
    date: "2022 - present",
    description: "Skill upgrade",
  },
  {
    title: "Full stack Developer",
    company: "SignaCode Solutions",
    src: "/signa.png",
    date: "2019",
    description:
      "Building and maintaining end-to-end web applications and services, utilizing expertise in both front-end and back-end development.",
  },
  {
    title: "Full stack Developer",
    company: "DevGratify",
    src: "/gratify.jpeg",
    date: "2022",
    description:
      "Designing, implementing, and testing dynamic and scalable web solutions",
  },
];

const Experience = (props: Props) => {
  return (
    <motion.div
      //   initial={{ opacity: 0, x: 200 }}
      //   whileInView={{ opacity: 1, x: 0 }}
      //   transition={{ duration: 0.5 }}
      className=" flex flex-col relative text-left  max-w-full px-3 md:px-10 justify-evenly items-center pt-6 mx-auto "
    >
      <h3 className="uppercase px-2 text-center tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full space-x-5 flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#e4ab86] p-10">
        {experience.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            company={item.company}
            src={item.src}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
