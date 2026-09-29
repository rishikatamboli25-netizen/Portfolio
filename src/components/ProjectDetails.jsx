import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-primary flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-inter text-primary/60 mb-4">
            Project not found.
          </p>

          <Link
            to="/"
            className="
              inline-block
              font-grotesk
              uppercase
              border
              border-primary/30
              px-5
              py-3
              transition-all
              duration-500
              hover:bg-primary
              hover:text-black
            "
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-primary">
      {/* =========================
          HEADER
      ========================= */}
      <header
        className="
          flex
          items-center
          justify-between
          border-b
          border-primary/15
          px-5
          py-5

          sm:px-8
          sm:py-6

          md:px-[4vw]
          md:py-6
        "
      >
        <Link
          to="/"
          className="
            font-grotesk
            text-xs
            uppercase
            tracking-wider
            transition-opacity
            duration-300
            hover:opacity-50

            sm:text-sm
          "
        >
          ← Back
        </Link>

        <span
          className="
            font-grotesk
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-primary/50

            sm:text-xs
          "
        >
          Project / {project.number}
        </span>
      </header>

      {/* =========================
          HERO
      ========================= */}
      <section
        className="
          px-5
          pb-16
          pt-14

          sm:px-8
          sm:pb-20
          sm:pt-20

          md:px-[4vw]
          md:pb-[10vw]
          md:pt-[8vw]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8

            md:grid-cols-[8%_1fr]
            md:gap-[2vw]
          "
        >
          {/* PROJECT NUMBER */}
          <span
            className="
              hidden
              font-inter
              text-xs
              text-primary/40

              md:block
              md:pt-2
            "
          >
            {project.number}
          </span>

          <div className="min-w-0">
            {/* CATEGORY */}
            <p
              className="
                mb-3
                font-grotesk
                text-[10px]
                uppercase
                tracking-[0.16em]
                text-primary/50

                sm:text-xs
              "
            >
              {project.category}
            </p>

            {/* TITLE */}
            <h1
              className="
                max-w-full
                break-words
                font-montaga
                text-6xl
                leading-[0.82]
                tracking-[-0.04em]

                sm:text-7xl

                md:text-[clamp(5rem,12vw,12rem)]
                md:leading-[0.78]
              "
            >
              {project.title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-none
                font-inter
                text-sm
                leading-relaxed
                text-primary/65

                sm:mt-10
                sm:text-base

                md:mt-12
                md:max-w-[600px]
              "
            >
              {project.description}
            </p>

            {/* TECH PILLS */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-x-2
                gap-y-2
                font-grotesk
                text-[10px]
                uppercase
                tracking-wider

                sm:mt-8
                sm:text-xs
              "
            >
              {project.tech.map((item, index) => (
                <React.Fragment key={item}>
                  <span className="rounded-full border border-white/30 px-2 py-1">
                    {item}
                  </span>

                  {index !== project.tech.length - 1 && (
                    <span className="text-primary/30">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* ACTIONS */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-2

                sm:flex
                sm:flex-wrap
                sm:gap-3

                md:mt-10
              "
            >
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  w-full
                  border
                  border-primary
                  bg-primary
                  px-5
                  py-3
                  text-center
                  font-grotesk
                  text-xs
                  uppercase
                  tracking-wider
                  text-black
                  transition-all
                  duration-500
                  hover:bg-transparent
                  hover:text-primary

                  sm:w-auto
                "
              >
                Visit Project ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  w-full
                  border
                  border-primary/30
                  px-5
                  py-3
                  text-center
                  font-grotesk
                  text-xs
                  uppercase
                  tracking-wider
                  transition-all
                  duration-500
                  hover:bg-primary
                  hover:text-black

                  sm:w-auto
                "
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div
          className="
            mx-auto
            mt-12
            aspect-[4/3]
            w-full
            overflow-hidden
            border
            border-primary/15

            sm:mt-14
            sm:aspect-video

            md:mt-[7vw]
            md:w-[80%]
          "
        >
          <img
            src={project.heroImage}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />
        </div>
      </section>

      {/* =========================
          OVERVIEW
      ========================= */}
      <section
        className="
          border-t
          border-primary/15
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-[4vw]
          md:py-[2vw]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            font-grotesk
            text-[10px]
            uppercase
            tracking-widest

            sm:text-xs
          "
        >
          <span className="font-inter text-primary/35">01</span>
          <span>Overview</span>
        </div>

        <p
          className="
            mt-8
            max-w-none
            font-inter
            text-xl
            leading-[1.4]
            text-primary/80

            sm:mt-10
            sm:text-2xl

            md:mt-12
            md:max-w-[70vw]
            md:text-[clamp(1.5rem,2vw,2rem)]
            md:leading-[1.25]
          "
        >
          {project.overview}
        </p>
      </section>

      {/* =========================
          FEATURES
      ========================= */}
      <section
        className="
          border-t
          border-primary/15
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-[4vw]
          md:py-[9vw]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            font-grotesk
            text-[10px]
            uppercase
            tracking-widest

            sm:text-xs
          "
        >
          <span className="font-inter text-primary/85">02</span>
          <span>Features</span>
        </div>

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3

            sm:gap-4

            md:grid-cols-2
            md:gap-0
          "
        >
          {project.features.map((feature, index) => (
            <article
              key={feature.title}
              className="
                flex
                min-h-48
                flex-col
                border
                border-primary/55
                p-5

                sm:min-h-52
                sm:p-6

                md:my-4
                md:mx-2
                md:min-h-0
                md:p-8
              "
            >
              <span className="font-inter text-xs text-primary/55">
                0{index + 1}
              </span>

              <h3
                className="
                  mt-3
                  flex
                  items-center
                  gap-2
                  font-grotesk
                  text-base
                  tracking-wider

                  sm:text-lg

                  md:mt-2
                  md:min-h-[5vh]
                "
              >
                <feature.icon size={18} />
                {feature.title}
              </h3>

              <p
                className="
                  mt-2
                  max-w-none
                  font-inter
                  text-xs
                  leading-relaxed
                  text-primary/50

                  md:mt-1
                  md:max-w-[380px]
                "
              >
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          PROJECT PREVIEW
      ========================= */}
      <section
        className="
          border-t
          border-primary/15
          px-5
          py-12

          sm:px-8
          sm:py-16

          md:px-[4vw]
          md:py-[2vw]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            font-grotesk
            text-[10px]
            uppercase
            tracking-widest

            sm:text-xs
          "
        >
          <span className="font-inter text-primary/35">03</span>
          <span>Project Preview</span>
        </div>

        <div
          className="
            mt-8
            flex
            flex-col
            gap-5

            sm:gap-6

            md:flex-row
            md:gap-[5vw]
          "
        >
          {project.previews.map((image, index) => (
            <div
              key={image}
              className="
                relative
                w-full
                overflow-hidden
                border
                border-primary/15
              "
            >
              <span
                className="
                  absolute
                  left-3
                  top-3
                  z-10
                  bg-black
                  px-2
                  py-1
                  font-inter
                  text-[10px]

                  sm:left-4
                  sm:top-4
                "
              >
                0{index + 1}
              </span>

              <img
                src={image}
                alt={`${project.title} preview ${index + 1}`}
                className="
                  block
                  h-auto
                  w-full
                  transition-transform
                  duration-700
                  hover:scale-[1.02]
                "
              />
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          TECH STACK
      ========================= */}
      <section
        className="
          border-t
          border-primary/15
          px-5
          py-14

          sm:px-8
          sm:py-16

          md:px-[4vw]
          md:py-[5vw]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            font-grotesk
            text-[10px]
            uppercase
            tracking-widest

            sm:text-xs
          "
        >
          <span className="font-inter text-primary/35">04</span>
          <span>Tech Stack</span>
        </div>

        <div className="mt-8 border-t border-primary/15">
          {project.tech.map((technology, index) => (
            <div
              key={technology}
              className="
                flex
                items-center
                gap-4
                border-b
                border-primary/15
                py-3
              "
            >
              <span
                className="
                  w-8
                  shrink-0
                  font-inter
                  text-[10px]
                  text-primary/35

                  sm:w-[70px]
                  sm:text-xs
                "
              >
                0{index + 1}
              </span>

              <span
                className="
                  font-grotesk
                  text-sm
                  uppercase
                  tracking-wide

                  sm:text-base

                  md:text-[clamp(0.75rem,1.5vw,1.5rem)]
                "
              >
                {technology}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          WHAT I BUILT
      ========================= */}
      <section
        className="
          border-t
          border-primary/15
          px-5
          pb-10
          pt-14

          sm:px-8
          sm:pb-14
          sm:pt-16

          md:px-[4vw]
          md:pb-[1vw]
          md:pt-[9vw]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            font-grotesk
            text-[10px]
            uppercase
            tracking-widest

            sm:text-xs
          "
        >
          <span className="font-inter text-primary/35">05</span>
          <span>What I Built</span>
        </div>

        <p
          className="
            mx-auto
            mt-8
            max-w-none
            text-center
            font-inter
            text-xl
            font-light
            leading-[1.5]
            text-primary/80

            sm:mt-10
            sm:max-w-3xl
            sm:text-2xl

            md:mt-10
            md:max-w-[85vw]
            md:text-[clamp(1.3rem,2.5vw,2.5rem)]
            md:leading-[1.55]
          "
        >
          {project.built}
        </p>
      </section>

      {/* =========================
          FINAL CTA
      ========================= */}
      <section
        className="
          flex
          min-h-[28vh]
          flex-col
          items-center
          justify-center
          px-5
          pb-16
          pt-12
          text-center

          sm:px-8
          sm:pb-20
          sm:pt-16

          md:min-h-[25vh]
          md:px-[4vw]
          md:pb-[10vw]
        "
      >
        <p
          className="
            font-grotesk
            text-[10px]
            uppercase
            tracking-widest
            text-primary/50

            sm:text-xs
          "
        >
          Want to see it in action?
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="
            mt-5
            max-w-full
            break-words
            font-montaga
            text-4xl
            leading-[0.9]
            text-primary
            transition-all
            duration-500
            hover:opacity-50

            sm:text-5xl

            md:mt-6
            md:text-[clamp(2rem,5vw,5rem)]
          "
        >
          Visit {project.title} ↗
        </a>
      </section>

      {/* =========================
          FOOTER
      ========================= */}
      <footer
        className="
          flex
          flex-col
          items-start
          gap-3
          border-t
          border-primary/15
          px-5
          py-5
          font-grotesk
          text-[10px]
          uppercase
          tracking-wider

          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-8
          sm:py-6
          sm:text-xs

          md:px-[4vw]
        "
      >
        <span>{project.title}</span>

        <Link
          to="/"
          className="
            text-primary/50
            transition-colors
            duration-300
            hover:text-primary
          "
        >
          Back to Portfolio ↑
        </Link>
      </footer>
    </main>
  );
};

export default ProjectDetails;

