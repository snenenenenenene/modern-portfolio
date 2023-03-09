import { Marquee } from "@/app/components/common/Marquee";
import React from "react";

export const Lynx = () => {
  return (
    <div className="w-full min-h-screen h-full pt-20 flex-col">
      <main className="px-24 my-32 flex h-full   relative">
        <div className="w-1/2 pr-24 max-h-fit">
          <h1 className="font-display text-8xl">LYNX</h1>
          <p>Lynx was </p>
          <section className="flex font-body mt-40">
            <span className="flex flex-col">
              <p>YEAR</p>
              <p> 2022</p>
            </span>
            <span className="flex flex-col ml-20">
              <p>ROLE</p>
              <p>Development</p>
            </span>
            <span className="flex flex-col justify-end ml-auto">
              View Project
            </span>
          </section>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-y-20">
          <img
            alt="image-1"
            src="/assets/images/web/lynx.png"
            className="w-full"
          />
          <img
            alt="image-1"
            src="/assets/images/web/lynx.png"
            className="w-full"
          />
          <img
            alt="image-1"
            src="/assets/images/web/lynx.png"
            className="w-full"
          />
        </div>
      </main>

      <Marquee
        className="mt-auto border-b-0"
        wordList={[
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
          "MORE PROJECTS",
        ]}
      />
      <nav className="w-full h-[28rem] flex font-display text-[13rem]">
        <section className="w-1/2 h-full border-t border-light-secondary border-r">
          <div className="w-full h-full font-outline-2 text-light-primary hover:text-light-secondary hover:border-2 hover:font-outline-0 border-light-secondary flex justify-center items-center">
            <h2>PREV</h2>
          </div>
        </section>
        <section className="w-1/2 h-full border-t border-light-secondary">
          <div className="w-full h-full font-outline-2 text-light-primary hover:text-light-secondary hover:border-2 hover:font-outline-0 border-light-secondary flex justify-center items-center">
            <h2>NEXT</h2>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Lynx;
