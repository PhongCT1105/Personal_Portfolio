import React, { useEffect, useRef } from 'react';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
import { PopupWidget } from 'react-calendly';
import { trackDurationViewTime } from '../utils/firebaseUtils';

const Contact = () => {
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
        trackDurationViewTime('Contact', duration); // Call the updated function
      }
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Have a project in mind or just want to say hello? Drop me a
              message, or schedule a meeting using the Calendly widget below!
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="transition-transform transform hover:scale-110"
                aria-label="Facebook"
              >
                <img src={facebook} alt="Facebook" className="h-8 w-8" />
              </a>
              <a
                href="#"
                className="transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="h-8 w-8" />
              </a>
              <a
                href="#"
                className="transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8" />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[300px] md:w-[400px] lg:w-[450px]"
            />
          </div>

          {/* Form Section */}
          <form
            className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8 space-y-6"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-bold text-gray-800">Contact Me</h3>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="mt-1 p-3 w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="mt-1 p-3 w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                rows={4}
                className="mt-1 p-3 w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md shadow-md hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Calendly Section */}
        <PopupWidget
          url="https://calendly.com/caothanhphong1105"
          rootElement={document.getElementById('root')!}
          text="Schedule a Meeting"
          color="#EF4444"
          textColor="#FFFFFF"
        />
      </div>
    </section>
  );
};

export default Contact;
