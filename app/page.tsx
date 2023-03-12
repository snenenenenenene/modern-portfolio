"use client";

import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useRef, useState } from "react";
import { TfiEmail, TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { Marquee } from "./components/common/Marquee";
import { Model } from "./components/common/Model";
import { MotionHover } from "./components/three/3d";
export default function Home() {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const modelRef: any = useRef();

  const [ThreeDHoverPath, setThreeDHoverPath] = useState<string>("");

  return (
    <div
      onMouseMove={(e) => {
        const x = e.pageX - e.currentTarget.offsetLeft;
        const y = e.pageY - e.currentTarget.offsetTop;
        setMousePos({ x: x, y: y });
        // setMousePos({ x: e.clientX, y: e.clientY });
      }}
      className="w-full h-full flex flex-col relative"
    >
      <Canvas style={{ height: "100%", position: "absolute" }}>
        {/* <PerspectiveCamera makeDefault position={[10, 0, 40]} /> */}
        <ambientLight intensity={1} />
        <pointLight intensity={2} />
        <Model
          ref={modelRef}
          scale={3}
          position={[130, 260, -500]}
          rotation={[
            0 - mousePos.x / 5000,
            -Math.PI / 3 + mousePos.y / 5000,
            -Math.PI / 8,
          ]}
        />

        <Suspense fallback={null}>
          {ThreeDHoverPath !== "" && (
            <MotionHover
              scale={0.1}
              position={[mousePos.x / 1000 - 0.3, -mousePos.y / 1000 + 1, 0]}
              image={ThreeDHoverPath}
            />
          )}
        </Suspense>
      </Canvas>
      <main className="sm:px-8 px-4 sm:pt-40 pt-20 flex w-full relative">
        <h1 className="z-10 font-display xl:text-[27.5rem] md:text-[15rem] xl:leading-[26rem] leading-[9.5rem] md:leading-[14rem] text-[10rem]">
          <div>Senne Bels</div>
          <div className="flex">
            <div className="font-body sm:text-2xl text-lg xl:w-[24.4rem] w-[8.9rem] md:w-[13.3rem] mt-[1.5rem] flex flex-col justify-center">
              <p>Hi 🦝</p>
              <p>I&apos;m a frontend developer</p>
              <p>from Belgium</p>
            </div>
            <div>Portfolio</div>
          </div>
        </h1>
      </main>
      <main className="relative flex overflow-x-hidden border-y h-24 border-light-secondary items-center w-auto overflow-hidden font-bold dark:border-dark-secondary">
        <div className="py-12 animate-marquee whitespace-nowrap items-center flex gap-x-4">
          <p className="text-7xl w-64 text-center">Welcome</p>
          <p className="text-7xl w-64 text-center">欢迎</p>
          <p className="text-7xl w-64 text-center">Bienvenue</p>
          <p className="text-3xl w-64 text-center">いらっしゃいませ</p>
          <p className="text-7xl w-64 text-center">Willkommen</p>
        </div>

        <div className="absolute px-2 animate-marquee2 items-center whitespace-nowrap flex gap-x-4">
          <p className="text-7xl w-64 text-center">مرحباً</p>
          <p className="text-7xl w-64 text-center">Bienvenido</p>
          <p className="text-3xl w-64 text-center">добро пожаловать</p>
          <p className="text-7xl w-64 text-center">Benvenuto</p>
          <p className="text-7xl w-64 text-center">स्वागत</p>
        </div>
      </main>
      <main className="w-full h-96 py-40"></main>
      <Marquee
        wordList={[
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
        ]}
      />

      <main className="w-full  h-full z-20 grid sm:grid-cols-2 grid-cols-1 dark:divide-dark-secondary divide-light-secondary">
        <section className="w-full xl:h-[30rem] lg:h-[20rem] sm:border-r border-b dark:border-dark-secondary border-light-secondary">
          <Link
            href="/project/lynx"
            className="border-2 border-light-primary dark:border-dark-primary dark:hover:border-dark-secondary overflow-hidden p-10 hover:border-light-secondary w-full h-full flex flex-col"
          >
            <section className=" h-full relative">
              <Image
                src="assets/images/web/lynx-logo.svg"
                className="w-full xl:h-[20rem] lg:h-[10rem] object-cover"
                alt=""
                unoptimized
                fill
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">
              LYNX LOCAL TAXES
            </p>
          </Link>
        </section>

        <section className="w-full xl:h-[30rem] lg:h-[20rem] sm:border-r dark:border-dark-secondary border-light-secondary">
          <Link
            href="/project/musicians"
            className="border-2 border-light-primary dark:border-dark-primary overflow-hidden p-10 hover:border-light-secondary hover:dark:border-dark-secondary w-full h-full flex flex-col"
          >
            <section className=" h-full relative">
              <Image
                src="assets/images/web/musicians.jpeg"
                className="w-full xl:h-[20rem] lg:h-[10rem] object-cover"
                alt=""
                unoptimized
                fill
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">MUSICIANS</p>
          </Link>
        </section>

        <section className="w-full xl:h-[30rem] lg:h-[20rem] sm:border-r border-t border-light-secondary">
          <Link
            href="/project/3d-portfolio"
            className="border-2 dark:border-dark-primary border-light-primary overflow-hidden p-10 hover:border-light-secondary hover:dark:border-dark-secondary w-full h-full flex flex-col"
          >
            <section className=" h-full relative">
              <Image
                src="assets/images/web/3d.png"
                className="w-full xl:h-[20rem] lg:h-[10rem] object-cover"
                alt=""
                unoptimized
                fill
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">3D PORTFOLIO</p>
          </Link>
        </section>

        <section className="w-full xl:h-[30rem] lg:h-[20rem] border-t dark:border-dark-primary border-light-secondary">
          <Link
            href="/project/dnd-app"
            className="border-2 dark:border-dark-primary border-light-primary overflow-hidden p-10 hover:border-light-secondary hover:dark:border-dark-secondary w-full h-full flex flex-col"
          >
            <section className="h-full relative">
              <Image
                src="assets/images/web/dnd-app.png"
                className="w-full xl:h-[20rem] lg:h-[10rem] object-cover"
                alt=""
                unoptimized
                fill
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">DND APP</p>
          </Link>
        </section>
      </main>

      <Marquee
        wordList={[
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
          "3D MODELS",
        ]}
      />
      <main className="w-full h-[20rem] flex flex-col relative">
        <section
          onMouseLeave={() => {
            setThreeDHoverPath("");
          }}
          className="absolute inset-0"
        >
          <div
            onMouseEnter={() => {
              setThreeDHoverPath("assets/images/3D/velociraptor.png");
            }}
            className="border-t h-20 border-light-tertiary flex items-center pl-32"
          >
            <p>2022</p>
            <p className="uppercase ml-32 text-2xl">VELOCIRAPTOR</p>
          </div>
          <div
            onMouseEnter={() => {
              setThreeDHoverPath("assets/images/3D/room.png");
            }}
            className="border-t h-20 border-light-tertiary flex items-center pl-32"
          >
            <p>2022</p>
            <p className="uppercase ml-32 text-2xl">MY ROOM</p>
          </div>
          {/* <div className="border-t h-20 border-light-tertiary flex items-center pl-32">
            <p>2023</p>
            <p className="uppercase ml-32 text-2xl">HOUSE</p>
          </div> */}
          <div
            onMouseEnter={() => {
              setThreeDHoverPath("assets/images/3D/laptop.png");
            }}
            className="border-t h-20 border-light-tertiary flex items-center pl-32"
          >
            <p>2023</p>
            <p className="uppercase ml-32 text-2xl">LAPTOP</p>
          </div>
          <div
            onMouseEnter={() => {
              setThreeDHoverPath("assets/images/3D/pangolin.png");
            }}
            className="border-t h-20 border-light-tertiary flex items-center pl-32"
          >
            <p>2023</p>
            <p className="uppercase ml-32 text-2xl">PANGOLIN</p>
          </div>
        </section>
      </main>
      <main className="w-full h-[50rem] py-40 border-t dark:border-dark-secondary border-light-secondary relative">
        <h2 className="font-bold text-[13rem] absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2">
          Reach out
        </h2>
        <section className="text-7xl flex px-40 justify-between mt-[30rem]">
          <div>
            <a href="https://www.linkedin.com/in/sennebels/">
              <TfiLinkedin />
            </a>
          </div>
          <div>
            <p
              className="cursor-pointer"
              onClick={() => {
                navigator.clipboard.writeText("sennebels@gmail.com");
              }}
            >
              <TfiEmail />
            </p>
          </div>
          <div>
            <a href="https://github.com/snenenenenenene">
              <TfiGithub />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
