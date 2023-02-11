import React from "react";
import { FaAward } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const Projects = (props: Props) => {
  return (
    <div className="min-h-screen relative flex flex-col text-center md:text-left max-w-full justify-evenly px-10 mx-auto items-center">
      <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="py-3 items-center justify-center flex flex-col w-full md:w-[60%]">
        <div className=" py-3 space-y-2 max-w-[400px]">
          <div className="flex items-center flex-row gap-1">
            <FaAward style={{ fontSize: 20 }} className="text-[#f08800]" />
            <h3 className="text-[#f08800] tracking-[10px] uppercase">Web</h3>
          </div>
          <h2 className="font-[600] tracking-wider text-left">Xyz Academy</h2>
          <div>
            <img
              src="/xyz.png"
              alt=""
              className="max-w-[400px] max-h-[250px] h-auto w-auto  rounded-r-lg  border-2  cursor-pointer"
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
            Whether you're a seasoned investor or just starting out, XYZ Academy
            provides the tools and knowledge necessary to navigate the complex
            world of finance. From stocks and bonds to economics and financial
            analysis
          </p>
          <Link href="">
            <div className="flex m-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg text-[#f08800] border border-[#f08800]">
              <AiFillEye className="text-[20px]" />
              Preview
            </div>
          </Link>
        </div>

        <div className="py-3 space-y-2 max-w-[400px]">
          <div className="flex items-center flex-row gap-1">
            <FaAward style={{ fontSize: 20 }} className="text-[#d41e43]" />
            <h3 className="text-[#d41e43] tracking-[10px] uppercase">Web3</h3>
          </div>
          <h2 className="font-[600] tracking-wider text-left">NFT Explorer</h2>
          <div>
            <img
              src="/nfthub.png"
              alt=""
              className="max-w-[400px] max-h-[250px] h-auto w-auto border-[#17437a] border-2 shadow-2xl rounded-r-lg cursor-pointer"
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
            on the Ethereum blockchain. The smart contract written in Solidity
            ensures secure and transparent NFT transactions, providing users
            with a reliable and trustworthy platform to buy, sell, and collect
            unique digital assets. NFT Hub stands out as a comprehensive
            solution for NFT enthusiasts, offering them an all-in-one platform
            to stay up-to-date with the latest developments in the NFT world.
            Showcase your portfolio and unique digital assets on NFT Hub today!
          </p>
          <Link href="">
            <div className="flex m-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg border  text-[#d41e43] border-[#d41e43]">
              <AiFillEye className="text-[20px]" />
              Preview
            </div>
          </Link>
        </div>
        <div className=" py-3 space-y-2 max-w-[400px]">
          <div className="flex items-center flex-row gap-1">
            <FaAward style={{ fontSize: 20 }} className="text-[#019f52]" />
            <h3 className="text-[#019f52] tracking-[10px] uppercase">Web</h3>
          </div>
          <h2 className="font-[600] tracking-wider text-left">PizzaHub</h2>
          <div>
            <img
              src="/pizza.png"
              alt=""
              className="max-w-[400px] max-h-[250px] h-auto w-auto border-[white] border-2 shadow-2xl rounded-r-lg cursor-pointer"
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
            and track delivery status. With a simple and intuitive interface,
            PizzaHub streamlines the ordering process and provides a convenient
            and enjoyable experience for pizza lovers everywhere.
          </p>
          <Link href="">
            <div className=" flex m-2 font-[600]  flex-row gap-2 items-center cursor-pointer justify-start w-[100px] p-2 rounded-lg border  text-[#019f52] border-[#019f52]">
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
