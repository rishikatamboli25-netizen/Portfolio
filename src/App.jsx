import React, { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Stack from "./components/Stack";
import Build from "./components/Build";
import Footer from "./components/Footer";

import { SmokeyFluidCursor } from "react-smokey-fluid-cursor";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (event) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div className="w-full overflow-x-clip">
      <Navbar />

      {/* =========================
          HERO
      ========================= */}
      <section
        id="start"
        className="
          relative
          min-h-screen
          overflow-hidden
          md:h-screen
        "
      >
        {/* FLUID SIMULATION — DESKTOP ONLY */}
        {isDesktop && <SmokeyFluidCursor />}

        <main
          className="
            relative
            z-10
            flex
            min-h-screen
            w-full
            flex-col
            items-center
            justify-center
            px-5
            py-20
            text-center

            sm:px-8

            md:mx-auto
            md:w-fit
            md:items-stretch
            md:justify-center
            md:px-0
            md:py-0
            md:text-left
          "
        >
          {/* =========================
              MEET ROW
          ========================= */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-2

              sm:gap-3

              md:justify-start
            "
          >
            <span className="shrink-0">
              <svg
                className="
                  h-8
                  w-10

                  sm:h-9
                  sm:w-11

                  md:h-10
                  md:w-[50px]
                "
                viewBox="84 44 152 107"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="84"
                  y="44"
                  width="152"
                  height="107"
                  fill="none"
                />

                <rect
                  x="86"
                  y="46"
                  width="148"
                  height="103"
                  rx="26"
                  ry="26"
                  fill="#000000"
                  stroke="#ffffff"
                  strokeWidth="4"
                />

                <circle
                  cx="120"
                  cy="80"
                  r="9"
                  fill="#ffffff"
                />

                <circle
                  cx="200"
                  cy="80"
                  r="9"
                  fill="#ffffff"
                />

                <line
                  x1="145"
                  y1="120"
                  x2="175"
                  y2="120"
                  stroke="#ffffff"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            <span
              className="
                bg-primary
                px-2
                py-1
                font-grotesk
                text-base
                font-light
                uppercase
                leading-none
                tracking-widest
                text-black

                sm:text-lg

                md:text-[1.4rem]
              "
            >
              meet
            </span>
          </div>

          {/* =========================
              NAME
          ========================= */}
          <div
            className="
              pt-3
              font-montaga
              text-5xl
              leading-[0.92]
              text-primary

              sm:text-6xl

              md:text-[5rem]
              md:leading-none
            "
          >
            Rishika Tamboli
          </div>

          {/* =========================
              DESCRIPTION
          ========================= */}
          <p
            className="
              mt-3
              max-w-xl
              font-inter
              text-sm
              font-thin
              leading-relaxed
              text-primary/75

              sm:text-base

              md:mt-0
            "
          >
            An aspiring web developer focused on clear logic and responsive
            design.
          </p>

          {/* =========================
              SCROLL INDICATOR
          ========================= */}
          <div
            className="
              absolute
              bottom-5
              left-1/2
              flex
              -translate-x-1/2
              items-center
              gap-2
              opacity-70

              md:bottom-4
            "
          >
            <div className="flex w-max flex-col items-end gap-1 font-inter">
              <span className="block whitespace-nowrap text-xs leading-none text-primary">
                Scroll down
              </span>

              <span className="block whitespace-nowrap text-[10px] leading-none text-primary/75 sm:text-xs">
                to discover more
              </span>
            </div>

            <div
              className="
                flex
                h-9
                w-3
                justify-center
                rounded-xl
                border
                border-primary
                pt-1

                sm:h-10
                sm:w-3.5

                md:h-[4vh]
                md:w-[1vw]
              "
            >
              <span className="h-2 w-0.5 bg-primary sm:h-2.5 md:h-[1vh]" />
            </div>
          </div>
        </main>
      </section>

      {/* PROFILE */}
      <section id="profile">
        <Profile />
      </section>

      {/* STACK */}
      <section id="stack">
        <Stack />
      </section>

      {/* BUILD */}
      <section
        id="build"
        className="
          relative
          h-auto
          md:h-[150vh]
        "
      >
        <div className="sticky left-0 z-20">
          <Build />
        </div>

        <div id="talk">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default App;

