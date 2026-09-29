import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../assets/E-library.png";
import project2 from "../assets/Parking.png";
import project3 from "../assets/Visor1.png";
import project4 from "../assets/Car.png";

gsap.registerPlugin(ScrollTrigger);

const Build = () => {
  const cardsRef = useRef([]);
  const stageRefs = useRef([]);

  const Project = [
    {
      ProjectName: "Bookly",
      Img: project1,
      Desc: "A digital library that makes reading engaging with personalized goals, reading insights, and progress tracking.",
      link: "https://bookly-e-library.vercel.app/",
      detailpage: "/project/bookly",
    },
    {
      ProjectName: "ParkSpot",
      Img: project2,
      Desc: "Search any location to discover nearby parking spaces with live availability and essential facility information.",
      link: "https://park-spot-tau.vercel.app/",
      detailpage: "/project/parkspot",
    },
    {
      ProjectName: "VISOR",
      Img: project3,
      Desc: "Explore next-generation smart glasses with immersive features, sleek design, and complete pricing details.",
      link: "https://visor-rumg-iota.vercel.app/",
      detailpage: "/project/visor",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const stages = stageRefs.current;
      const cards = cardsRef.current;
      const totalCards = cards.length;

      if (!totalCards) return;

      /*
       * Vertical stacking scroll:
       *
       * Every card is `position: sticky; top: 0; height: 100vh`, one
       * after another in normal document flow. Scrolling through the
       * section naturally slides the next card up over the current
       * one — sticky handles the "stick to top, then get covered"
       * behaviour on its own, no pinning or manual x/y math needed.
       *
       * The only animation left to drive by hand is the *depth* cue:
       * as card N+1 rises to cover card N, card N eases back — a
       * slight scale-down only — so it reads as sliding underneath
       * rather than two flat layers snapping on top of each other.
       */
      cards.forEach((card, index) => {
        const nextStage = stages[index + 1];

        if (!nextStage) return;

        gsap.to(card, {
          scale: 0.92,
          ease: "none",
          force3D: true,

          scrollTrigger: {
            trigger: nextStage,
            start: "top bottom",
            end: "top top",
            scrub: 0.15,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-primary">
      {/* -------------------------------- */}
      {/* SECTION TITLE */}
      {/* -------------------------------- */}

      <div
        className="
          px-8
          pt-10
          font-montaga
          text-[2.5rem]
          leading-none
        "
      >
        Latest Creations
      </div>

      {/* -------------------------------- */}
      {/* CARD STACK */}
      {/* -------------------------------- */}

      {Project.map((project, index) => (
        <div
          key={project.ProjectName}
          ref={(el) => {
            stageRefs.current[index] = el;
          }}
          className="
            sticky
            top-0
            flex
            h-screen
            w-full
            items-center
            justify-center
          "
          style={{ zIndex: index + 1 }}
        >
          <article
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="
              flex
              h-[86vh]
              w-[90vw]
              max-w-[1500px]
              flex-col
              overflow-hidden
              border
              border-black/20
              bg-primary
              will-change-transform
            "
          >
            {/* ------------------------------ */}
            {/* PROJECT IMAGE */}
            {/* ------------------------------ */}

            <div
              className="
                flex
                h-[68%]
                w-full
                items-center
                justify-center
                overflow-hidden
                border-b
                border-black/10
                bg-primary
                p-4
              "
            >
              <img
                src={project.Img}
                alt={project.ProjectName}
                className="
                  max-h-full
                  max-w-full
                  object-contain
                "
              />
            </div>

            {/* ------------------------------ */}
            {/* PROJECT INFORMATION */}
            {/* ------------------------------ */}

            <div
              className="
                flex
                h-[32%]
                items-center
                justify-between
                px-6
                py-5
              "
            >
              {/* TEXT */}

              <div className="w-[55%]">
                <h2
                  className="
                    font-jakarta
                    text-[1.8rem]
                    font-semibold
                  "
                >
                  {project.ProjectName}
                </h2>

                <p
                  className="
                    mt-2
                    max-w-[800px]
                    font-inter
                    leading-snug
                  "
                >
                  {project.Desc}
                </p>
              </div>

              {/* BUTTONS */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                "
              >
                <a href={project.link}    target="_blank"
                rel="noreferrer">
                  <button
                    className="
                      border
                      border-black
                      px-4
                      py-2
                      transition-colors
                      duration-300
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    Visit
                  </button>
                </a>

                <a href={project.detailpage} >
                  <button
                    className="
                      border
                      border-black
                      px-4
                      py-2
                      transition-colors
                      duration-300
                      hover:bg-black
                      hover:text-white
                    "
                  >
                    Details
                  </button>
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Build;