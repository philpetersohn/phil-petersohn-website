import { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Contact.css"; // Import the CSS file

function Contact() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("slide-in");
  }, []);

  return (
    <section className="flex flex-col items-center justify-center opacity-0  my-6 px-8 md:px-4 lg:px-0">
      <div className="text-center">
        <h1 className="text-blue-600 text-4xl md:text-6xl font-bold my-6">
          Contact Me
        </h1>
        <p className="text-xl md:text-2xl mb-8 md:mb-11 max-w-3xl mx-auto">
          I am always open to new opportunities and collaborations. Feel free to
          reach out through any of the following channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="flex flex-col items-center text-lg mb-2 md:col-span-1 md:col-start-1">
            <FaEnvelope className="hover:scale-110 transition-transform text-blue-600 mb-1 text-3xl" />
            <h1 className="text-blue-600 mb-1 font-bold">Email</h1>
            <a href="mailto:petersohn.phil@gmail.com" className="text-blue-900">
              petersohn.phil@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center text-lg mb-2 md:col-span-1 md:col-start-3">
            <FaMapMarkerAlt className="hover:scale-110 transition-transform text-blue-600 mb-1 text-3xl" />
            <h1 className="text-blue-600 mb-1 font-bold">Location</h1>
            <span className="text-blue-900">Vancouver, Canada</span>
          </div>
          <div className="flex flex-col items-center text-lg mb-2 md:col-span-3">
            <FaPhone className="hover:scale-110 transition-transform text-blue-600 mb-1 text-3xl" />
            <h1 className="text-blue-600 mb-1 font-bold">Phone</h1>
            +1 250 619 1329
          </div>
          <div className="flex flex-col items-center text-lg mb-2 md:col-span-1 md:col-start-1">
            <FaLinkedin className="hover:scale-110 transition-transform text-blue-600 mb-1 text-3xl" />
            <h1 className="text-blue-600 mb-1 font-bold">LinkedIn</h1>
            <a
              href="https://www.linkedin.com/in/philipp-petersohn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900"
            >
              linkedin.com/in/philipp-petersohn
            </a>
          </div>
          <div className="flex flex-col items-center text-lg mb-2 md:col-span-1 md:col-start-3">
            <FaGithub className="hover:scale-110 transition-transform text-blue-600 mb-1 text-3xl" />
            <h1 className="text-blue-600 mb-1 font-bold">GitHub</h1>
            <a
              href="https://github.com/philpetersohn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900"
            >
              github.com/philipp-petersohn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
