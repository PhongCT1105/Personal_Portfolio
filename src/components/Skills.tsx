import { useState } from 'react';
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  // SiJava,
  SiPytorch,
  SiTensorflow,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
  // SiAmazonaws,
  // SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiLinux,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('chart');

  const importantNumber = [
    { number: '2000+', label: 'Contributions on GitHub' },
    { number: '4+', label: 'Years of AI Experience' },
    { number: '50+', label: 'Completed Projects' },
    { number: '100%', label: 'Dedication to Success' },
  ];

  const aiSkills = [
    { skill: 'Machine Learning', level: 90 },
    { skill: 'Deep Learning', level: 85 },
    { skill: 'Natural Language Processing', level: 80 },
    { skill: 'Computer Vision', level: 88 },
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
        // { name: 'Java', icon: <SiJava className="text-[#007396]" /> },
      ],
    },
    {
      domain: 'Frameworks & Tools',
      skills: [
        { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" /> },
        {
          name: 'TensorFlow',
          icon: <SiTensorflow className="text-[#FF6F00]" />,
        },
        { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
        { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" /> },
        { name: 'Flask', icon: <SiFlask className="text-[#000000]" /> },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql className="text-[#336791]" />,
        },
      ],
    },
    {
      domain: 'Cloud & DevOps',
      skills: [
        // { name: 'AWS', icon: <SiAmazonaws className="text-[#FF9900]" /> },
        {
          name: 'Azure',
          // icon: <SiMicrosoftazure className="text-[#0078D4]" />,
        },
        { name: 'GCP', icon: <SiGooglecloud className="text-[#4285F4]" /> },
        { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
        {
          name: 'Kubernetes',
          icon: <SiKubernetes className="text-[#326CE5]" />,
        },
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
          viewport={{ once: false }} // Ensures animation reruns on every scroll
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-300 mb-4">
            Key Numbers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {importantNumber.map((keynum, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:scale-110 hover:bg-red-600"
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }} // Ensures animation reruns on every scroll
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
                      whileInView={{ width: `${skill.level}%` }} // Trigger animation on view
                      viewport={{ once: false }} // Ensures animation reruns on every scroll
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
