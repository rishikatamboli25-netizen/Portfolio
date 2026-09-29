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
      tools: ["Node.js", "Expres", "MongoDB"],
    },
    {
      id: "03",
      title: "Infra & Tolls",
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
        })

          // Content appears as line reaches it
          .to(
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
      className="h-auto px-44 py-24 bg-black"
    >
      {/* Section Heading */}
      <div className="text-primary text-[2.5rem] font-montaga pb-20">
        The Building Blocks.
      </div>

      {/* Stack Blocks */}
      {stack.map((category) => (
        <div
          key={category.id}
          className="stack-block h-[30vh] flex gap-5"
        >
          {/* Number */}
          <div className="flex flex-col text-gray-500 justify-between">
            {category.id}
          </div>

          {/* Animated Line */}
          <div className="relative w-[1px] bg-primary/20 overflow-hidden">
            <div className="stack-line absolute top-0 left-0 w-full h-full bg-primary/65" />
          </div>

          {/* Content */}
          <div className="stack-content">
            <h1 className="text-primary font-montaga text-[1.7rem]">
              {category.title}
            </h1>

            <p className="text-[1rem] font-jakarta text-gray-400 font-thin">
              {category.description}
            </p>

            <div className="flex gap-2">
              {category.tools?.map((tool, index) => (
                <div
                  className="text-white pt-5"
                  key={index}
                >
                  {tool}

                  {index !== category.tools.length - 1 && (
                    <span className="text-gray-400 pl-2">
                      /
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Stack;