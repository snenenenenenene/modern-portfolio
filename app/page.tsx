"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { TfiEmail, TfiGithub, TfiLinkedin } from "react-icons/tfi";
import { Marquee } from "./components/common/Marquee";
import { Model } from "./components/common/Model";
import { Project } from "./components/common/Project";
import { ThreeDProjects } from "./components/common/ThreeDProjects";
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
        <h1 className="z-10 font-display xl:text-[27.5rem] md:text-[15rem] xl:leading-[26rem] xs:leading-[9.5rem] leading-[6.7rem] md:leading-[14rem] xs:text-[10rem] text-[7rem]">
          <div>Senne Bels</div>
          <div className="flex">
            <div className="font-body sm:text-2xl xs:text-lg  text-base xl:w-[24.4rem] xs:w-[8.9rem] w-[6.2rem] md:w-[13.3rem] xs:mt-[1.5rem]  flex flex-col justify-center">
              <p>Hi 🦝</p>
              <p>I&apos;m a frontend developer</p>
              <p>from Belgium</p>
            </div>
            <div>Portfolio</div>
          </div>
        </h1>
      </main>
      <Marquee
        wordList={[
          "Welcome",
          "欢迎",
          "Bienvenue",
          "いらっしゃいませ",
          "Willkommen",
          "مرحباً",
          "Bienvenido",
          "добро пожаловать",
          "Benvenuto",
          "स्वागत",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
        ]}
      />
      <main className="w-full h-20 sm:h-96 sm:py-40"></main>
      <Marquee
        wordList={[
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
          "WEB DEVELOPMENT",
        ]}
      />

      <main className="w-full h-full z-20 grid sm:grid-cols-2 grid-cols-1 dark:divide-dark-secondary divide-light-secondary">
        <Project
          className="sm:border-r border-b "
          link={"/project/lynx"}
          title="LYNX LOCAL TAXES"
          image="assets/images/web/lynx-logo.svg"
        />
        <Project
          title={"MUSICIANS"}
          link={"/project/musicians"}
          image={"assets/images/web/musicians.jpeg"}
          className="sm:border-r"
        />
        <Project
          title={"3D PORTFOLIO"}
          link={"/project/3d-portfolio"}
          image={"assets/images/web/3d.png"}
          className="sm:border-r border-t"
        />
        <Project
          title={"DND APP"}
          link={"/project/dnd-app"}
          image={"assets/images/web/dnd-app.png"}
          className="border-t"
        />
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
          <ThreeDProjects
            year={"2022"}
            setThreeDHoverPath={setThreeDHoverPath}
            image="assets/images/3D/velociraptor.png"
            title={"VELOCIRAPTOR"}
          />
          <ThreeDProjects
            year={"2022"}
            setThreeDHoverPath={setThreeDHoverPath}
            image="assets/images/3D/room.png"
            title={"MY ROOM"}
          />
          <ThreeDProjects
            year={"2023"}
            setThreeDHoverPath={setThreeDHoverPath}
            image="assets/images/3D/laptop.png"
            title={"LAPTOP"}
          />
          <ThreeDProjects
            year={"2023"}
            setThreeDHoverPath={setThreeDHoverPath}
            image="assets/images/3D/pangolin.png"
            title={"PANGOLIN"}
          />
        </section>
      </main>
      <main className="w-full h-[50rem] sm:py-40 border-t dark:border-dark-secondary border-light-secondary relative">
        <h2 className="font-bold sm:text-[13rem] text-[6rem] text-center absolute left-1/2 top-1/2 -translate-y-1/2  -translate-x-1/2">
          Reach out
        </h2>
        <section className="text-7xl flex sm:px-40 px-10 justify-between gap-x-10 sm:mt-[30rem] mt-[40rem]">
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
