import {
  FiBookOpen,
  FiGrid,
  FiLock,
  FiActivity,
  FiBox,
  FiMove,
  FiLayers,
  FiMail,
  FiMapPin,
  FiFilter,
  FiMap,
  FiSmartphone,
  FiCode,
  FiServer,
  FiDatabase,
  FiShield,
  FiMonitor,
  FiZap,
} from "react-icons/fi";

import visor1 from "../assets/Visor1.png";
import visor2 from "../assets/Visor2.png";
import visor3 from "../assets/Visor3.png";
import Park1 from "../assets/Park1.png";
import Park2 from "../assets/Park2.png";
import Park3 from "../assets/Park3.png";
import Bookly1 from "../assets/Bookly1.png"
import Bookly2 from "../assets/Bookly2.png"
import Bookly3 from "../assets/Bookly3.png"

const projects = {
  visor: {
    number: "01",
    title: "VISOR",
    category: "SMART GLASSES",

    description:
      "A product landing page for a next-generation smart glasses concept.",

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "React Three Fiber",
    ],

    liveUrl: "https://visor-rumg-iota.vercel.app/",
    githubUrl: "https://github.com/rishikatamboli25-netizen/Visor",

    heroImage: visor1,

    overview:
      "VISOR is a responsive product landing page designed around a clean technology-focused visual language. The experience combines product storytelling, motion, interactive 3D elements, pricing, testimonials, and a waitlist flow.",

    features: [
      {
        title: "3D PRODUCT",
        description:
          "Interactive 3D glasses model that responds to user movement.",
        icon: FiBox,
      },
      {
        title: "MOTION",
        description:
          "Smooth animations and transitions create an interactive product experience.",
        icon: FiMove,
      },
      {
        title: "PRODUCT SECTIONS",
        description:
          "Structured sections present capabilities, experience, testimonials, and pricing.",
        icon: FiLayers,
      },
      {
        title: "WAITLIST",
        description:
          "Interactive email waitlist form with an animated success state.",
        icon: FiMail,
      },
    ],

    previews: [
      visor2,
      visor3
    ],

    built:
      "I built the VISOR landing page as an interactive frontend experience with React, Tailwind CSS, Framer Motion, and React Three Fiber. The project focuses on combining product presentation with animation and interactive 3D visuals.",
  },

  bookly: {
    number: "02",
    title: "BOOKLY",
    category: "E-LIBRARY",

    description:
      "A web-based e-library platform for discovering, reading, and managing digital books.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],

    liveUrl: "https://bookly-e-library.vercel.app/",
    githubUrl: "https://github.com/rishikatamboli25-netizen/Bookly-E-Library",

    heroImage: Bookly1,

    overview:
      "Bookly is an e-library platform that provides users with a simple way to explore digital books, read PDFs directly in the browser, manage their library, and keep track of their reading progress.",

    features: [
      {
        title: "PDF READER",
        description:
          "Read digital books directly inside the application using an integrated PDF reader.",
        icon: FiBookOpen,
      },
      {
        title: "MY LIBRARY",
        description:
          "Manage recently opened and saved books from a personal library.",
        icon: FiGrid,
      },
      {
        title: "AUTHENTICATION",
        description:
          "JWT-based authentication with protected routes and user-specific data.",
        icon: FiLock,
      },
      {
        title: "READING PROGRESS",
        description:
          "Save and update reading progress so users can continue from where they stopped.",
        icon: FiActivity,
      },
    ],

    previews: [
        Bookly2,
        Bookly3
    ],

    built:
      "I built Bookly using React for the frontend and Node.js, Express, and MongoDB for the backend. The project includes authentication, book management, PDF reading, reading progress, collections, notes, and user-specific library features.",
  },

  parkspot: {
    number: "03",
    title: "PARKSPOT",
    category: "PARKING FINDER",

    description:
      "A single-page parking discovery tool for finding and comparing nearby parking spaces.",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Leaflet",
      "LocationIQ",
    ],

    liveUrl: "https://park-spot-tau.vercel.app/",
    githubUrl: "https://github.com/rishikatamboli25-netizen/ParkSpot",

    heroImage: Park1,

    overview:
      "ParkSpot is a single-page application designed to help users discover parking locations, compare available options, and filter results according to their requirements.",

    features: [
      {
        title: "LOCATION SEARCH",
        description:
          "Search for locations using location-based search and autocomplete.",
        icon: FiMapPin,
      },
      {
        title: "PARKING FILTERS",
        description:
          "Filter parking options based on price, covered parking, and EV charging availability.",
        icon: FiFilter,
      },
      {
        title: "INTERACTIVE MAP",
        description:
          "Display parking locations through an interactive map interface.",
        icon: FiMap,
      },
      {
        title: "RESPONSIVE UI",
        description:
          "Responsive interface designed for desktop, tablet, and mobile screens.",
        icon: FiSmartphone,
      },
    ],

    previews: [
      Park2,
      Park3
    ],

    built:
      "I built ParkSpot as a frontend-focused React application using Vite and Tailwind CSS. The project integrates location search, map visualization, parking filters, and responsive UI into a single-page experience.",
  },
};

export default projects;
