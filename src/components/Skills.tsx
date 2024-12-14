import React from 'react';
import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiExpress,
  SiReact,
  SiAmazon,
  SiDocker,
  SiLinux,
} from 'react-icons/si';
import { FaGithub, FaPython } from 'react-icons/fa';
import { SiLangchain } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
import { HiUserGroup } from 'react-icons/hi2';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaProjectDiagram } from 'react-icons/fa';
import { VscAzureDevops } from 'react-icons/vsc';
import robotGif from '../assets/robot.gif'; // Import the local GIF

const certifications = [
  { name: 'Azure AI Engineer', image: 'src/assets/azure_ai_engineer.png' },
  {
    name: 'Azure Data Scientist',
    image: 'src/assets/azure_data_scientist.png',
  },
];

const skillsData = {
  languages: [
    {
      name: 'Python',
      icon: <FaPython className="animate-vertical-flip text-[#3776AB]" />,
    },
    {
      name: 'C',
      icon: <SiC className="animate-vertical-flip text-[#A8B9CC]" />,
    },
    {
      name: 'C++',
      icon: <SiCplusplus className="animate-vertical-flip text-[#00599C]" />,
    },
    {
      name: 'Typescript',
      icon: <SiTypescript className="animate-vertical-flip text-[#3178C6]" />,
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="animate-vertical-flip text-[#F7DF1E]" />,
    },
  ],
  frameworksAndTools: [
    {
      name: 'Pytorch',
      icon: <SiPytorch className="animate-vertical-flip text-[#EE4C2C]" />,
    },
    {
      name: 'Tensorflow',
      icon: <SiTensorflow className="animate-vertical-flip text-[#FF6F00]" />,
    },
    {
      name: 'Scikit-learn',
      icon: <SiScikitlearn className="animate-vertical-flip text-[#F7931E]" />,
    },
    {
      name: 'Keras',
      icon: <SiKeras className="animate-vertical-flip text-[#D00000]" />,
    },
    {
      name: 'Langchain',
      icon: <SiLangchain className="animate-vertical-flip text-[#61DAFB]" />,
    },
    {
      name: 'Express',
      icon: <SiExpress className="animate-vertical-flip text-white" />,
    },
    {
      name: 'ReactJS',
      icon: <SiReact className="animate-vertical-flip text-[#61DAFB]" />,
    },
  ],
  cloudAndDevops: [
    {
      name: 'Azure',
      icon: <VscAzure className="animate-vertical-flip text-[#0078D4]" />,
    },
    {
      name: 'AWS',
      icon: <SiAmazon className="animate-vertical-flip text-[#FF9900]" />,
    },
    {
      name: 'Docker',
      icon: <SiDocker className="animate-vertical-flip text-[#2496ED]" />,
    },
    {
      name: 'Linux',
      icon: <SiLinux className="animate-vertical-flip text-[#FF4500]" />,
    },
    {
      name: 'Azure Devops',
      icon: <VscAzureDevops className="animate-vertical-flip text-[#00A4EF]" />,
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="animate-vertical-flip text-[#181717]" />,
    },
  ],
  softSkills: [
    {
      name: 'Leadership',
      icon: <HiUserGroup className="animate-vertical-flip text-[#6A5ACD]" />,
    },
    {
      name: 'Agile Methodology',
      icon: <FaPeopleGroup className="animate-vertical-flip text-[#8A2BE2]" />,
    },
    {
      name: 'Subsystem Design',
      icon: (
        <FaProjectDiagram className="animate-vertical-flip text-[#20B2AA]" />
      ),
    },
    {
      name: 'ERD',
      icon: (
        <FaProjectDiagram className="animate-vertical-flip text-[#9370DB]" />
      ),
    },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title with Robot */}
        <div className="relative flex items-center justify-center mb-12">
          {/* Robot Animation */}
          <div
            className="animate-robot-walk-sm md:animate-robot-walk-md lg:animate-robot-walk-lg"
            style={{
              width: '100px',
              height: '100px',
              position: 'absolute',
              left: '-50px', // Start just outside the container
            }}
          >
            <img
              src={robotGif}
              alt="Robot"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center text-gray-800 dark:text-gray-100 mt-6 mb-4 tracking-tight">
            Skills
          </h2>
        </div>

        {/* Main Grid */}
        <div className="relative py-3 grid grid-cols-1 md:grid-cols-10 gap-8">
          {/* Skills Section (70%) */}
          <div className="md:col-span-7 space-y-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="space-y-3">
                {/* Category Header */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-200 tracking-wide uppercase relative group">
                  {category.replace(/([A-Z])/g, ' $1')}
                  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </h3>

                {/* Skills Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-y-4 sm:gap-y-6 md:gap-y-2 gap-x-2">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 w-16 h-16 sm:w-20 sm:h-20 p-2 rounded-lg shadow-md transition-shadow"
                    >
                      {/* Skill Icon */}
                      <div className="text-xl sm:text-2xl flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
                        {skill.icon}
                      </div>
                      {/* Skill Name */}
                      <span className="mt-1 text-center text-xs text-white font-medium break-words group-hover:text-yellow-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section (30%) */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 uppercase tracking-wide relative group">
              Certifications
              <span className="absolute left-0 bottom-[-2px] h-[2px] w-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex flex-col items-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 shadow-md"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-md mb-4 object-cover"
                  />
                  <span className="text-center text-sm text-white font-medium">
                    {cert.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
