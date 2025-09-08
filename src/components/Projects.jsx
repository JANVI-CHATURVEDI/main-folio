import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Travel Destination Explorer",
    short: "React + Tailwind app with filters, search, map zoom and animation.",
    description:
      "A full-featured React app that helps users explore destinations with filters, search bar, smooth map zoom, and interactive animations. Built using React, Tailwind, and LeafletJS for maps.",
    image: "/travel.png",
    link: "https://travel-destination-explorer-neon.vercel.app/",
    github: "https://github.com/yourusername/travel-destination-explorer",
    tags: ["React", "Tailwind", "Leaflet"],
  },
  {
    title: "DevLinkTree",
    short: "Link-in-bio page inspired by Bento.",
    description:
      "A modern, minimal link-in-bio project inspired by Bento design. Built using HTML, CSS, and JavaScript, this project is lightweight and perfect for showcasing links in a clean way.",
    image: "/devlinktree.png",
    link: "https://dev-link-tree.vercel.app/",
    github: "https://github.com/yourusername/dev-link-tree",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <>
      <h2 className="text-[26px] font-bold mb-0 mt-6 text-center">MY PROJECTS</h2>
      <p className="text-[20px] text-gray-700 dark:text-gray-400 mt-1 text-center">
        A <span className="font-semibold text-purple-700">collection </span>of my work and experiments
      </p>

      <section className="py-6 px-2 max-w-4xl m-auto">
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-[#f7f5f5] dark:bg-[#000000] shadow-md border border-gray-300 dark:border-gray-700 transition-all duration-500 overflow-hidden cursor-pointer max-h-[160px] hover:max-h-[1000px]"
            >
              {/* Compact Header */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-black dark:text-white flex justify-between">
                  {project.title}
                  <span className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github size={18} className="text-purple-400" />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <ExternalLink size={18} className="text-purple-400" />
                    </a>
                  </span>
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.short}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4 sm:mt-7">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[11px] font-semibold rounded-lg bg-black text-white dark:bg-white dark:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expanded Details (shows only on hover) */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-800 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
