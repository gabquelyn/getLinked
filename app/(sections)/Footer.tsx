import React from "react";
import Logo from "../components/Logo";
export default function Footer() {
  return (
    <section className="w-full bg-[#100B20] grid grid-cols-3 text-[12px] py-8">
      <div>
        <Logo />
        <p>
          Getlinked Tech Hackathon is a technology programme established by a
          group of organizations with the aim of showcasing young and talented
          individuals in the field of technology
        </p>
      </div>
    </section>
  );
}
