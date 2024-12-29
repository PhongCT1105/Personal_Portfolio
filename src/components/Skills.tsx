import { useEffect, useRef, useState } from 'react';
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiLinux,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { trackDurationViewTime } from '../utils/firebaseUtils';
import { VscAzure } from 'react-icons/vsc';
import { TbFileTypeSql } from 'react-icons/tb';
import { SiScikitlearn } from 'react-icons/si';
import { SiKeras } from 'react-icons/si';
import { SiLangchain } from 'react-icons/si';
import { SiHuggingface } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiPrisma } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiAmazonec2 } from 'react-icons/si';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('chart');
  const startTime = useRef<number>(0);

  // Page duration tracking
  useEffect(() => {
    // Start tracking duration
    startTime.current = Date.now();

    // Track duration when the component unmounts
    return () => {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime.current) / 1000); // Convert to seconds
      if (duration > 0) {
        trackDurationViewTime('Skills', duration); // Call the updated function
      }
    };
  }, []);

  const importantNumber = [
    { number: '1500+', label: 'Contributions on GitHub' },
    { number: '4+', label: 'Years of AI Experience' },
    { number: '20+', label: 'Completed Projects' },
    { number: '100%', label: 'Dedication to Success' },
  ];

  const aiSkills = [
    { skill: 'Machine Learning', level: 95 },
    { skill: 'Web Development', level: 85 },
    { skill: 'MLOps / LLMOps / DevOps', level: 90 },
    { skill: 'Computer Vision', level: 85 },
    { skill: 'Data Analysis', level: 87 },
  ];
  const techDomains = [
    {
      domain: 'Programming Languages',
      skills: [
        { name: 'Python', icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="text-[#3178C6]" />,
        },
        {
          name: 'JavaScript',
          icon: <SiJavascript className="text-[#F7DF1E]" />,
        },
        { name: 'SQL', icon: <TbFileTypeSql className="text-[#336791]" /> },
      ],
    },
    {
      domain: 'AI & ML Frameworks',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" /> },
        {
          name: 'TensorFlow',
          icon: <SiTensorflow className="text-[#FF6F00]" />,
        },
        {
          name: 'Scikit-learn',
          icon: <SiScikitlearn className="text-[#F7931E]" />,
        }, // Corrected placeholder
        { name: 'Keras', icon: <SiKeras className="text-[#D00000]" /> },
        { name: 'LangChain', icon: <SiLangchain className="text-[#00A3E0]" /> }, // Placeholder for LangChain
        {
          name: 'Huggingface',
          icon: <SiHuggingface className="text-[#F89A3A]" />,
        },
      ],
    },
    {
      domain: 'Web Development',
      skills: [
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        {
          name: 'Tailwind CSS',
          icon: <RiTailwindCssFill className="text-[#38B2AC]" />,
        },
        { name: 'Prisma ORM', icon: <SiPrisma className="text-[#0C344B]" /> }, // Prisma’s official blue
        { name: 'Express', icon: <SiExpress className="text-white" /> }, // Express is often associated with black
        { name: 'Postgres', icon: <SiPostgresql className="text-[#336791]" /> },
      ],
    },
    {
      domain: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', icon: <VscAzure className="text-[#007FFF]" /> }, // Official Azure blue
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: 'AWS', icon: <SiAmazonec2 className="text-[#FF9900]" /> },
        { name: 'AWS EC2', icon: <SiGooglecloud className="text-[#FF9900]" /> },
        { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
        { name: 'Linux', icon: <SiLinux className="text-[#FCC624]" /> },
      ],
    },
  ];

  return (
    <div
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Important Numbers Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4">
            Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {importantNumber.map((keynum, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:bg-red-600"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <motion.p
                  className="text-4xl font-bold text-white"
                  initial={{ color: '#FFFFFF', scale: 0.9 }}
                  animate={{ color: '#FFD700', scale: 1.1 }}
                  transition={{
                    duration: 0.7,
                    repeat: 1,
                    repeatType: 'reverse',
                    delay: index * 0.4,
                  }}
                >
                  {keynum.number}
                </motion.p>
                <p className="text-sm text-gray-300 mt-2">{keynum.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="text-center mb-8">
          <button
            className={`px-6 py-3 text-white text-sm font-medium ${
              activeTab === 'chart' ? 'bg-gray-700' : 'bg-gray-600'
            } rounded-lg mx-2 transition-transform transform hover:scale-105 hover:bg-red-600`}
            onClick={() => setActiveTab('chart')}
          >
            Overall Skills
          </button>
          <button
            className={`px-6 py-3 text-white text-sm font-medium hover:bg-red-600 ${
              activeTab === 'allSkills' ? 'bg-gray-700' : 'bg-gray-600'
            } rounded-lg mx-2 transition-transform transform hover:scale-105`}
            onClick={() => setActiveTab('allSkills')}
          >
            Tech Stack
          </button>
        </div>

        {activeTab === 'chart' && (
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-300 mb-4 text-cen">
              Domain Proficiency
            </h3>
            <div className="space-y-6">
              {aiSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <p className="text-sm sm:w-1/5 font-medium text-gray-400 w-1/5">
                    {skill.skill}
                  </p>
                  <div className="relative w-3/5">
                    <div className="absolute top-0 left-0 h-2 rounded-full bg-gray-700 w-full"></div>
                    <motion.div
                      className="absolute top-0 left-0 h-2 rounded-full bg-teal-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: false }}
                      transition={{ duration: 1 }}
                    ></motion.div>
                  </div>
                  <span className="text-sm font-medium text-gray-400 ml-3">
                    {skill.level}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'allSkills' && (
          <div className="text-center">
            <table className="table-auto w-full text-left border-collapse border border-gray-700">
              <thead>
                <tr>
                  <th className="text-white border border-gray-700 px-2 sm:px-4 py-2 text-sm sm:text-base">
                    Domain
                  </th>
                  <th className="text-white border border-gray-700 px-2 sm:px-4 py-2 text-sm sm:text-base">
                    Skills
                  </th>
                </tr>
              </thead>
              <tbody>
                {techDomains.map((domain, index) => (
                  <tr key={index}>
                    <td className="border border-gray-700 px-2 py-2 text-gray-300 font-bold text-sm sm:text-base">
                      {domain.domain}
                    </td>
                    <td className="border border-gray-700 px-2 py-2">
                      <div className="flex flex-wrap gap-2 sm:gap-4">
                        {domain.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skillIndex}
                            className="flex items-center space-x-1 bg-gray-800 p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: skillIndex * 0.1,
                            }}
                          >
                            <div className="text-2xl sm:text-3xl hover:text-teal-400 transition-colors duration-300">
                              {skill.icon}
                            </div>
                            <span className="text-gray-300 text-xs sm:text-sm font-medium">
                              {skill.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
