import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import myImage from "../assets/myImage.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "../components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const profileRef = useRef(null);
  const buttonsRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);

  // =========================
  // DESKTOP CHECK
  // =========================
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

  // =========================
  // PROFILE ANIMATIONS
  // =========================
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // PROFILE SECTION ANIMATION
      // =========================
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".black-box", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".cutout",
          {
            y: 80,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "<"
        )
        .from(
          ".hero-title",
          {
            x: -60,
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "<"
        )
        .from(
          ".hero-text",
          {
            y: 25,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.9,
            ease: "power2.out",
          },
          "<"
        )
        .from(
          ".hero-btn",
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "<"
        );

      // =========================
      // RADIAL BUTTON HOVER
      // DESKTOP ONLY
      // =========================
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const buttons = buttonsRef.current?.querySelectorAll(".gsap-btn");

        if (!buttons?.length) return;

        buttons.forEach((button) => {
          const fill = button.querySelector(".button-fill");
          const text = button.querySelector(".button-text");

          gsap.set(fill, {
            clipPath: "circle(0% at 50% 100%)",
            WebkitClipPath: "circle(0% at 50% 100%)",
          });

          const enter = () => {
            gsap.to(fill, {
              clipPath: "circle(150% at 50% 100%)",
              WebkitClipPath: "circle(150% at 50% 100%)",
              duration: 1.3,
              ease: "power3.out",
              overwrite: true,
            });

            gsap.to(text, {
              color: "#ffffff",
              duration: 1.3,
              ease: "power2.out",
              overwrite: true,
            });
          };

          const leave = () => {
            gsap.to(fill, {
              clipPath: "circle(0% at 50% 100%)",
              WebkitClipPath: "circle(0% at 50% 100%)",
              duration: 0.7,
              ease: "power3.inOut",
              overwrite: true,
            });

            gsap.to(text, {
              color: "#000000",
              duration: 0.3,
              ease: "power2.out",
              overwrite: true,
            });
          };

          button.addEventListener("mouseenter", enter);
          button.addEventListener("mouseleave", leave);

          button._enter = enter;
          button._leave = leave;
        });

        return () => {
          buttons.forEach((button) => {
            button.removeEventListener("mouseenter", button._enter);
            button.removeEventListener("mouseleave", button._leave);

            delete button._enter;
            delete button._leave;
          });
        };
      });

      return () => mm.revert();
    }, profileRef);

    return () => ctx.revert();
  }, []);

  // =========================
  // NAVIGATION
  // =========================
  const handleNavClick = (link) => {
    const section = document.getElementById(link);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* CUSTOM CURSOR — DESKTOP ONLY */}
      {isDesktop && <CustomCursor />}

      <section
        ref={profileRef}
        className="
          bg-primary
          px-5
          py-14
          text-black

          sm:px-8
          sm:py-16

          md:px-40
          md:py-24
        "
      >
        <div
          className="
            flex
            flex-col
            gap-12

            sm:gap-14

            md:flex-row
            md:gap-40
            md:py-0
          "
        >
          {/* =========================
              LEFT SIDE
          ========================= */}
          <div className="w-full md:w-auto">
            {/* BLACK BOX */}
            <div
              className="
                black-box
                group
                relative
                flex
                aspect-[4/3]
                w-full
                items-end
                justify-center
                overflow-hidden
                rounded-md
                bg-black

                sm:aspect-[5/4]

                md:h-[30vh]
                md:aspect-auto
                md:w-[25vw]
              "
            >
              {/* PROFILE INFO */}
              <div
                className="
                  absolute
                  left-4
                  top-8
                  z-20
                  hidden
                  opacity-0
                  transition-all
                  duration-150
                  ease-in
                  group-hover:opacity-100

                  md:block
                "
              >
                <span
                  className="
                    block
                    font-montaga
                    text-xl
                    font-semibold
                    leading-none
                    text-primary

                    lg:text-2xl
                  "
                >
                  Rishika Tamboli
                </span>

                <span
                  className="
                    block
                    pt-1
                    font-jakarta
                    text-xs
                    font-light
                    uppercase
                    leading-none
                    text-primary/80

                    lg:text-sm
                  "
                >
                  Web developer
                </span>
              </div>

              {/* CUTOUT */}
              <div className="cutout flex h-full items-end justify-center">
                <img
                  className="
                    relative
                    z-10
                    h-full
                    w-full
                    object-contain
                    object-bottom

                    md:h-auto
                    md:w-auto
                    md:max-h-full
                    md:transition-transform
                    md:duration-500
                    md:ease-out
                    md:group-hover:translate-x-14
                  "
                  src={myImage}
                  alt="Rishika Tamboli"
                />
              </div>
            </div>

            {/* =========================
                BUTTONS
            ========================= */}
            <div
              ref={buttonsRef}
              className="
                mt-6
                grid
                w-full
                grid-cols-2
                gap-3

                sm:mt-8
                sm:gap-4

                md:mt-16
                md:flex
                md:w-[25vw]
                md:justify-between
                md:gap-6
              "
            >
              {/* SEE WORK */}
              <button
                onClick={() => handleNavClick("build")}
                className="
                  gsap-btn
                  hero-btn
                  relative
                  w-full
                  overflow-hidden
                  border
                  border-black
                  py-2
                  font-montaga
                  text-sm

                  sm:py-2.5
                  sm:text-base

                  md:py-1
                "
              >
                {/* RADIAL BLACK FILL — DESKTOP ONLY */}
                <span
                  className="
                    button-fill
                    pointer-events-none
                    hidden
                    md:absolute
                    md:inset-0
                    md:block
                    md:bg-black
                  "
                />

                <span className="button-text relative z-10">
                  See Work
                </span>
              </button>

              {/* CONTACT */}
              <button
                onClick={() => handleNavClick("talk")}
                className="
                  gsap-btn
                  hero-btn
                  relative
                  w-full
                  overflow-hidden
                  border
                  border-black
                  py-2
                  font-montaga
                  text-sm

                  sm:py-2.5
                  sm:text-base

                  md:py-1
                "
              >
                {/* RADIAL BLACK FILL — DESKTOP ONLY */}
                <span
                  className="
                    button-fill
                    pointer-events-none
                    hidden
                    md:absolute
                    md:inset-0
                    md:block
                    md:bg-black
                  "
                />

                <span className="button-text relative z-10">
                  Contact
                </span>
              </button>
            </div>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div className="w-full md:flex-1">
            {/* TITLE */}
            <div
              className="
                hero-title
                font-montaga
                text-3xl
                leading-tight
                text-black

                sm:text-4xl

                md:text-[2.5rem]
              "
            >
              Beyond the Resume
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                hero-text
                whitespace-pre-line
                pt-5
                font-inter
                text-sm
                leading-relaxed
                tracking-wide

                sm:pt-6
                sm:text-base
                sm:leading-relaxed

                md:pt-6
                md:text-[1.2rem]
                md:tracking-wider
                md:leading-normal
              "
            >
              {`I’m Rishika Tamboli, a Computer Science Engineering student and creative web developer who enjoys turning ideas into clean, interactive digital experiences. I love exploring modern technologies, building responsive interfaces, and bringing thoughtful designs to life through code. With a curious mindset and a passion for creativity, I’m constantly learning, experimenting, and improving my skills. I enjoy working on meaningful projects that challenge me to think differently and create experiences that are simple, engaging, and visually appealing.
`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;

