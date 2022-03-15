import React from "react";

import SideMenu from "./SideMenu";
import Footer from "./Footer";
import Header from "./Header";

const LayoutWithRoute = ({ children }) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <SideMenu />
      <div>
        <Header />
        <main style={{ margin: "20px 16px" }}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutWithRoute;
