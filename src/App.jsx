import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Stack from "./components/Stack";
import Build from "./components/Build";
import Footer from "./components/Footer";
import { SmokeyFluidCursor } from "react-smokey-fluid-cursor";

const App = () => {
  const [heroActive, setHeroActive] = useState(true);

  



  return (
    <>
      <Navbar />

      <section id="start" className="relative h-screen overflow-hidden">
         <SmokeyFluidCursor />
        <main className="h-screen relative z-10 w-fit flex flex-col justify-center mx-auto">
          <div className="flex items-center gap-2">
            <span>
              <svg
                width="50"
                height="40"
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

            <span className="font-grotesk uppercase text-black bg-primary px-2 py-1 font-light tracking-widest text-[1.4rem] leading-none">
              meet
            </span>
          </div>

          <div className="font-montaga text-primary text-[5rem] leading-none pt-3">
            Rishika Tamboli
          </div>

          <p className="text-primary/75 font-inter font-thin">
            An aspiring web developer focused on clear logic and responsive
            design.
          </p>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 mx-auto mt-auto opacity-70">
            <div className="flex flex-col items-end w-fit gap-1 font-inter">
              <span className="block text-primary leading-none text-[0.8rem]">
                Scroll down
              </span>

              <span className="block text-primary/75 leading-none text-[0.77rem]">
                to discover more
              </span>
            </div>

            <div className="h-[4vh] w-[1vw] border border-primary rounded-xl flex justify-center pt-1">
              <span className="h-[1vh] w-[2px] bg-primary"></span>
            </div>
          </div>
        </main>
      </section>


      <section id="profile">
        <Profile />
      </section>

    <section id="stack">
      <Stack />
    </section>

      <section id="build" className="relative h-[150vh]">
    
    <div className="sticky z-20 left-0">
        <Build />
    </div>

    <div id="talk">
        <Footer />
    </div>

</section>

    </>
  );
};

export default App;