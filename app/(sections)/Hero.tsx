import React from "react";
import Navbar from "../components/Navbar";
import { Unica_One } from "next/font/google";
const unica = Unica_One({ subsets: ["latin"], weight: "400" });
export default function Hero() {

  return (
    <section className="h-[100vh] border-b-[1px] border-[#ffffff2e]">
      <Navbar />
      <div className="flex justify-end font-bold p-4 text-[1.2rem] italic mr-[4rem] relative">
        <p>Igniting a Revolution in HR innovation</p>
      </div>
      {/* content */}
      <div className="mx-[4rem] grid grid-cols-2 items-center gap-[2rem] my-[2rem]">
        <div>
          <div className="flex flex-col gap-4">
            <p className="heading text-3xl font-bold">
              getlinked Tech <br />
              Hackathon <span className="text-purpelight">1.0</span>
            </p>
            <p className="max-w-[35rem]">
              Participate in getlinked Tech Hackathon and stand a chance to win
              a big prize
            </p>
            <button>Register</button>
          </div>
          <div className={ `flex gap-3 mt-5 ${unica.className}`}>
            <p className="text-4xl">
              00<span className="text-sm">H</span>
            </p>
            <p className="text-4xl">
              00<span className="text-sm">M</span>
            </p>
            <p className="text-4xl">
              00<span className="text-sm">S</span>
            </p>
          </div>
        </div>
        {/* images */}
        <div className="h-[70vh] overflow-hidden bg-blend-hard-light hero relative">
          {/* <img
            src="/assets/man.png"
            className="object-fill h-[100%] w-[100
            %]"
          /> */}
          <img
            src="/assets/light.png"
            className="object-fill h-[100%] w-[50
            %] absolute top-[0] left-[0]"
          />
        </div>
      </div>
    </section>
  );
}
