import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Skills() {
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
      className="container mx-auto px-4 mb-80"
    >
      <h2
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="text-4xl md:text-7xl font-bold text-white mt-8"
      >
        Skills
      </h2>
      <p className="text-xl md:text-2xl mb-8 mt-4 text-white">
        My technical expertise
      </p>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="flex flex-wrap items-center justify-center gap-4 mt-16"
      >
        <img src="https://svgl-badge.vercel.app/api/Language/HTML5?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/JavaScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/TypeScript?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/C%2B%2B?theme=dark" />

        <img src="https://svgl-badge.vercel.app/api/Library/React?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Next.js?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Library/shadcnui?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Tailwind%20CSS?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Framework/Laravel?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Language/Php?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Database/MySQL?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Git?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Postman?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Design/Figma?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Hosting/Vercel?theme=dark" />
        <img src="https://svgl-badge.vercel.app/api/Software/Stack%20Overflow?theme=dark" />
      </div>
      <div data-aos="fade-up" className="mt-8 flex justify-center">
        <img
          className="hidden lg:block border border-stone-800 rounded-lg"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=aaneverything&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=800"
          alt="Top Languages"
        />
        <img
          className="block lg:hidden border border-stone-800 rounded-lg"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=aaneverything&locale=en&layout=compact&theme=dark&hide_border=true&bg_color=171717&card_width=400"
          alt="Top Languages"
        />
      </div>
    </div>
  );
}
