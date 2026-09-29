import React, { useLayoutEffect, useRef } from "react";
import myImage from "../assets/myImage.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomCursor from "../components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const profileRef = useRef(null);
  const buttonsRef = useRef(null);

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
      // TRUE RADIAL BUTTON HOVER
      // =========================
      const buttons = buttonsRef.current.querySelectorAll(".gsap-btn");

      buttons.forEach((button) => {
        const fill = button.querySelector(".button-fill");
        const text = button.querySelector(".button-text");

        // Start from a tiny point at the bottom-center
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
        });
      };
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
      {/* CUSTOM CURSOR */}
      <CustomCursor />

      <section
        ref={profileRef}
        className="bg-primary text-black px-40"
      >
        <div className="flex gap-40 py-24">

          {/* =========================
              LEFT SIDE
          ========================= */}
          <div>

            {/* BLACK BOX */}
            <div className="black-box group relative h-[30vh] w-[25vw] rounded-md bg-black flex justify-center items-end">

              {/* PROFILE INFO */}
              <div className="absolute top-10 left-3 opacity-0 group-hover:opacity-100 transition-all ease-in duration-150">
                <span className="block text-primary leading-none font-montaga font-semibold text-[1.5rem]">
                  Rishika Tamboli
                </span>

                <span className="block text-primary/80 uppercase font-jakarta font-light leading-none pt-1 text-[0.9rem]">
                  Web developer
                </span>
              </div>

              {/* CUTOUT */}
              <div className="cutout flex">
                <img
                  className="relative z-10 object-contain transition-transform duration-500 ease-out group-hover:translate-x-14"
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
              className="flex gap-6 w-[25vw] justify-between mt-16"
            >

              {/* SEE WORK */}
              <button
                onClick={() => handleNavClick("build")}
                data-magnetic
                className="gsap-btn hero-btn relative w-full py-1 border border-black font-montaga overflow-hidden"
              >
                {/* RADIAL BLACK FILL */}
                <span className="button-fill absolute inset-0 bg-black pointer-events-none" />

                {/* TEXT */}
                <span className="button-text relative z-10">
                  See Work
                </span>
              </button>

              {/* CONTACT */}
              <button
                onClick={() => handleNavClick("talk")}
                data-magnetic
                className="gsap-btn hero-btn relative w-full py-1 border border-black font-montaga overflow-hidden"
              >
                {/* RADIAL BLACK FILL */}
                <span className="button-fill absolute inset-0 bg-black pointer-events-none" />

                {/* TEXT */}
                <span className="button-text relative z-10">
                  Contact
                </span>
              </button>

            </div>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================= */}
          <div>

            {/* TITLE */}
            <div className="hero-title text-black text-[2.5rem] font-montaga">
              Beyond the Resume
            </div>

            {/* DESCRIPTION */}
            <p className="hero-text whitespace-pre-line pt-6 text-[1.2rem] font-inter tracking-wider">
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

