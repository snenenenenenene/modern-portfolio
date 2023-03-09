import { Marquee } from "@/app/components/common/Marquee";
import React from "react";
import Image from "next/image";

export default function Musicians() {
  return (
    <div className="w-full min-h-screen h-full pt-20 flex-col">
      <main className="px-24 my-32 flex h-full   relative">
        <div className="w-1/2 pr-24 max-h-fit">
          <h1 className="font-display text-8xl mb-8">MUSICIANS</h1>
          <p>
            Musicians is the brainchild of Jstack and me. This project was
            intended to create an intuitive and pragmatic way for young artists
            to sell demo&apos;s, tracks, and samples to potential investors.
            This is possible through the online interface, as well as through a
            scannable QR-code. As I was working on the project as a frontend
            developer most functionalities are wired through a mock API instead
            of an actual backend.
          </p>
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
              <a
                href="https://lynx-osoc.netlify.app/"
                className="underline-offset-2"
              >
                View Demo
              </a>
              <a
                href="https://github.com/snenenenenenene/musicians-frontend"
                className="underline-offset-2"
              >
                View Project
              </a>
            </span>
          </section>
        </div>
        <div className="w-1/2 h-full flex flex-col gap-y-20">
          <section className="relative object-cover w-full h-96">
            <Image
              fill
              alt="image-1"
              src="/assets/images/web/musicians.jpeg"
              className="w-full"
            />
          </section>
          <section className="relative object-cover w-full h-96">
            <Image
              fill
              alt="image-1"
              src="/assets/images/web/musicians.jpeg"
              className="w-full"
            />
          </section>
          <section className="relative object-cover w-full h-96">
            <Image
              fill
              alt="image-1"
              src="/assets/images/web/musicians.jpeg"
              className="w-full"
            />
          </section>
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
}
