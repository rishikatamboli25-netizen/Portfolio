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
  FiShield,
  FiShoppingCart,
  FiCreditCard,
  FiCpu,
  FiFileText,
} from "react-icons/fi";

import visor1 from "../assets/Visor1.png";
import visor2 from "../assets/Visor2.png";
import visor3 from "../assets/Visor3.png";

import Park1 from "../assets/Park1.png";
import Park2 from "../assets/Park2.png";
import Park3 from "../assets/Park3.png";

import Bookly1 from "../assets/Bookly1.png";
import Bookly2 from "../assets/Bookly2.png";
import Bookly3 from "../assets/Bookly3.png";

import CreatorDesk1 from "../assets/CreatorDesk1.png";
import CreatorDesk2 from "../assets/CreatorDesk2.png";
import CreatorDesk3 from "../assets/CreatorDesk3.png";

import CreatorDeskAdmin1 from "../assets/CreatorDeskAdmin1.png";
import CreatorDeskAdmin2 from "../assets/CreatorDeskAdmin2.png";
import CreatorDeskAdmin3 from "../assets/CreatorDeskAdmin3.png";

const projects = {
  creatorsdesk: {
    number: "01",
    title: "CREATOR'S DESK",
    category: "E-COMMERCE PLATFORM",

    description:
      "A full-stack e-commerce platform for discovering and purchasing desk accessories, tech gear, and creator equipment.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
      "AWS SQS",
      "Google Gemini",
      "Cloudinary",
      "Docker",
    ],

    liveUrl: "https://creator-s-desk.vercel.app/",
    githubUrl:
      "https://github.com/rishikatamboli25-netizen/Creator-s-Desk",

    heroImage: CreatorDesk1,

    overview:
      "Creator's Desk is a full-stack commerce platform built for creators, developers, and desk-setup enthusiasts. It combines product discovery, cart and checkout, OTP authentication, inventory-aware ordering, online payments, order tracking, automated invoices, and an AI-powered desk setup assistant into a single shopping experience.",

    features: [
      {
        title: "AI DESK BUILDER",
        description:
          "AI-powered setup assistant that analyzes a user's use case, budget, existing gear, and preferences to recommend suitable products from the actual catalog.",
        icon: FiCpu,
      },
      {
        title: "SMART CHECKOUT",
        description:
          "Inventory-aware checkout reserves available stock before order creation and releases reservations when a checkout cannot be completed.",
        icon: FiShoppingCart,
      },
      {
        title: "PAYMENTS & ORDERS",
        description:
          "Supports Razorpay online payments and Cash on Delivery with server-side payment verification and order lifecycle management.",
        icon: FiCreditCard,
      },
      {
        title: "EVENT-DRIVEN INVOICES",
        description:
          "Order events are processed through AWS SQS, triggering asynchronous PDF invoice generation and Cloudinary file storage.",
        icon: FiFileText,
      },
    ],

    previews: [
      CreatorDesk2,
      CreatorDesk3,
    ],

    built:
      "I built Creator's Desk as a full-stack e-commerce system using React, Tailwind CSS, Node.js, Express, and MongoDB with a microservice-oriented backend. The platform includes OTP authentication, product discovery, cart and checkout, inventory reservation, Razorpay payment verification, order management, asynchronous invoice processing through AWS SQS, Cloudinary-hosted invoice files, and an AI Desk Builder powered by Google Gemini. The project was developed using an AI-assisted development workflow while designing and integrating the application architecture, business logic, service communication, and deployment.",
  },

  creatorsdeskadmin: {
    number: "02",
    title: "CD ADMIN",
    category: "ADMIN CONSOLE",

    description:
      "A secure administrative control panel for managing Creator's Desk's catalog, inventory, orders, customers, payments, invoices, and administrators.",

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "RBAC",
      "TOTP MFA",
    ],

    liveUrl: "https://creator-s-desk-x6h9.vercel.app/",
    githubUrl:
      "https://github.com/rishikatamboli25-netizen/Creator-s-Desk",

    heroImage: CreatorDeskAdmin1,

    overview:
      "CD Admin is a dedicated administration platform for the operational side of Creator's Desk. It provides permission-based access to catalog, inventory, pricing, orders, customers, payments, refunds, invoices, and administrator management while enforcing a separate security layer for privileged operations.",

    features: [
      {
        title: "RBAC & ACCESS CONTROL",
        description:
          "Role-based access control with granular permissions for managing sensitive administrative modules and actions.",
        icon: FiShield,
      },
      {
        title: "MFA SECURITY",
        description:
          "TOTP-based multi-factor authentication with encrypted secrets and one-time recovery codes for administrator accounts.",
        icon: FiLock,
      },
      {
        title: "CATALOG & INVENTORY",
        description:
          "Manage products, stock levels, availability, pricing changes, inventory movements, and product price history.",
        icon: FiBox,
      },
      {
        title: "OPERATIONS & AUDIT",
        description:
          "Manage orders, customers, payments, refunds, invoices, and admin accounts with detailed audit logging for sensitive actions.",
        icon: FiActivity,
      },
    ],

    previews: [
      CreatorDeskAdmin2,
      CreatorDeskAdmin3,
    ],

    built:
      "I built CD Admin as a separate React and Node.js administration system for Creator's Desk. It includes granular RBAC permissions, secure server-side sessions, CSRF protection, rate limiting, TOTP-based MFA, administrator management, catalog and inventory controls, pricing history, order and customer operations, payment and refund workflows, invoice management, and detailed audit logging. The project was developed using an AI-assisted development workflow with a strong focus on security, access control, and operational reliability.",
  },

  visor: {
    number: "03",
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
    githubUrl:
      "https://github.com/rishikatamboli25-netizen/Visor",

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
      visor3,
    ],

    built:
      "I built the VISOR landing page as an interactive frontend experience with React, Tailwind CSS, Framer Motion, and React Three Fiber. The project focuses on combining product presentation with animation and interactive 3D visuals.",
  },

  bookly: {
    number: "04",
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
    githubUrl:
      "https://github.com/rishikatamboli25-netizen/Bookly-E-Library",

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
      Bookly3,
    ],

    built:
      "I built Bookly using React for the frontend and Node.js, Express, and MongoDB for the backend. The project includes authentication, book management, PDF reading, reading progress, collections, notes, and user-specific library features.",
  },

  parkspot: {
    number: "05",
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
    githubUrl:
      "https://github.com/rishikatamboli25-netizen/ParkSpot",

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
      Park3,
    ],

    built:
      "I built ParkSpot as a frontend-focused React application using Vite and Tailwind CSS. The project integrates location search, map visualization, parking filters, and responsive UI into a single-page experience.",
  },
};

export default projects;