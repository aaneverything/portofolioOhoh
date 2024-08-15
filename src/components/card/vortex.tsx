import React, { useEffect } from "react";
import { Vortex } from "../ui/vortex";
import { FlipWordsDemo } from "./text";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function VortexDemoSecond() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade"
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      ></Vortex>
    </div>
  );
}
