import React from "react";
import Logo from "./Logo";
export default function Navbar() {
  return (
    <div className="border-b-[1px] border-[#ffffff2e]">
    <nav className="mx-[4rem] flex items-center justify-between p-4 pt-6 ">
      <Logo />
      <div className="flex gap-[6rem]">
        <ul className="flex items-center gap-[2rem] transition-all">
          <li>Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
        <button>Register</button>
      </div>
    </nav>
    </div>
  );
}
