import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-primary flex items-center justify-center">
        <div className="text-center">
          <p className="font-inter text-primary/60 mb-4">
            Project not found.
          </p>

          <Link
            to="/"
            className="font-grotesk uppercase border border-primary/30 px-5 py-3 transition-all duration-500 hover:bg-primary hover:text-black"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-primary overflow-hidden">

      <header className="flex items-center justify-between px-[4vw] py-6 border-b border-primary/15">
        <Link
          to="/"
          className="font-grotesk uppercase text-sm tracking-wider hover:opacity-50 transition-opacity duration-300"
        >
          ← Back
        </Link>

        <span className="font-grotesk uppercase text-xs tracking-widest text-primary/50">
          Project / {project.number}
        </span>
      </header>

      <section className="px-[4vw] pt-[8vw] pb-[10vw]">

        <div className="grid grid-cols-[8%_1fr] gap-[2vw]">

          <span className="font-inter text-xs text-primary/40 pt-2">
            {project.number}
          </span>

          <div>

            <p className="font-grotesk uppercase text-xs tracking-[0.15em] text-primary/50 mb-3">
              {project.category}
            </p>

            <h1 className="font-montaga text-[clamp(5rem,12vw,12rem)] leading-[0.78] tracking-[-0.04em]">
              {project.title}
            </h1>

            <p className="font-inter max-w-[600px] mt-12 text-base leading-relaxed text-primary/65">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-8 font-grotesk text-xs uppercase tracking-wider">
              {project.tech.map((item, index) => (
                <React.Fragment key={item}>
                  <span className=" px-2 py-1 rounded-full border border-white/30" >{item}</span>

                  {index !== project.tech.length - 1 && (
                    <span className="text-primary/30">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-10">

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="font-grotesk uppercase text-xs tracking-wider px-5 py-3 bg-primary text-black border border-primary transition-all duration-500 hover:bg-transparent hover:text-primary"
              >
                Visit Project ↗
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-grotesk uppercase text-xs tracking-wider px-5 py-3 border border-primary/30 transition-all duration-500 hover:bg-primary hover:text-black"
              >
                GitHub ↗
              </a>

            </div>

          </div>

        </div>

        <div className="w-[80%] mx-auto aspect-video mt-[7vw] overflow-hidden border border-primary/15">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-fit transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

      </section>

      <section className="px-[4vw] py-[2vw] border-t border-primary/15 gap-[4vw]">

        <div className="flex flex-col gap-2 font-grotesk uppercase text-xs tracking-widest">
          <span className="font-inter text-primary/35">01</span>
          <span>Overview</span>
        </div>

        <p className="font-inter max-w-[70vw] mt-12 text-[clamp(1.5rem,2vw,2rem)] leading-[1.25] text-primary/80">
          {project.overview}
        </p>

      </section>

      <section className="px-[4vw] py-[9vw] border-t border-primary/15 ">

        <div className="flex flex-col gap-2 font-grotesk uppercase text-xs tracking-widest">
          <span className="font-inter text-primary/85">02</span>
          <span>Features</span>
        </div>

        <div className="grid grid-cols-2">

          {project.features.map((feature, index) =>(
            <article
              key={feature.title}
              className=" p-8 border my-4 mx-2 border-primary/55 flex flex-col"
            >
              <span className="font-inter text-xs text-primary/55">
                0{index + 1}
              </span>

              <h3 className=" min-h-[5vh] font-grotesk flex items-center gap-2 text-lg tracking-wider mt-2">
                 <feature.icon size={18} /> {feature.title}
              </h3>

              <p className="font-inter text-xs leading-relaxed text-primary/50 max-w-[380px] mt-1">
                {feature.description}
              </p>
            </article>
          ))}

        </div>

      </section>

      <section className="px-[4vw] py-[2vw] border-t border-primary/15">

        <div className="flex flex-col gap-2 font-grotesk uppercase text-xs tracking-widest">
          <span className="font-inter text-primary/35">03</span>
          <span>Project Preview</span>
        </div>

        <div className="flex mt-8 gap-[5vw]">

          {project.previews.map((image, index) => (
            <div
              key={image}
              className="relative w-full overflow-hidden border border-primary/15"
            >
              <span className="absolute top-4 left-4 z-10 bg-black px-2 py-1 font-inter text-[10px]">
                0{index + 1}
              </span>

              <img
                src={image}
                alt={`${project.title} preview ${index + 1}`}
                className="block w-[100%] h-auto transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          ))}

        </div>

      </section>

      <section className="px-[4vw] py-[5vw] border-t border-primary/15">

        <div className="flex flex-col gap-2 font-grotesk uppercase text-xs tracking-widest">
          <span className="font-inter text-primary/35">04</span>
          <span>Tech Stack</span>
        </div>

        <div className="border-t mt-8 border-primary/15">

          {project.tech.map((technology, index) => (
            <div
              key={technology}
              className="flex items-center py-3 border-b border-primary/15"
            >
              <span className="w-[70px] font-inter text-xs text-primary/35">
                0{index + 1}
              </span>

              <span className="font-grotesk text-[clamp(0.75rem,1.5vw,1.5rem)] uppercase">
                {technology}
              </span>
            </div>
          ))}

        </div>

      </section>

      <section className="px-[4vw] pt-[9vw] pb-[1vw] border-t border-primary/15 border-b-0">

        <div className="flex flex-col gap-2 font-grotesk uppercase text-xs tracking-widest">
          <span className="font-inter text-primary/35">05</span>
          <span>What I Built</span>
        </div>

        <p className="mt-10 font-inter max-w-[85vw] text-[clamp(1.3rem,2.5vw,2.5rem)] font-light text-center mx-auto leading-[1.55] text-primary/80">
          {project.built}
        </p>

      </section>

      <section className="min-h-[25vh] px-[4vw] pb-[10vw] flex flex-col justify-center items-center text-center">

        <p className="font-grotesk uppercase text-xs tracking-widest text-primary/50">
          Want to see it in action?
        </p>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-montaga text-[clamp(2rem,5vw,5rem)] leading-[0.9] text-primary mt-6 hover:opacity-50 transition-all duration-500"
        >
          Visit {project.title} ↗
        </a>

      </section>

      <footer className="px-[4vw] py-6 border-t border-primary/15 flex items-center justify-between font-grotesk text-xs uppercase tracking-wider">

        <span>{project.title}</span>

        <Link
          to="/"
          className="text-primary/50 hover:text-primary transition-colors duration-300"
        >
          Back to Portfolio ↑
        </Link>

      </footer>

    </main>
  );
};

export default ProjectDetails;
