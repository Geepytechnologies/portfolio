import React from "react";
import { FaAward } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="min-h-screen  relative flex flex-col text-center md:text-left max-w-full justify-evenly  items-center">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="py-3 items-center justify-center flex flex-col w-full md:w-[60%]">
        <div className=" py-3 space-y-2 w-[350px] md:w-[400px]">
          <div className="flex items-center flex-row gap-1">
            <FaAward style={{ fontSize: 20 }} className="text-[#f08800]" />
            <h3 className="text-[#f08800] tracking-[10px] uppercase">Web</h3>
          </div>
          <h2 className="font-[600] tracking-wider text-left">Xyz Academy</h2>
          <div>
            <img
              src="/xyz.png"
              alt=""
              className="max-w-[350px] max-h-[200px] md:max-w-[400px] md:max-h-[250px] h-auto w-auto  rounded-r-lg  border-2  cursor-pointer"
            />
          </div>
          <div className="flex text-[#e4ab86] gap-3 mt-2 flex-row items-start justify-start">
            <div className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-white">
                <i className="devicon-nextjs-original-wordmark font-[600] colored"></i>
              </div>
              <h2 className="text-white">Next JS</h2>
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-[white]">
                <i className="devicon-mongodb-plain colored"></i>
              </div>
              <h2 className="text-white">Mongo DB</h2>
            </div>
          </div>
          <p className="text-gray-300 text-left">
            XYZ Academy is a comprehensive platform for education and learning
            about the financial market. With expert instructors and a dynamic
            curriculum, the academy offers in-depth courses and resources to
            help individuals gain a deeper understanding of the financial world.
          </p>
          <Link href="https://xyzacademy.com.ng">
            <div className="flex my-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg text-[#f08800] border border-[#f08800]">
              <AiFillEye className="text-[20px]" />
              Preview
            </div>
          </Link>
        </div>

        <div className="py-3 space-y-2 w-[350px] md:w-[400px]">
          <div className="flex items-center flex-row gap-1">
            <FaAward style={{ fontSize: 20 }} className="text-[#d41e43]" />
            <h3 className="text-[#d41e43] tracking-[10px] uppercase">Web3</h3>
          </div>
          <h2 className="font-[600] tracking-wider text-left">NFT Explorer</h2>
          <div>
            <img
              src="/nfthub.png"
              alt=""
              className="max-w-[350px] max-h-[200px] md:max-w-[400px] md:max-h-[250px] h-auto w-auto border-[#17437a] border-2 shadow-2xl rounded-r-lg cursor-pointer"
            />
          </div>
          <div className="flex text-[#e4ab86] gap-3 mt-2 flex-row items-start justify-start">
            <div className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-white">
                <i className="devicon-nextjs-original-wordmark font-[600] colored"></i>
              </div>
              <h2 className="text-white">Next JS</h2>
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-[white]">
                <i className="devicon-solidity-plain colored"></i>
              </div>
              <h2 className="text-white">Solidity</h2>
            </div>
          </div>
          <p className="text-gray-300 text-left">
            NFT Hub is a cutting-edge NFT (Non-Fungible Token) explorer website
            built by utilizing the power of Solidity programming language. The
            platform allows users to seamlessly explore and discover unique NFTs
            on the Ethereum blockchain.
          </p>
          <Link href="https://nfthub-eight.vercel.app">
            <div className="flex my-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg border  text-[#d41e43] border-[#d41e43]">
              <AiFillEye className="text-[20px]" />
              Preview
            </div>
          </Link>
        </div>
        <div className=" py-3 space-y-2 w-[350px] md:w-[400px]">
          <div className="flex items-center flex-row gap-1">
            <FaAward style={{ fontSize: 20 }} className="text-[#019f52]" />
            <h3 className="text-[#019f52] tracking-[10px] uppercase">Web</h3>
          </div>
          <h2 className="font-[600] tracking-wider text-left">PizzaHub</h2>
          <div>
            <img
              src="/pizza.png"
              alt=""
              className="max-w-[350px] max-h-[200px] md:max-w-[400px] md:max-h-[250px] h-auto w-auto border-[white] border-2 shadow-2xl rounded-r-lg cursor-pointer"
            />
          </div>
          <div className="flex text-[#e4ab86] gap-3 mt-2 flex-row items-start justify-start">
            <div className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-white">
                <i className="devicon-nextjs-original-wordmark font-[600] colored"></i>
              </div>
              <h2 className="text-white">Next JS</h2>
            </div>
            <div className="flex flex-col">
              <div className="rounded-full h-[30px] flex items-center justify-center w-[30px] bg-[white]">
                <i className="devicon-mongodb-plain colored"></i>
              </div>
              <h2 className="text-white">Mongo DB</h2>
            </div>
          </div>
          <p className="text-gray-300 text-left">
            PizzaHub is a user-friendly online platform for ordering delicious
            pizzas from your favorite local pizzerias. The website offers a wide
            range of menu options and allows customers to easily place orders
            and track delivery status.
          </p>
          <Link href="https://pizzahubafrica.vercel.app">
            <div className=" flex my-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg border  text-[#019f52] border-[#019f52]">
              <AiFillEye className="text-[20px]" />
              Preview
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
