import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, techStack, githubLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl p-6">
      <div className="p-6">
        <h3 className="text-blue-600 text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-sm px-2 py-1 rounded-md hover:scale-110 transition-transform"
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded-md bg-blue-200 flex items-center"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string,
};

export default ProjectCard;
