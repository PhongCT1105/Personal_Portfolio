import React, { useState } from 'react';
import { SiAmazon, SiDocker, SiLinux } from 'react-icons/si';
import { FaGithub, FaPython } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('chart');

  const importantNumber = [
    { number: '2000+', label: 'Contributions on GitHub' },
    { number: '4+', label: 'Years of AI Experience' },
    { number: '50+', label: 'Completed Projects' },
    { number: '100%', label: 'Dedication to Success' },
  ];

  const platforms = [
    { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
    { name: 'Azure', icon: <VscAzure className="text-[#0078D4]" /> },
    { name: 'AWS', icon: <SiAmazon className="text-[#FF9900]" /> },
    { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
    { name: 'Linux', icon: <SiLinux className="text-[#FF4500]" /> },
    { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
  ];

  const aiSkills = [
    { skill: 'Machine Learning', level: 90 },
    { skill: 'Deep Learning', level: 85 },
    { skill: 'Natural Language Processing', level: 80 },
    { skill: 'Computer Vision', level: 88 },
    { skill: 'Data Analysis', level: 87 },
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
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-300 mb-4">Key Numbers</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {importantNumber.map((keynum, index) => (
              <motion.div
                key={index}
                className="text-center bg-gray-800 p-4 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:bg-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-4xl font-bold text-white">{keynum.number}</p>
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
            } rounded-lg mx-2 transition-transform transform hover:scale-105`}
            onClick={() => setActiveTab('chart')}
          >
            Overall Skills
          </button>
          <button
            className={`px-6 py-3 text-white text-sm font-medium ${
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
                  <p className="text-sm font-medium text-gray-400 w-1/5">
                    {skill.skill}
                  </p>
                  <div className="relative w-3/5">
                    <div className="absolute top-0 left-0 h-2 rounded-full bg-gray-700 w-full"></div>
                    <motion.div
                      className="absolute top-0 left-0 h-2 rounded-full bg-teal-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-6 shadow-md hover:scale-105 hover:shadow-lg transition-transform transform"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="text-5xl mb-2">{platform.icon}</div>
                  <p className="text-sm text-gray-300 font-medium">
                    {platform.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
