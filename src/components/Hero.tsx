import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="relative w-full overflow-hidden"
      id="home"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 10,
        duration: 1,
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between lg:h-[90vh]">
          {/* Text Section */}
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-4 md:px-0 mt-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 12,
              delay: 0.2,
            }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight lg:leading-snug">
              Hi There, <br />
              I'm{' '}
              <span className="text-red-500">
                <TypeAnimation
                  sequence={['Phong Cao', 1000, 'AI & ML Dev', 1000]}
                  wrapper="span"
                  speed={30}
                  style={{ fontSize: '1em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-4">
              Specialist in AI & ML Solutions
            </p>

            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional websites that solve real-world problems.
            </p>
            <button className="bg-black text-white px-4 py-2 w-max rounded-md hover:bg-red-500">
              <a
                href="https://drive.google.com/uc?id=1yqd09KUH68008ZV6Qc44YpeIi5QGAiFr&export=download"
                download="Phong_Cao_Resume.pdf"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </button>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            className="md:w-1/2 flex justify-center items-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 60,
              damping: 12,
              delay: 0.4,
            }}
          >
            <img
              src={hero}
              alt="Hero Image"
              className="w-full max-w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Social Media Links */}
      <motion.div
        className="absolute top-20 md:top-40 right-2 md:right-10 bg-gray-200 p-4 hidden md:flex flex-col gap-6 rounded-full"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 10,
          delay: 0.6,
        }}
      >
        <a
          href="https://www.facebook.com/PhongCao1105/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook Icon" className="w-10 h-10" />
        </a>
        <a
          href="https://www.instagram.com/phongcao1105/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram Icon" className="w-10 h-10" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter Icon" className="w-10 h-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/phong-cao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn Icon" className="w-10 h-10" />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
