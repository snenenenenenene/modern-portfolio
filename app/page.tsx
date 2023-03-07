import { Navbar } from "./components/common/Navbar";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden pb-96 text-light-secondary flex flex-col bg-light-primary">
      <Navbar />
      <main className="px-5 pt-24 flex w-full">
        <h1 className=" font-display text-[27.5rem] leading-[26rem]">
          <div>Senne Bels</div>
          <div className="flex">
            <div className="font-body text-2xl w-[24.4rem] flex flex-col justify-center">
              <p>Hi 🦝</p>
              <p>I&apos;m a frontend developer</p>
              <p>from Belgium</p>
            </div>
            <div>Portfolio</div>
          </div>
        </h1>
      </main>
      <main className="relative flex overflow-x-hidden border-y h-24 border-light-secondary items-center w-auto overflow-hidden font-bold">
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
      <main className="relative flex overflow-x-hidden border-y h-24 border-light-secondary items-center w-auto overflow-hidden font-bold">
        <div className="py-12 animate-marquee whitespace-nowrap items-center flex gap-x-4">
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
        </div>

        <div className="absolute px-2 animate-marquee2 items-center whitespace-nowrap flex gap-x-4">
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
          <p className="text-7xl text-center">WEB DEVELOPMENT</p>
        </div>
      </main>
      <main className="w-full h-full grid grid-cols-2 divide-light-secondary">
        <section className="w-full h-[35rem] border-r border-light-secondary">
          <div className="border-2 border-light-primary overflow-hidden p-10 hover:border-light-secondary w-full h-full flex flex-col">
            <section className=" h-full">
              <img
                src="assets/lynx-logo.svg"
                className="w-full h-[25rem] object-cover"
                alt=""
                loading="lazy"
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">
              LYNX LOCAL TAXES
            </p>
          </div>
        </section>

        <section className="w-full h-[35rem] border-r border-light-secondary">
          <div className="border-2 border-light-primary overflow-hidden p-10 hover:border-light-secondary w-full h-full flex flex-col">
            <section className=" h-full">
              <img
                src="assets/musicians.jpeg"
                className="w-full h-[25rem] object-cover"
                alt=""
                loading="lazy"
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">
              LYNX LOCAL TAXES
            </p>
          </div>
        </section>

        <section className="w-full h-[35rem] border-r border-light-secondary">
          <div className="border-2 border-light-primary overflow-hidden p-10 hover:border-light-secondary w-full h-full flex flex-col">
            <section className=" h-full">
              <img
                src="assets/3d.png"
                className="w-full h-[25rem] object-cover"
                alt=""
                loading="lazy"
              />
            </section>
            <p className="text-6xl font-display ml-auto mt-5">3D PORTFOLIO</p>
          </div>
        </section>

        <section className="w-full h-96 border-t border-light-secondary">
          <div className="border-2 border-light-primary hover:border-light-secondary w-full h-full">
            <section></section>
          </div>
        </section>
      </main>

      <main className="relative flex overflow-x-hidden border-y h-24 border-light-secondary items-center w-auto overflow-hidden font-bold">
        <div className="py-12 animate-marquee whitespace-nowrap items-center flex gap-x-4">
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
        </div>

        <div className="absolute px-2 animate-marquee2 items-center whitespace-nowrap flex gap-x-4">
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
          <p className="text-7xl text-center">3D MODELS</p>
        </div>
      </main>
      <main className="w-full h-96 flex flex-col">
        <div className="border-t h-20 border-light-tertiary flex items-center pl-32">
          <p>2022</p>
          <p className="uppercase ml-32 text-2xl">VELOCIRAPTOR</p>
        </div>
        <div className="border-t h-20 border-light-tertiary flex items-center pl-32">
          <p>2022</p>
          <p className="uppercase ml-32 text-2xl">VELOCIRAPTOR</p>
        </div>
        <div className="border-t h-20 border-light-tertiary flex items-center pl-32">
          <p>2022</p>
          <p className="uppercase ml-32 text-2xl">VELOCIRAPTOR</p>
        </div>
        <div className="border-t h-20 border-light-tertiary flex items-center pl-32">
          <p>2022</p>
          <p className="uppercase ml-32 text-2xl">VELOCIRAPTOR</p>
        </div>
        <div className="border-t h-20 border-light-tertiary flex items-center pl-32">
          <p>2022</p>
          <p className="uppercase ml-32 text-2xl">VELOCIRAPTOR</p>
        </div>
      </main>
      <main className="w-full h-96 py-40 border-t border-light-secondary relative">
        <h2 className="font-bold text-[13rem] absolute left-1/2 top-1/2  -translate-x-1/2">
          Reach out
        </h2>
      </main>
    </div>
  );
}
