import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col md:text-left max-w-7xl justify-evenly px-10 mx-auto items-center"
    >
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        About
      </h3>
      <div className="text-base">
        <p className="py-4">
          I&apos;m a fullstack developer focused on solving real-life challenges
          by leveraging on the power of software development.
        </p>
        <p className="py-4">
          As a highly motivated software engineer, I bring both technical
          expertise and creative flair to every project I work on. I have a
          proven track record of delivering innovative and effective solutions
          to meet the needs of clients. I have developed a range of applications
          for high profile tech companies and clients over the years. Whether
          it&apos;s building a custom web application or creating a stunning
          user interface, I have the skills and expertise to bring your vision
          to life. I&apos;m passionate about staying up-to-date with latest
          technologies and always exploring ways to push the boundaries of what
          is possible with software development.
        </p>
        <p className="py-4">
          Offering my skills to the development of your company or project is
          one journey i am definitely willing to embark on. Let me bring your
          next project to life by building irresistible mobile and web apps
          powered with innovative functionalities, sleek UI/UX Designs, REST
          APIs and product algorithms.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
