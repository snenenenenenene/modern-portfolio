import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen mt-32 px-24 flex flex-col">
      <h1 className=" font-display text-8xl flex flex-col">
        <span>Hey!</span>
        <span> I&apos;m Senne</span>
      </h1>
      <section className=" mt-20 text-body">
        <p>Hello there fellow web explorer!</p>
      </section>
      <div className="flex flex-col gap-y-4">
        <section className="flex gap-x-40">
          <p className="w-20">About</p>
          <p>Front-end developer from Belgium looking to move to Canada</p>
        </section>
        <section className="flex gap-x-40">
          <p className="w-20">Roles</p>
          <span className="flex flex-col">
            <p>Frontend</p>
            <p>3D Development</p>
            <p>Data science</p>
            <p>Artificial Intelligence</p>
          </span>
        </section>
        <section className="flex gap-x-40">
          <p className="w-20">Hobbies</p>
          <span className="flex flex-col">
            <p>Football</p>
            <p>History</p>
            <p>Linguistics</p>
            <p>Videogames</p>
            <p>Zoology</p>
          </span>
        </section>
        <section className="flex gap-x-40">
          <p className="w-20">Contact</p>
          <span className="flex flex-col">
            <p>sennebels@gmail.com</p>
            <p>Linkedin</p>
          </span>
        </section>
      </div>
    </div>
  );
};

export default About;
