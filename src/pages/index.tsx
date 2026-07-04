import { Skills } from "@/components/card/skills";
import { Project2 } from "@/components/card/project2";
import { FlipWordsDemo } from "@/components/card/text";
import { VortexDemoSecond } from "@/components/card/vortex";
import { Contact } from "@/components/card/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden px-8">
      {/* background */}
      <div className="fixed w-full h-screen opacity-20 -z-50">
        <VortexDemoSecond />
      </div>

      {/* hero */}
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

      <Skills />
      <Project2 />
      <Contact />
    </div>
  );
}
