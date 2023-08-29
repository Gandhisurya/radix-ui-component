"use client";
import Link from "next/link";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import NavBar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  const varient = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imagex = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imagey = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <NavBar />
      <div className="relative w-full flex flex-col overflow-y-hidden h-screen font-next">
        <div className="mt-64">
          <AnimatePresence>
            <motion.p
              variants={varient}
              initial="hidden"
              animate="show"
              className="text-center text-5xl font-bold px-56 mx-auto"
            >
              Radix Themes is an open-source component library
            </motion.p>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div variants={varient} initial="hidden" animate="show">
              <p className="mt-8 font-medium text-xl text-center">
                optimized for fast development, easy maintenance, and
                accessibility.
              </p>
              <p className="text-center font-medium text-xl">
                Maintained by{" "}
                <Link
                  href="https://github.com/workos"
                  className="font-semibold hover:text-sky-500 transition-transform"
                  target="_blank"
                >
                  @workos
                </Link>
                .
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mx-auto mt-10 flex items-center">
          <motion.div
            variants={imagex}
            initial="hidden"
            animate="show"
            className="relative group hover:scale-105 transform transition-transform ease-in duration-200 mx-5"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button
              onClick={() => router?.push("/home/doc")}
              className="relative w-[250px] h-12 rounded-xl bg-yellow-50 font-semibold text-lg flex items-center justify-center"
            >
              Get Started
              <svg
                className="h-5 ml-3"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </motion.div>
          <motion.div
            variants={imagey}
            initial="hidden"
            animate="show"
            className="relative group hover:scale-105 transform transition-transform ease-in duration-200 mx-5"
          >
            <div className="absolute px-5 -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative w-[250px] h-12 bg-yellow-50 rounded-xl font-semibold text-lg flex items-center justify-center">
              Learn More
              <svg
                className="ml-3 h-5 hover:ease-out"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 2H8V7H13V2.5C13 2.22386 12.7761 2 12.5 2ZM13 8H8V13H12.5C12.7761 13 13 12.7761 13 12.5V8ZM7 7V2H2.5C2.22386 2 2 2.22386 2 2.5V7H7ZM2 8V12.5C2 12.7761 2.22386 13 2.5 13H7V8H2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="absolute top-52 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        <div className="absolute top-52 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </>
  );
}
