import React from "react";

export const Navbar = () => {
  return (
    <nav className=" font-body w-full h-14 border-b border-light-secondary flex">
      <section className="border-r text-5xl border-light-secondary flex justify-center items-center w-40 h-full">
        <h2 className="font-display tracking-wide">Senne Bels</h2>
      </section>
      <section className="flex items-center ml-auto gap-8 px-8">
        <p>PROJECTS</p>
        <p>ABOUT</p>
      </section>
      <section className="w-40 border-l border-light-secondary flex justify-center items-center">
        <button>SUN</button>
      </section>
    </nav>
  );
};
