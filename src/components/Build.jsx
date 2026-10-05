import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import project1 from "../assets/E-library.png";
import project2 from "../assets/Parking.png";
import project3 from "../assets/Visor1.png";

import CreatorDesk from "../assets/CreatorDesk1.png";
import CreatorDeskAdmin from "../assets/CreatorDeskAdmin1.png";

gsap.registerPlugin(ScrollTrigger);

const Build = () => {
  const cardsRef = useRef([]);
  const stageRefs = useRef([]);

  const Project = [
    {
      ProjectName: "Creator's Desk",
      Img: CreatorDesk,
      Desc: "A full-stack e-commerce platform for discovering and purchasing desk accessories, tech gear, and creator equipment.",
      link: "https://creator-s-desk.vercel.app/",
      detailpage: "/project/creatorsdesk",
    },
    {
      ProjectName: "CD Admin",
      Img: CreatorDeskAdmin,
      Desc: "A secure admin console for managing catalog, inventory, orders, payments, customers, invoices, and administrator access.",
      link: "https://creator-s-desk-x6h9.vercel.app/",
      detailpage: "/project/creatorsdeskadmin",
    },
    {
      ProjectName: "VISOR",
      Img: project3,
      Desc: "Explore next-generation smart glasses with immersive features, sleek design, and complete pricing details.",
      link: "https://visor-rumg-iota.vercel.app/",
      detailpage: "/project/visor",
    },
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
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const stages = stageRefs.current;
      const totalCards = cards.length;

      if (!totalCards) return;

      const mm = gsap.matchMedia();

      // Desktop only
      mm.add("(min-width: 768px)", () => {
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

      return () => mm.revert();
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full bg-primary">
      {/* SECTION TITLE */}
      <div
        className="
          px-5
          pt-8
          text-[2rem]
          leading-none
          sm:px-6
          sm:text-[2.25rem]
          md:px-8
          md:pt-10
          md:text-[2.5rem]
          font-montaga
        "
      >
        Latest Creations
      </div>

      {/* CARD STACK */}
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
            h-[84svh]
            w-full
            items-center
            justify-center
            md:h-screen
          "
          style={{ zIndex: index + 1 }}
        >
          <article
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="
              flex
              sm:h-auto
              w-[92%]
              flex-col
              overflow-hidden
              border
              border-black/20
              bg-primary
              will-change-transform

              md:h-[86vh]
              md:w-[90vw]
              md:max-w-[1500px]
            "
          >
            {/* PROJECT IMAGE */}
            <div
              className="
                flex
                h-[52%]
                w-full
                shrink-0
                items-center
                justify-center
                overflow-hidden
                border-b
                border-black/10
                bg-primary
                p-3

                sm:h-[55%]
                sm:p-4

                md:h-[68%]
                md:p-4
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

            {/* PROJECT INFORMATION */}
            <div
              className="
                flex
                flex-1
                flex-col
                h-[80vh]
                items-start
                md:justify-between
                px-4
                py-4

                sm:px-5
                sm:py-5

                md:flex-row
                md:items-center
                md:gap-0
                md:px-6
                md:py-5
              "
            >
              {/* TEXT */}
              <div className="w-full md:w-[55%]">
                <h2
                  className="
                    font-jakarta
                    text-[1.5rem]
                    font-semibold
                    leading-tight

                    sm:text-[1.7rem]

                    md:text-[1.8rem]
                  "
                >
                  {project.ProjectName}
                </h2>

                <p
                  className="
                    mt-2
                    max-w-none
                    font-inter
                    text-sm
                    leading-relaxed

                    sm:text-base

                    md:max-w-[800px]
                    md:leading-snug
                  "
                >
                  {project.Desc}
                </p>
              </div>

              {/* BUTTONS */}
              <div
                className="
                  grid
                  w-full
                  grid-cols-2
                  gap-2

                  sm:gap-3

                  md:flex
                  md:w-auto
                  md:items-center
                  md:justify-center
                  md:gap-3
                "
              >
                <Link to={project.link}>
                  <button
                    className="
                      w-full
                      border
                      border-black
                      px-4
                      py-2.5
                      font-inter
                      text-sm
                      transition-colors
                      duration-300
                      hover:bg-black
                      hover:text-white

                      md:w-auto
                      md:py-2
                    "
                  >
                    Visit
                  </button>
                </Link>

                <Link to={project.detailpage}>
                  <button
                    className="
                      w-full
                      border
                      border-black
                      px-4
                      py-2.5
                      font-inter
                      text-sm
                      transition-colors
                      duration-300
                      hover:bg-black
                      hover:text-white

                      md:w-auto
                      md:py-2
                    "
                  >
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Build;