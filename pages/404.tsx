import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <Layout>
      <div className="min-h-screen flex px-2 space-y-5 flex-col text-white items-center justify-center bg-[rgb(36,36,36)]">
        <h1 className="tracking-wider text-[20px] text-center">
          The page You are looking for could not be found
        </h1>
        <h2>
          Go back to{" "}
          <Link href="/" className="bg-[#e4ab86] p-2 rounded-md font-[600]">
            Home
          </Link>
        </h2>
        <img src="/box.svg" alt="test" id="box" />
      </div>
    </Layout>
  );
};

export default Index;
