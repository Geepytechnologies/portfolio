import React from "react";
import Bottomnav from "./Bottomnav";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Bottomnav />
    </div>
  );
};

export default Layout;
