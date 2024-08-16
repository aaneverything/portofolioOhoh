import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Contact() {
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
      className="container flex flex-col min-h-screen overflow-y-hidden mb-40"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1
        className="opacity-90 mt-[40vh] font-mono flex items-start flex-col"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-24 md:w-32">
          <img src="/chat.svg" alt="" className="text-white backdrop-blur-sm" />
        </div>
        <p className="text-4xl md:text-7xl font-bold mt-8 ">Contact</p>
        <p className="text-xl md:text-2xl mb-8 mt-4 text-slate-500">
          Stay In Touch
        </p>
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 mt-10 ">
        <a
          target="_blank"
          href="https://wa.me/qr/7XVPMO4FONXQJ1"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 sm:px-8sm:px-8 px-3 px-3 rounded-xl bg-teal-400 bg-opacity-20 backdrop-blur-sm  hover:border-emerald-500 border border-slate-800 text-lg w-full md:w-1/2 cursor-pointer flex justify-between items-center"
        >
          <p className="text-sm sm:text-lg">Whatsapp</p>
          <p className="text opacity-50">0851 5709 6638</p>
        </a>
        <a
          // target="_blank"
          href="mailto:aanvinanta5@gmail.com"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 sm:px-8 px-3 gap-3 rounded-xl bg-sky-400 bg-opacity-20 backdrop-blur-sm hover:border-sky-500 border border-slate-800 text-lg w-full md:w-1/2 cursor-pointer flex justify-between items-center"
        >
          <p className="text-sm sm:text-lg">Email</p>
          <p className="text-sm  opacity-50">aanvinanta5@gmail.com</p>
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/aan-triya-vinanta-33a251241"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 sm:px-8 px-3 rounded-xl bg-blue-400 bg-opacity-20 backdrop-blur-sm   hover:border-blue-500 border border-slate-800 text-lg w-full md:w-1/2 cursor-pointer flex justify-between items-center"
        >
          <p className="text-sm sm:text-lg">LinkedIn</p>
          <p className="text-sm  opacity-50">/aantriyavinanta</p>
        </a>
        <a
          target="_blank"
          href="https://github.com/aaneverything"
          className="hover:bg-opacity-25 transition-all duration-500 p-6 sm:px-8 px-3 rounded-xl bg-violet-400 bg-opacity-20 backdrop-blur-sm   hover:border-violet-500 border border-slate-800 text-lg w-full md:w-1/2 cursor-pointer flex justify-between items-center"
        >
          <p className="text-sm sm:text-lg ">GitHub</p>
          <p className="text-sm  opacity-50">/aaneverything</p>
        </a>
      </div>
    </div>
  );
}
