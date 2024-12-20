import React from 'react';
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
  SiFlask,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiLinux,
} from 'react-icons/si';

const TechStack = () => {
  const stackCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { icon: <SiPython />, name: 'Python' },
        { icon: <SiC />, name: 'C' },
        { icon: <SiCplusplus />, name: 'C++' },
        { icon: <SiTypescript />, name: 'TypeScript' },
        { icon: <SiJavascript />, name: 'JavaScript' },
      ],
    },
    {
      category: 'Frameworks & Tools',
      skills: [
        { icon: <SiPytorch />, name: 'PyTorch' },
        { icon: <SiTensorflow />, name: 'TensorFlow' },
        { icon: <SiReact />, name: 'React' },
        { icon: <SiNodedotjs />, name: 'Node.js' },
        { icon: <SiFlask />, name: 'Flask' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
      ],
    },
    {
      category: 'Cloud and DevOps',
      skills: [
        { icon: <SiGooglecloud />, name: 'GCP' },
        { icon: <SiDocker />, name: 'Docker' },
        { icon: <SiKubernetes />, name: 'Kubernetes' },
        { icon: <SiLinux />, name: 'Linux' },
      ],
    },
    {
      category: 'Certifications',
      skills: [
        {
          icon: null,
          name: 'Microsoft Certified Azure AI Engineer Associate (in-progress)',
        },
      ],
    },
  ];

  return (
    <div className="py-10 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tech Stack</h2>
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-700 px-4 py-2">Category</th>
              <th className="border border-gray-700 px-4 py-2">Skills</th>
            </tr>
          </thead>
          <tbody>
            {stackCategories.map((category, index) => (
              <tr key={index}>
                <td className="border border-gray-700 px-4 py-2 font-bold">
                  {category.category}
                </td>
                <td className="border border-gray-700 px-4 py-2 flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-2"
                    >
                      {skill.icon && (
                        <div className="text-2xl">{skill.icon}</div>
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechStack;
