import { useState } from "react";
import { projectsData } from "@/data/projects";

const ProjectCard = ({
  title,
  role,
  duration,
  description,
  link,
  techStack,
  bgImage,
  image,
  index,
}: {
  title: string;
  role: string;
  duration: string;
  description: string;
  link: string;
  techStack: string[];
  bgImage: string;
  image?: string;
  index: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if either 'image' or 'bgImage' contains an image URL/path
  const rawImg =
    image ||
    (bgImage && (bgImage.startsWith("/") || bgImage.startsWith("http"))
      ? bgImage
      : null);
  // Auto-remove '/public' prefix if user typed '/public/image.png'
  const imgUrl = rawImg ? rawImg.replace(/^\/public/, "") : null;

  return (
    <>
      <li
        data-aos="fade-up"
        data-aos-delay={index * 100}
        style={
          imgUrl
            ? {
                backgroundImage: `url("${imgUrl}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
        className={`card rounded-3xl max-lg:rounded-xl max-w-full grayscale hover:grayscale-0 transition-[filter] duration-300 ${
          imgUrl ? "" : bgImage
        } bg-center bg-no-repeat bg-cover group relative min-h-[400px]`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 lg:opacity-45 rounded-3xl max-lg:rounded-xl" />

        {/* Card Body */}
        <div className="card-body relative flex flex-col w-full z-10 h-full p-6 max-lg:p-4 text-white gap-3">
          <div className="flex w-full justify-between items-start">
            <h2 className="max-lg:text-[14px] text-[20px] text-white">
              {role}
            </h2>
            <p className="text-end max-lg:text-[14px] text-white force-white">
              {duration}
            </p>
          </div>

          {/* Title — fixed height so every card lines up */}
          <h3 className="force-white font-semibold text-[20px] lg:text-[24px] leading-snug line-clamp-2 min-h-[3.5rem] lg:min-h-[4rem]">
            {title}
          </h3>

          {/* Description — flex-1 pushes the footer to the bottom */}
          <p className="text-justify force-white text-[14px] flex-1 line-clamp-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]">
            {description || "No description available"}
          </p>
          {description && description.length > 220 && (
            <button
              className="self-start -mt-1 text-yellow-500 text-[13px] font-medium underline"
              onClick={() => setIsModalOpen(true)}
            >
              Read more
            </button>
          )}

          <hr className="w-full h-[0.5px] bg-white my-2" />

          {/* Tech Stack */}
          <div className="flex w-full flex-wrap justify-start items-start gap-2">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="flex text-[10px] lg:text-[14px] bg-white bg-opacity-35 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] justify-start items-center gap-1 border border-white px-3 py-[2px] rounded"
              >
                <p className="force-white">{tech}</p>
              </div>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start mt-1 text-[13px] lg:text-[14px] px-4 py-1 border border-white hover:border-black hover:text-black hover:bg-white duration-150 transition-all rounded"
          >
            View Project
          </a>
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
        {projects
          .map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              role={project.role}
              duration={project.duration}
              description={project.description}
              link={project.link}
              techStack={project.techStack}
              bgImage={project.bgImage}
              image={project.image}
              index={index}
            />
          ))
          .reverse()}
      </ul>
    </div>
  );
}
