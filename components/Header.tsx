import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiFillContacts, AiOutlineClose } from "react-icons/ai";
import { BsCloudDownload } from "react-icons/bs";
import { FaBlog, FaProjectDiagram, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [menu, setMenu] = useState(false);
  const togglemenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="sticky bg-[rgb(36,36,36)] top-0 flex flex-col  w-full z-20  px-3 py-4">
        <div className="flex justify-between ">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className=""
          >
            <SocialIcon
              url="https://twitter.com/Godspower_EC"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.linkedin.com/in//godspower-enwereuzor-4861571a2"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://instagram.com/geepy_c"
              fgColor="gray"
              bgColor="transparent"
            />
            <SocialIcon
              url="https://github.com/Geepytechnologies"
              fgColor="gray"
              bgColor="transparent"
            />
          </motion.div>
          <ul className="text-gray-300 hidden  md:flex gap-9 text-[20px] items-center justify-center">
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
            <li>
              <Link href="">Blog</Link>
            </li>
          </ul>
          <motion.a
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            href="/Godspower.pdf"
            download
            className="flex-row cursor-pointer hidden md:flex gap-2 font-[600] px-4 items-center text-[#e4ab86] mr-4 rounded-md  border-2 border-[#e4ab86]"
          >
            <BsCloudDownload /> Resume
          </motion.a>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex flex-row md:hidden  text-[30px] font-[500]  text-gray-300 items-center"
          >
            {!menu && <HiMenuAlt4 onClick={() => togglemenu()} />}
            {menu && <AiOutlineClose onClick={() => togglemenu()} />}
          </motion.div>
        </div>

        <div
          className={`  ${
            menu
              ? "max-h-[200px] overflow-hidden md:hidden h-[200px] py-4 transition-[max-height] duration-500 ease-in-out "
              : "max-h-[0px] overflow-hidden h-[200px]   transition-[max-height] duration-500 ease-in-out"
          }`}
        >
          <div className="space-y-3 text-white">
            <Link
              href="#about"
              className="flex gap-1 items-center justify-center"
            >
              <FaUserAlt />
              <p>About</p>
            </Link>
            <Link
              href="#projects"
              className="flex gap-1 items-center justify-center"
            >
              <FaProjectDiagram />
              <p>Projects</p>
            </Link>
            <Link
              href="#contact"
              className="flex gap-1 items-center justify-center"
            >
              <AiFillContacts />
              <p>Contact</p>
            </Link>
            <div className="flex gap-1 items-center justify-center">
              <FaBlog />
              <p>Blog</p>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="/Godspower.pdf"
                download
                className="flex flex-row w-[100px] gap-2 font-[600] items-center text-[#e4ab86] rounded-md p-1 border-2 border-[#e4ab86]"
              >
                <BsCloudDownload /> Resume
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
