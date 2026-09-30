import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Talk = () => {
  return (
    <section
      className="
        h-fit
        border-t
        border-gray-300
        bg-primary
        px-5
        py-12
        text-center

        sm:px-8
        sm:py-14

        md:py-16
      "
    >
      {/* =========================
          MAIN CONTENT
      ========================= */}
      <div
        className="
          w-full
          max-w-4xl
          font-jakarta
        "
      >
        {/* HEADING */}
        <h2
          className="
            text-2xl
            font-semibold
            leading-tight

            sm:text-3xl

            md:text-[2.5rem]
          "
        >
          Let's build something{" "}
          <span className="text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.2)]">
            solid,
          </span>{" "}
          and fast.
        </h2>

        {/* EMAIL */}
        <a
          href="mailto:rishikatamboli25@gmail.com"
          className="
            mt-2
            block
            break-all
            font-jakarta
            text-base
            font-thin
            underline
            underline-offset-2

            sm:text-lg

            md:text-[1.5rem]
          "
        >
          Rishikatamboli25@gmail.com
        </a>
      </div>

      {/* =========================
          SOCIAL LINKS
      ========================= */}
      <div
        className="
          mt-6
          flex
          w-full
          max-w-md
          flex-col
          gap-3

          sm:flex-row
          sm:justify-center
          sm:gap-5

          md:mt-4
          md:max-w-none
          md:gap-7
        "
      >
        <a
          href="https://github.com/rishikatamboli25-netizen"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            border
            border-gray-400
            px-6
            py-2
            font-jakarta
            text-sm
            font-thin
            uppercase
            transition-colors
            duration-300
            hover:bg-black
            hover:text-white

            sm:w-auto

            md:px-8
            md:py-1
          "
        >
          <FaGithub size={20} />
          Github
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            border
            border-gray-400
            px-6
            py-2
            font-jakarta
            text-sm
            font-thin
            uppercase
            transition-colors
            duration-300
            hover:bg-black
            hover:text-white

            sm:w-auto

            md:px-8
            md:py-1
          "
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Talk;

