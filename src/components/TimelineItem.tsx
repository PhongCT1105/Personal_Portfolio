import React, { useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

interface ExperienceData {
  role: string;
  company: string;
  duration: string;
  description: string[]; // Changed to an array of strings for bullet points
  image: string;
}

interface TimelineItemProps {
  exp: ExperienceData;
  index: number;
  downVariants: Variants;
  upVariants: Variants;
  scrollDirection: 'down' | 'up';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  exp,
  index,
  scrollDirection,
  downVariants,
  upVariants,
}) => {
  const itemRef = useRef(null);
  const inView = useInView(itemRef, {
    once: false,
    margin: '-100px 0px -100px 0px',
  });

  const variants = scrollDirection === 'down' ? downVariants : upVariants;
  const isOdd = index % 2 !== 0;

  return (
    <motion.div
      ref={itemRef}
      className={`relative w-full md:w-1/2 my-12 px-4 ${
        isOdd ? 'md:ml-auto md:pr-8' : 'md:mr-auto md:pl-8'
      }`}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit="exit"
    >
      <div
        className={`flex items-center gap-4 ${isOdd ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-red-600 flex-shrink-0" />
        <div className="h-0.5 bg-gray-300 flex-grow" />
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <div className="flex items-start gap-4">
            {isOdd ? null : (
              <img
                src={exp.image}
                alt={exp.role}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
              />
            )}
            <div>
              <h4 className="text-md md:text-lg font-bold text-gray-800">
                {exp.role}
              </h4>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm font-medium text-red-600 mt-1">
                {exp.duration}
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            {isOdd ? (
              <img
                src={exp.image}
                alt={exp.role}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover flex-shrink-0"
              />
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
