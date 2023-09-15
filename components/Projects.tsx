import React from "react";
import ProjectTemplate from "./ProjectTemplate";
import {
  firebaseicon,
  mongoicon,
  nextjsicon,
  nodejsicon,
  reacticon,
  solidityicon,
} from "@/myconfig";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="min-h-screen  relative flex flex-col text-center md:text-left max-w-full justify-evenly  items-center">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="py-3 justify-items-center grid grid-cols-1 md:grid-cols-2 gap-5 w-full ">
        {/* xyz Academy */}
        <ProjectTemplate
          platform={"Web"}
          title={"Xyz Academy"}
          img={"/xyz.png"}
          color={"text-[#f08800]"}
          border={"border-[#f08800]"}
          description={
            "XYZ Academy is a comprehensive platform for education and learning about the financial market. With expert instructors and a dynamic curriculum, the academy offers in-depth courses and resources to help individuals gain a deeper understanding of the financial world."
          }
          projectlink={"https://xyzacademy.com.ng"}
          tools={[
            {
              icon: nextjsicon.icon,
              framework: nextjsicon.framework,
            },
            {
              icon: mongoicon.icon,
              framework: mongoicon.framework,
            },
          ]}
        />

        {/* NFT hub */}
        <ProjectTemplate
          platform={"Web3"}
          title={"NFT Explorer"}
          img={"/nfthub.png"}
          color={"text-[#d41e43]"}
          border={"border-[#d41e43]"}
          description={
            "NFT Hub is a cutting-edge NFT (Non-Fungible Token) explorer website built by utilizing the power of Solidity programming language. The platform allows users to seamlessly explore and discover unique NFTs on the Ethereum blockchain."
          }
          projectlink={"https://nfthub-eight.vercel.app"}
          tools={[
            {
              icon: nextjsicon.icon,
              framework: nextjsicon.framework,
            },
            {
              icon: solidityicon.icon,
              framework: solidityicon.framework,
            },
          ]}
        />

        {/* pizzahub */}
        <ProjectTemplate
          platform={"Web"}
          title={"PizzaHub"}
          img={"/pizza.png"}
          color={"text-[#019f52]"}
          border={"border-[#019f52]"}
          description={
            "PizzaHub is a user-friendly online platform for ordering delicious pizzas from your favorite local pizzerias. The website offers a wide range of menu options and allows customers to easily place orders and track delivery status."
          }
          projectlink={"https://pizzahubafrica.vercel.app"}
          tools={[
            {
              icon: nextjsicon.icon,
              framework: nextjsicon.framework,
            },
            {
              icon: mongoicon.icon,
              framework: mongoicon.framework,
            },
          ]}
        />

        {/* Reveal */}
        <ProjectTemplate
          platform={"Web"}
          title={"Reveal"}
          img={"/reveal.png"}
          color={"text-[#ef1e41]"}
          border={"border-[#ef1e41]"}
          description={
            "Reveal is a cutting-edge video streaming platform designed specifically for developers to showcase their video projects. This platform offers a dynamic and interactive space where developers can share their creations with the world and get valuable feedback from peers."
          }
          projectlink={"https://comfortable-mite-underwear.cyclic.app"}
          tools={[
            {
              icon: reacticon.icon,
              framework: reacticon.framework,
            },
            {
              icon: mongoicon.icon,
              framework: mongoicon.framework,
            },
            {
              icon: nodejsicon.icon,
              framework: nodejsicon.framework,
            },
            {
              icon: firebaseicon.icon,
              framework: firebaseicon.framework,
            },
          ]}
        />
        {/* election */}
        <ProjectTemplate
          platform={"Web3"}
          title={"Nigerian Election"}
          img={"/election.png"}
          color={"text-[#01945a]"}
          border={"border-[#01945a]"}
          description={
            "Vote for your favorite Nigerian presidential candidates securely and transparently on the blockchain with Nigerian Election. This decentralized platform ensures the integrity and accuracy of the voting process."
          }
          projectlink={"https://nigerianelectionweb3.vercel.app"}
          tools={[
            {
              icon: nextjsicon.icon,
              framework: nextjsicon.framework,
            },
            {
              icon: solidityicon.icon,
              framework: solidityicon.framework,
            },
          ]}
        />
        {/* pamtoken */}
        <ProjectTemplate
          platform={"Web3"}
          title={"PamToken"}
          img={"/pam.png"}
          color={"text-[#6b9c2f]"}
          border={"border-[#6b9c2f]"}
          description={
            "Pam is a meme token project created for fun and entertainment, with no financial return expectation. The project was built using React, a JavaScript library for building user interfaces. The project showcases the developer's technical skills and creativity in a fun and playful way."
          }
          projectlink={"https://pamtoken.io"}
          tools={[
            {
              icon: "devicon-react-original colored",
              framework: "React",
            },
          ]}
        />
        {/* dcryptgirl */}
        <ProjectTemplate
          platform={"Web"}
          title={"Dcryptgirl"}
          color="text-[#f371ff]"
          border="border-[#f371ff]"
          img={"/dcryptgirl.png"}
          description={
            "Portfolio and blog website for digital content creation. Powered by Hygraph as a CMS. Built with the fast blazing technology of NextJS"
          }
          projectlink={"https://debby.vercel.app"}
          tools={[
            {
              icon: "devicon-nextjs-original-wordmark font-[600] colored",
              framework: "NextJS",
            },
          ]}
        />
        {/* oakfieldschools */}
        <ProjectTemplate
          platform={"Web"}
          title={"Oakfieldschools"}
          color="text-gray-400"
          border="border-gray-400"
          img={"/Screenshot.png"}
          description={
            "Oakfield International Schools is a school website and admin dashboard project built with React and TypeScript. It serves as an online platform for the school community, providing information, resources, and administrative tools"
          }
          projectlink={"https://oakfieldschools.vercel.app"}
          tools={[
            {
              icon: "devicon-react-original colored",
              framework: "React",
            },
          ]}
        />
        {/* opticcs */}
        <ProjectTemplate
          platform={"Web"}
          title={"OptiCCS"}
          color="text-[#14A673]"
          border="border-[#14A673]"
          img={"/opticcs.png"}
          description={
            "The OptiCCS Project (Optimising Client-centered Services through an integrated ANC, Disease Detection & Mgt in PHCs) is a National Primary Healthcare project developed for the Nigerian government. It focuses on improving antenatal care (ANC) services for pregnant women, with a goal to streamline record-keeping and provide better care."
          }
          projectlink={"https://opticcs.vercel.app"}
          tools={[
            {
              icon: "devicon-react-original colored",
              framework: "React",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
