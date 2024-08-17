import React, { useEffect, useState } from "react";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { HoverEffect } from "../ui/card-hover-effect";
import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import Link from "next/link";

export function Projects() {
  const [reachBottom, setReachBottom] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setReachBottom(true);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="container mx-auto px-4 my-20"
    >
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="text-4xl md:text-7xl font-bold text-white mt-8"
      >
        Projects
      </h2>
      <p className="text-xl md:text-2xl mb-8 mt-4 text-white">
        Some of my projects
      </p>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="flex flex-wrap items-center justify-center grow gap-4"
      >
        <BackgroundGradient className=" flex w-80 sm:w-96 flex-col gap-2 p-4 group rounded-[22px] max-w-sm h-[35rem]  bg-slate-700">
          <Image
            src="/sd.png"
            alt="Project Management System"
            height={400}
            width={400}
            className="card-img transition-all duration-500"
          />
          <p className="text-base sm:text-[20px] mt-4 mb-2 text-neutral-200">
            Project Management System
          </p>

          <p className="text-sm text-slate-500 text-justify">
            This C++ application is designed to efficiently manage projects by
            organizing and tracking. The application leverages fundamental data
            structures like Struct, Sorting, and Queue lore.
          </p>
          <div className="flex gap-2 mt-8">
            <img alt='' src="https://svgl-badge.vercel.app/api/Language/C%2B%2B?theme=dark" />
          </div>

          <Button className="mt-3">
            <Link href="https://github.com/aaneverything/Fp_struktur_data">
              Go to project
            </Link>
          </Button>
        </BackgroundGradient>

        {/* am */}

        <BackgroundGradient className="gap-2 flex w-80 sm:w-96 flex-col p-4 group rounded-[22px] max-w-sm h-[35rem]  bg-slate-700">
          <Image
            src="/nk.png"
            alt="Nakon: Anonymous Q&A Platform"
            height={400}
            width={400}
            className="card-img transition-all duration-500"
          />
          <p className="text-base sm:text-[20px] mt-4 mb-2 text-neutral-200">
            Nakon : Anonymous Q&A Platform
          </p>

          <p className="text-sm text-justify basis-1 grow-0 text-slate-500">
            A platform that allows users to ask questions and provide answers
            without revealing their identity.
          </p>
          <div className="flex gap-2 mt-8 flex-wrap">
            <img alt='' src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
            <img alt='' src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />
            <img alt='' src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
          </div>

          <Button className="mt-3 ">
            <Link href="https://nakon.vercel.app/">
              Go to app
            </Link>
          </Button>
        </BackgroundGradient>

        <BackgroundGradient className="gap-2 flex w-80 sm:w-96 flex-col p-4 group rounded-[22px] max-w-sm h-[35rem]  bg-slate-700">
          <Image
            src="/cr.png"
            alt=""
            height={400}
            width={400}
            className="card-img transition-all duration-500"
          />
          <p className="text-base sm:text-[20px] mt-4 mb-2 text-neutral-200">
            Cryptarithm Solver
          </p>

          <p className="text-sm text-justify text-slate-500 ">
            A platform that allows users to solve cryptarithm puzzles, This app is built using React and JavaScript and is hosted on Vercel.
          </p>
          <div className="flex gap-2 mt-8 flex-wrap">
            <img alt='' src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
            <img alt='' src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
            <img alt='' src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
          </div>

          <Button className="mt-3 ">
            <Link href="https://cryptarithmsolver-prt1fv2zj-aaneverythings-projects.vercel.app/">
              Go to app
            </Link>
          </Button>
        </BackgroundGradient>

        <BackgroundGradient className="gap-2 flex w-80 sm:w-96 flex-col p-4 group rounded-[22px] max-w-sm h-[35rem]  bg-slate-700">
          <Image
            src="/an.png"
            alt=""
            height={400}
            width={400}
            className="card-img transition-all duration-500"
          />
          <p className="text-base sm:text-[20px] mt-4 mb-2 text-neutral-200">
            Anime Stream web app (WIP)
          </p>

          <p className="text-sm text-justify text-slate-500">
            A platform that allows users to watch anime, This app is built using React and JavaScript and is hosted on Vercel.
          </p>
          <div className="flex gap-2 mt-8 flex-wrap">
            <img alt='' src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
            <img alt='' src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
            <img alt='' src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
          </div>

          <Button className="mt-3 ">
            <Link href="">
              Go to app
            </Link>
          </Button>
        </BackgroundGradient>
      </div>
    </div>
  );
}
