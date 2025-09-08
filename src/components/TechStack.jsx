import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaGitAlt, FaGithub, FaFigma, FaJava
} from 'react-icons/fa';

import {
  SiTailwindcss, SiVscodium, SiCplusplus, SiFramer
} from 'react-icons/si';

const techs = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Tailwind', icon: <SiTailwindcss /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
];

export default function TechStack() {
  return (
    <section className="py-4 max-w-5xl">
      <h2 className="text-[21px] font-bold mb-4">SKILLS</h2>

      <div className="flex flex-wrap gap-4">
        {techs.map((tech, index) => (
          <span
            key={index}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-[11px] font-semibold shadow-md bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform duration-200"
          >
            <span className="text-[13px]">{tech.icon}</span>
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
}
