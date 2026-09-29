import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorShapeRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorShape = cursorShapeRef.current;

    if (!cursor || !cursorShape) return;

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const current = {
      x: mouse.x,
      y: mouse.y,
    };

    let raf = null;

    // Disable native cursor
    document.documentElement.classList.add(
      "custom-cursor-active"
    );

    const requestRender = () => {
      if (raf === null) {
        raf = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.set(cursor, {
        opacity: 1,
      });

      requestRender();
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        duration: 0.12,
        overwrite: true,
      });
    };

    const handleMouseEnter = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      gsap.set(cursor, {
        opacity: 1,
      });

      requestRender();
    };

    const handleMouseDown = () => {
      gsap.to(cursorShape, {
        scale: 0.8,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorShape, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(2)",
      });
    };

    function render() {
      raf = null;

      current.x +=
        (mouse.x - current.x) * 0.28;

      current.y +=
        (mouse.y - current.y) * 0.28;

      // Only the outer wrapper controls position
      cursor.style.transform = `
        translate3d(${current.x}px, ${current.y}px, 0)
        translate(-50%, -50%)
      `;

      const distance = Math.hypot(
        mouse.x - current.x,
        mouse.y - current.y
      );

      if (distance > 0.1) {
        requestRender();
      }
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      { passive: true }
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    window.addEventListener(
      "mousedown",
      handleMouseDown
    );

    window.addEventListener(
      "mouseup",
      handleMouseUp
    );

    requestRender();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp
      );

      document.documentElement.classList.remove(
        "custom-cursor-active"
      );

      if (raf !== null) {
        cancelAnimationFrame(raf);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[99999]
      "
      style={{
        width: "24px",
        height: "24px",
        opacity: 0,
        willChange: "transform, opacity",
        mixBlendMode: "difference",
      }}
    >
      <div
        ref={cursorShapeRef}
        className="w-full h-full"
        style={{
          transform: "scale(1)",
          willChange: "transform",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 2.5L20.5 14.5C21.3 15 21.1 16.2 20.1 16.5L12.2 18.1L7.2 24.8C6.6 25.6 5.3 25.2 5.1 24.2L2 3.5C1.9 2.7 2.3 2.1 3 2.5Z"
            fill="white"
            stroke="white"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default CustomCursor;

