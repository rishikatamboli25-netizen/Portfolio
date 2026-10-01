import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stack = () => {
  const sectionRef = useRef(null);

  const stack = [
    {
      id: "01",
      title: "Frontend",
      description: "What runs in the browser",
      tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      id: "02",
      title: "Backend",
      description: "Where the logic and data live",
      tools: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "03",
      title: "Infra & Tools",
      description: "What keeps it running",
      tools: ["Docker", "Kubernetes", "CI/CD", "AWS", "GitHub Actions"],
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray(".stack-block");

      blocks.forEach((block) => {
        const line = block.querySelector(".stack-line");
        const content = block.querySelector(".stack-content");

        // Initial state
        gsap.set(line, {
          scaleY: 0,
          transformOrigin: "top center",
        });

        gsap.set(content, {
          y: 50,
          opacity: 0,
        });

        // Animate only when THIS block enters viewport
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Line starts drawing from top
        tl.to(line, {
          scaleY: 1,
          duration: 0.8,
          ease: "power3.out",
        }).to(
          content,
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.35"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        bg-black
        px-5
        py-14

        sm:px-8
        sm:py-16

        md:h-auto
        md:px-44
        md:py-24
      "
    >
      {/* =========================
          SECTION HEADING
      ========================= */}
      <div
        className="
          pb-12
          font-montaga
          text-3xl
          leading-none
          text-primary

          sm:pb-16
          sm:text-[2.2rem]

          md:pb-20
          md:text-[2.5rem]
        "
      >
        The Building Blocks.
      </div>

      {/* =========================
          STACK BLOCKS
      ========================= */}
      <div className="flex flex-col">
        {stack.map((category) => (
          <div
            key={category.id}
            className="
              stack-block
              grid
              min-h-[170px]
              grid-cols-[auto_1px_1fr]
              gap-4
              pb-10

              sm:min-h-[190px]
              sm:gap-5
              sm:pb-12

              md:h-[30vh]
              md:grid-cols-none
              md:flex
              md:gap-5
              md:pb-0
            "
          >
            {/* NUMBER */}
            <div
              className="
                text-xs
                text-gray-500
                sm:text-sm
                md:pt-0
              "
            >
              {category.id}
            </div>
            {/* ANIMATED LINE */}
            <div
              className="
                relative
                w-px
                overflow-hidden
                bg-primary/20
                ml-2
              "
            >
              <div className="stack-line absolute left-0 top-0 h-full w-full bg-primary/65" />
            </div>

            {/* CONTENT */}
            <div className="stack-content min-w-0">
              <h1
                className="
                  font-montaga
                  text-2xl
                  leading-tight
                  text-primary

                  sm:text-[1.7rem]

                  md:text-[1.7rem]
                "
              >
                {category.title}
              </h1>

              <p
                className="
                  mt-1
                  font-jakarta
                  text-sm
                  font-thin
                  leading-relaxed
                  text-gray-400

                  sm:text-base

                  md:text-[1rem]
                "
              >
                {category.description}
              </p>

              {/* TOOLS */}
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-x-2
                  gap-y-2

                  md:mt-0
                  md:flex
                  md:gap-2
                "
              >
                {category.tools?.map((tool, index) => (
                  <React.Fragment key={tool}>
                    <div
                      className="
                        font-inter
                        text-sm
                        text-white

                        sm:text-base

                        md:pt-5
                      "
                    >
                      {tool}
                    </div>

                    {index !== category.tools.length - 1 && (
                      <span
                        className="
                          hidden
                          text-gray-500
                          md:inline
                          md:pl-0
                        "
                      >
                        /
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
