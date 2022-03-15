import React from "react";
import MainProvider from "../../context/Main/MainProvider";
import Test from "../Test";

const Simple = () => (
  <MainProvider>
    <h2>Simple</h2>
    <Test />
  </MainProvider>
);

export default Simple;
