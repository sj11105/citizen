import React from "react";
import Navbar from "../components/Navbar";
import { ExpandableCardDemo } from "../components/Schemes";

function page() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <h1 className="text-4xl text-white text-center w-auto mt-24">
            "Bridging Rural Communities with Government Services – Simplified,
            Accessible, Empowered!"
          </h1>
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
}

export default page;
