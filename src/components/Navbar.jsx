import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [selected, setSelected] = useState("Start");

  const navLinks = [
    { name: "Start", href: "/start", id: "start" },
    { name: "Profile", href: "/profile", id: "profile" },
    { name: "Stack", href: "/stack", id: "stack" },
    { name: "Builds", href: "/build", id: "build" },
    { name: "Talk", href: "/talk", id: "talk" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight * 0.35;

      let currentSection = "start";

      const sections = navLinks
        .map((link) => ({
          ...link,
          element: document.getElementById(link.id),
        }))
        .filter((section) => section.element);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (
          scrollPosition >= section.element.offsetTop
        ) {
          currentSection = section.id;
          break;
        }
      }

      const activeLink = navLinks.find(
        (link) => link.id === currentSection
      );

      if (activeLink) {
        setSelected(activeLink.name);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (link) => {
    const section = document.getElementById(link.id);

    if (!section) return;

    setSelected(link.name);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <header className="fixed justify-self-center z-50">
        <nav
          className="
            bg-primary
            [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_4px),calc(100%_-_4px)_100%,4px_100%,0_calc(100%_-_4px))]
            h-[5vh]
            w-fit
            px-7
            text-[0.8rem]
            cursor-pointer
          "
        >
          <ul
            className="
              flex
              h-full
              gap-4
              w-fit
              mx-auto
              font-jakarta
              font-thin
              uppercase
            "
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`
                  text-black
                  h-full
                  px-3
                  flex
                  items-center
                  ${
                    selected === link.name
                      ? "bg-black/30 text-black border-t-2 border-black"
                      : ""
                  }
                `}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
