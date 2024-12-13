import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm <span className="text-red-500">Phong Cao</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">AI&ML Developer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in React, Next.js,
              and modern web technologies. I love creating beautiful and
              functional websites that solve real-world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max rounded-md hover:bg-red-500">
              <a
                href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img src={hero} alt="Hero Image" className="lg:h-[90vh] h-96" />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a
          href="https://www.facebook.com/PhongCao1105/"
          target="https://www.facebook.com/PhongCao1105/"
          rel="Facebook Link"
        >
          <img src={facebook} alt="Facebook Icon" className="w-[4rem]" />
        </a>
        <a
          href="https://www.instagram.com/phongcao1105/"
          target="https://www.instagram.com/phongcao1105/"
          rel="Instagram Link"
        >
          <img src={instagram} alt="Instagram Icon" className="w-[4rem]" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="Twitter Icon" className="w-[4rem]" />
        </a>
        <a
          href="https://www.linkedin.com/in/phong-cao/"
          target="https://www.linkedin.com/in/phong-cao/"
          rel="Linkedin Link"
        >
          <img src={linkedin} alt="LinkedIn Icon" className="w-[4rem]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
