import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionleft?: Boolean;
};

const Skill = ({ directionleft }: Props) => {
  return (
    <div className="flex relative group cursor-pointer">
      <motion.img
        initial={{ x: directionleft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src=""
        alt=""
      />
    </div>
  );
};

export default Skill;
