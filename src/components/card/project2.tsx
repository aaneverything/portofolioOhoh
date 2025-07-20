import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectsData, type Project } from "@/data/projects";

const ProjectCard = ({
  title,
  role,
  duration,
  description,
  link,
  techStack,
  bgImage,
  index,
}: {
  title: string;
  role: string;
  duration: string;
  description: string;
  link: string;
  techStack: string[];
  bgImage: string;
  index: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trimmedText = description ? `${description.slice(0, 100)}...` : "";
  
  return (
    <>
      <li
        data-aos="fade-up"
        data-aos-delay={index * 100}
        className={`card rounded-3xl max-lg:rounded-xl max-w-full grayscale hover:grayscale-0 transition-[filter] duration-300 ${bgImage} bg-center bg-no-repeat bg-cover group relative min-h-[400px]`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 lg:opacity-45 rounded-3xl max-lg:rounded-xl" />

        {/* Card Body */}
        <div className="card-body relative flex flex-col w-full justify-between items-start z-10 h-full p-6 max-lg:p-4 text-white">
          <div className="flex w-full justify-between items-stretch">
            <h2 className="max-lg:text-[14px] text-[20px] text-white">
              {role}
            </h2>
            <p className="text-end max-lg:text-[14px] text-white force-white">
              {duration}
            </p>
          </div>

          {/* Project Details */}
          <div className="flex w-full flex-col justify-start items-start text-[14px]">
            <div className="flex max-lg:flex-col max-lg:justify-start max-lg:items-start justify-between w-full items-center gap-4">
              <p className="max-lg:text-[18px] force-white text-[24px] mb-2 font-semibold max-lg:-mb-4">
                {title}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="max-lg:text-[12px] max-lg:mt-2 text-end px-4 py-1 mb-2 border border-white hover:border-black hover:text-black hover:bg-white duration-150 transition-all rounded"
              >
                View Project
              </a>
            </div>

            <p className="text-justify block lg:hidden [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
              {trimmedText}{" "}
              {description && description.length > 100 && (
                <button
                  className="text-yellow-500 font-medium underline"
                  onClick={() => setIsModalOpen(true)}
                >
                  Read more
                </button>
              )}
            </p>
            <p className="text-justify force-white hidden lg:block [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
              {description || "No description available"}
            </p>

            <hr className="w-full h-[0.5px] bg-white my-4" />

            {/* Tech Stack */}
            <div className="flex w-full flex-wrap justify-start items-start gap-2">
              {techStack.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex text-[10px] lg:text-[16px] bg-white bg-opacity-35 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] justify-start items-center gap-1 border border-white px-3 py-[2px] rounded"
                >
                  <p className="force-white">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </li>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex px-3 items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-xl p-6 max-w-lg w-full text-black relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <p className="text-justify whitespace-pre-line text-[14px]">
              {description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export function Project2() {
  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  // Menggunakan data dari file terpisah
  const projects = projectsData;

  return (
    <div className="container mx-auto px-4 my-20">
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-white text-center"
      >
        Projects
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-xl text-white mb-8 mt-4 text-center"
      >
        Some of my projects
      </p>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            role={project.role}
            duration={project.duration}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            bgImage={project.bgImage}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}
