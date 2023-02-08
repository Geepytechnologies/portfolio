import Html from "@/myicons/Html";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-full justify-evenly px-10 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Contact Me
      </h3>
    </div>
  );
};

export default Contact;
