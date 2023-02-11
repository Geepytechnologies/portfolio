import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  company: string;
  src: string;
  date: string;
  description: string;
};

const Card = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] p-10 cursor-pointer ">
      <motion.img
        // initial={{ opacity: 0 }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        className="w-32 h-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]"
        src={props.src}
        alt={props.title}
      />
      <div className="px-0 md:px-10 h-auto">
        <h4 className="text-4xl font-light">{props.company}</h4>
        <p className="font-bold text-2xl mt-1">{props.title}</p>
        <div className="flex space-x-2 my-2">{props.description}</div>
        <p className="uppercase py-5 text-gray-500">{props.date}</p>
        <ul className="list-disc ml-5 text-lg">
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
          <li>hello</li>
        </ul>
      </div>
    </article>
  );
};

export default Card;
