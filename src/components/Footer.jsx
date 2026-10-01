import React from "react";
import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const links = [
    { label: "Start", id: "start" },
    { label: "Profile", id: "profile" },
    { label: "Stack", id: "stack" },
    { label: "Builds", id: "build" },
    { label: "Talk", id: "talk" },
  ];

  const handleNavClick = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="relative pt-20 min-h-[50vh] overflow-hidden bg-primary px-4  py-8 text-black md:px-10 lg:px-[3.75rem]">
      {/* Decorative circles */}

      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-black/[0.10]" />

      <div className="pointer-events-none absolute -right-6 -top-8 h-52 w-52 rounded-full border border-black/[0.10]" />

      <div className="relative mx-auto flex min-h-[calc(50vh-4rem)] max-w-[1740px] flex-col justify-between">

        {/* ───────────────── TOP ───────────────── */}

        <div className="flex items-start justify-between">

          <div className="space-y-1">

            <p className="font-jakarta text-[10px] uppercase tracking-[0.24em] text-black/50">
              © {new Date().getFullYear()}
            </p>

            <p className="font-jakarta text-[10px] uppercase tracking-[0.24em] text-black/50">
              Have a project in mind?
            </p>

          </div>

          <p className="font-jakarta text-[10px] uppercase tracking-[0.24em] text-black/50">
            Based in India
          </p>

        </div>


        {/* ───────────────── MAIN ───────────────── */}

        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-[1fr_auto]">

          {/* CTA */}

          <div>

            <button
              type="button"
              onClick={() => handleNavClick("talk")}
              className="group inline-flex items-end text-left"
            >

              <h2
                className="
                  font-jakarta
                  text-[clamp(4.5rem,11vw,10rem)]
                  font-semibold
                  leading-[0.78]
                  tracking-[-0.075em]
                  transition-opacity
                  duration-300
                  group-hover:opacity-70
                "
              >
                Let's
                <br />
                talk
              </h2>

              {/* Arrow */}

              <span
                className="
                  ml-3 mb-1
                  flex
                  h-[clamp(4rem,6vw,6rem)]
                  w-[clamp(4rem,6vw,6rem)]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black
                  transition-all
                  duration-500
                  group-hover:rotate-45
                  group-hover:bg-black
                  group-hover:text-primary
                "
              >
                <span className="text-[clamp(2rem,3.5vw,4rem)] font-light leading-none">
                  ↗
                </span>
              </span>

            </button>

          </div>


          {/* Navigation */}

          <div className="flex md:gap-16 gap-4 pb-2 pr-5 md:pr-0">

            <div>

              <p className="mb-6 font-jakarta text-[10px] uppercase tracking-[0.22em] text-black/45">
                Explore
              </p>

              <nav className="flex flex-col gap-3">

                {links.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className="
                      group
                      flex
                      items-center
                      gap-2
                      font-jakarta
                      text-[12px]
                      uppercase
                      tracking-[0.08em]
                      text-left
                    "
                  >

                    <span className="h-px w-0 bg-black transition-all duration-300 group-hover:w-3" />

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.label}
                    </span>

                  </button>
                ))}

              </nav>

            </div>


            {/* Connect */}

            <div>

              <p className="mb-6 font-jakarta text-[10px] uppercase tracking-[0.22em] text-black/45">
                Connect
              </p>

              <div className="flex flex-col gap-4">

                <a
                  href="https://github.com/rishikatamboli25-netizen"
                  target="_blank"
                  rel="noopener nonreffer"
                  className="
                    flex
                    items-center
                    gap-3
                    font-jakarta
                    text-[12px]
                    uppercase
                    tracking-[0.08em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  <FaGithub size={13} />
                  Github
                </a>

                <a
                  href="https:/linkedin.com/"
                  target="_blank"
                  rel="noopener noreffer"
                  className="
                    flex
                    items-center
                    gap-3
                    font-jakarta
                    text-[12px]
                    uppercase
                    tracking-[0.08em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  <FaLinkedin size={13} />
                  Linkedin
                </a>

                <a
                  href="mailto:RishikaTamboli25@gmail.com"
                  target="_blank"
                  rel="noopener noreffer"
                  className="
                    flex
                    items-center
                    gap-3
                    font-jakarta
                    text-[12px]
                    tracking-[0.08em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  <FaEnvelope size={13} />
                  RishikaTamboli25@gmail.com
                </a>

                
                <a
                  className="
                    flex
                    items-center
                    gap-3
                    font-jakarta
                    text-[12px]
                    uppercase
                    tracking-[0.08em]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  <FaWhatsapp size={13} />
                  +91 9462298860
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ───────────────── BOTTOM ───────────────── */}

        <div className="flex items-end justify-between border-t border-black/15 pt-4 mt-2">

          <p className="font-jakarta text-[9px] uppercase leading-[1.6] tracking-[0.18em] text-black/45">
            Design & development
            <br />
            with intention.
          </p>


          {/* Back to top */}

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              group
              flex
              items-center
              gap-3
              font-jakarta
              text-[10px]
              uppercase
              tracking-[0.18em]
            "
          >
            Back to top

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-black/20
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:bg-black
                group-hover:text-primary
              "
            >
              <FaArrowUp size={10} />
            </span>

          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

