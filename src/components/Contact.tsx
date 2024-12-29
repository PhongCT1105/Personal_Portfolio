import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';
import { PopupWidget } from 'react-calendly';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'; // Import icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setFormStatus('submitting');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
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
                href="https://www.facebook.com/PhongCao1105/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-blue-600 transition-transform transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={32} />
              </a>
              <a
                href="https://www.instagram.com/phongcao1105/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-pink-500 transition-transform transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/phong-cao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-blue-700 transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={32} />
              </a>
              <a
                href="https://github.com/PhongCT1105"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-black transition-transform transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={32} />
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={4}
                className="mt-1 p-3 w-full rounded-md border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200 shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded-md shadow-md hover:bg-red-600 transition"
              disabled={formStatus === 'submitting'}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'success' && (
              <p className="text-green-600 mt-2">Message sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
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
