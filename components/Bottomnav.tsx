import React from "react";
import { AiFillContacts } from "react-icons/ai";
import { FaBlog, FaProjectDiagram, FaUserAlt } from "react-icons/fa";

type Props = {};

const Bottomnav = (props: Props) => {
  return (
    <div className="navbtm h-[70px] md:hidden flex flex-row items-center justify-evenly px-3  border-t-2 rounded-t-md border-white sticky bottom-0">
      <div className="flex flex-col gap-1 items-center justify-center">
        <p>About</p>
        <FaUserAlt />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <p>Projects</p>
        <FaProjectDiagram />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <p>Contact</p>
        <AiFillContacts />
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <p>Blog</p>
        <FaBlog />
      </div>
    </div>
  );
};

export default Bottomnav;
