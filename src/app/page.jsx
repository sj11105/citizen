import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThreeDCardDemo } from "./components/Card";
import Flow from "./components/Steps";

function page() {
  return (
    <div>
      <Hero />

      <Flow />
      <ThreeDCardDemo />
    </div>
  );
}

export default page;
