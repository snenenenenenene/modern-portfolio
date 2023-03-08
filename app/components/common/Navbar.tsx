"use client";

import React, { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const navbar = useRef<any>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function controlNavbar() {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY || window.scrollY < 32) {
        setShow(true);
      } else {
        setShow(false);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      ref={navbar}
      className={`${
        show ? "h-14 border-b border-light-secondary" : "h-0"
      } fixed z-50 bg-light-primary overflow-hidden font-body w-full  flex`}
    >
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
