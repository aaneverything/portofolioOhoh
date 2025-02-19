import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
};

export function Project2() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    // Inisialisasi AOS
    AOS.init({ once: true });
    AOS.refresh();

    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/aaneverything/repos"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const sortedProjects = projects.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProjects.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100} // Delay animasi setiap kartu
            className="p-4 bg-slate-700 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-gray-500">
                ⭐ {project.stargazers_count}
              </span>
              <span className="text-gray-500">🍴 {project.forks_count}</span>
            </div>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-2 inline-block"
            >
              Go to project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
