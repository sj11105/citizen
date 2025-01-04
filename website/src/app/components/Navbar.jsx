import React from "react";

function Navbar() {
  return (
    <div className="border-b shadow-md border-blue-400">
      <ul className="flex gap-6  justify-center text-center m-auto mt-10 text-white ">
        <li>Home</li>
        <li>Schemes</li>
        <li>Knowledge Base</li>
      </ul>
    </div>
  );
}

export default Navbar;
