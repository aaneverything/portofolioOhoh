import React, { useEffect } from "react";
import { FlipWords } from "../ui/flip-words";
import "aos/dist/aos.css";

export function FlipWordsDemo() {
  const words = [
    "Frontend Developer",
    "UI/UX Designer",
    "Android Developer(wannabe)",
  ];

  return (
    <div className="h-44 flex flex-col text-md sm:text-4xl font-mono  text-white justify-center items-center px-4">
    hallo i`m Aan Triya Vinanta
      <div className="mx-auto text-lg sm:text-4xl font-mono text-white">
        <FlipWords words={words} duration={5000} /> <br />
      </div>
    </div>
  );
}
