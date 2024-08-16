import { Inter } from "next/font/google";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { HoverEffect } from "@/components/ui/card-hover-effect";
const inter = Inter({ subsets: ["latin"] });
import { BackgroundGradient } from "@/components/ui/background-gradient";
import AOS from "aos";
import "aos/dist/aos.css";
import { Skills } from "@/components/card/skills";
import { Projects } from "@/components/card/projects";
import Image from "next/image";
import { AppleCardsCarouselDemo } from "@/components/card/AppleCardsCarouselDemo";
import { FlipWordsDemo } from "@/components/card/text";
import { Vortex } from "@/components/ui/vortex";
import { VortexDemoSecond } from "@/components/card/vortex";
import { useEffect, useState } from "react";
import { Contact } from "@/components/card/contact";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
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
    <div className="flex flex-col min-h-screen overflow-y-hidden px-8">
      {/* background start*/}

      <div className="fixed w-full h-screen opacity-20 -z-50">
        
        <VortexDemoSecond />
      </div>
      {/* background end */}

      {/* nama dll start*/}
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="flex flex-col justify-center items-center min-h-screen"
      >
        <h1 className="text-slate-500 text-lg sm:text-2xl font-mono text-center mb-4">
          Welcome to My Portfolio!
        </h1>
        <FlipWordsDemo />
      </div>
      {/* nama dll end*/}

      {/* bagian skill start*/}
      <Skills />
      {/* bagian skill end*/}

      {/* bagian project start */}
      <Projects />
      {/* bagian project end */}

      <Contact />
    </div>
  );
}
