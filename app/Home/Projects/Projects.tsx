import React from 'react';
import Heading from '../Helper/Heading';

const Projects = () => {
  const projects = [
    { title: 'HR Connect', img: '/images/hr.jpg' },
    { title: 'Storyboard', img: '/images/storyboard.jpg' },
    { title: 'Express Navigator', img: '/images/en.jpg' },
    { title: 'Clique', img: '/images/test.png' },
    { title: 'CPAP', img: '/images/test.png' },
  ];

  return (
    <div>
      <Heading heading="Projects" />

      <div
        id="projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-10 xl:gap-20 px-4 md:px-16 lg:px-40"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="cursor-pointer rounded-[8px] overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 bg-[#2A2A2A] flex flex-col h-[300px]"
          >
            {/* Image section */}
            <div className="w-full h-[200px]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content section */}
            <div className="flex flex-1 items-center justify-between p-5">
              <div className="space-y-1">
                <p className="text-white text-base font-extrabold">
                  {project.title}
                </p>
                <p className="text-[#B1B2B380] text-xs">Mar 2024 - Apr 2024</p>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
