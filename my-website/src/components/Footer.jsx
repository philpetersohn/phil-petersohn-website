import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-700 text-blue-100 py-6 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/philipp-petersohn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a
            href="https://github.com/philpetersohn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            <FaGithub className="text-3xl" />
          </a>
          <a
            href="mailto:petersohn.phil@gmail.com"
            className="hover:text-blue-300"
          >
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
        <p className="mt-4 text-lg text-center">
          &copy; 2024 Philipp Petersohn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;