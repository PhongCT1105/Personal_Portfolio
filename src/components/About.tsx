import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import experiencedata from '../data/experience_data';
import TimelineItem from './TimelineItem';
import { trackDurationViewTime } from '../utils/firebaseUtils';

const About = () => {
  const timelineRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollYRef = useRef(0);

  // Page duration tracking
  const startTime = useRef<number>(0);

  useEffect(() => {
    // Start tracking duration
    startTime.current = Date.now();

    // Track duration when the component unmounts
    return () => {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime.current) / 1000); // Convert to seconds
      if (duration > 0) {
        trackDurationViewTime('About', duration); // Call the updated function
      }
    };
  }, []);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(
        currentScrollY > lastScrollYRef.current ? 'down' : 'up'
      );
      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const downVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: 'easeIn' } },
  };

  const upVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Render component
  return (
    <div className="relative bg-gray-100 py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hi, I'm Phong Cao
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            A passionate dual-degree student pursuing a BS in Computer Science
            and an MS in Artificial Intelligence @ WPI.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-gray-900">
            My Journey in AI
          </h3>
          <p className="mt-4 text-lg text-gray-600">
            I began my AI journey five years ago with a computer vision project
            and am now pursuing dual degrees in CS and AI at WPI. I’ve applied
            tools like MERN, Scikit-learn, PyTorch, and LangChain through
            internships and projects, focusing on LLMOps, vector databases, and
            MLOps.
          </p>
        </div>

        {/* Experience Timeline Section */}
        <div
          ref={timelineRef}
          className="relative mt-12"
          style={{ minHeight: '80vh' }}
        >
          <h3 className="text-center text-2xl font-semibold text-red-600 mb-6">
            Experience Timeline
          </h3>

          <motion.div
            className="absolute bg-gray-300"
            style={{
              width: '2px',
              height: lineHeight,
              left: '50%',
              transform: 'translateX(-50%)',
              top: '4rem',
              originY: 0,
            }}
          />

          <div className="relative pt-8 pb-8">
            {experiencedata.map((exp, index) => (
              <TimelineItem
                key={index}
                exp={exp}
                index={index}
                scrollDirection={scrollDirection}
                downVariants={downVariants}
                upVariants={upVariants}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
