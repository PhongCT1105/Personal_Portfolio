import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CategoryTrackingChart from './CategoryTrackingChart';
import ProjectTrackingChart from './ProjectTrackingChart';
import VisitorResumeRatio from './VisitorResumeRatio';
import VisitorLineChart from './VisitorLineChart';
import DurationTrackingBarChart from './DurationTrackingDoughnutChart';

const Visualize: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Monitor when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div ref={sectionRef} className="bg-gray-50 shadow-lg rounded-lg py-20">
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}
        >
          {/* General Title */}
          <motion.h3
            className="p-4 text-2xl font-bold text-center mb-8"
            variants={itemVariants}
            transition={{ duration: 0.3 }}
          >
            Data Analytics Showcase
          </motion.h3>

          {/* Section 1: User Interaction Overview */}
          <motion.section
            className="bg-blue-50 shadow-md rounded-lg p-6 mb-8"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold text-left mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:mt-2">
              User Interaction Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                className="bg-white shadow-md rounded-lg p-4"
                variants={itemVariants}
                transition={{ duration: 0.4 }}
              >
                <CategoryTrackingChart />
              </motion.div>

              <motion.div
                className="bg-white shadow-md rounded-lg p-4"
                variants={itemVariants}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-center text-sm font-semibold mb-2">
                  Top 5 Projects with Most Visitors Interactions
                </h3>
                <ProjectTrackingChart limit={5} />
              </motion.div>

              <motion.div
                className="bg-white shadow-md rounded-lg p-4"
                variants={itemVariants}
                transition={{ duration: 0.4 }}
              >
                <VisitorResumeRatio />
              </motion.div>
            </div>
          </motion.section>

          {/* Section 2: Visitor Metrics */}
          <motion.section
            className="bg-blue-50 shadow-md rounded-lg p-6"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-xl font-bold text-left mb-4 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-red-500 after:mt-2">
              Visitor Metrics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <motion.div
                className="col-span-1 sm:col-span-3 md:col-span-2 bg-white shadow-md rounded-lg p-4"
                variants={itemVariants}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-center text-sm font-semibold mb-2">
                  Total Visitors Over Time
                </h3>
                <VisitorLineChart />
              </motion.div>

              <motion.div
                className="col-span-1 sm:col-span-3 md:col-span-1 bg-white shadow-md rounded-lg p-4"
                variants={itemVariants}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-center text-sm font-semibold mb-2">
                  Duration Tracking
                </h3>
                <DurationTrackingBarChart />
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </div>
  );
};

export default Visualize;
