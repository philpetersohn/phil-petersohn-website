import PropTypes from "prop-types";

const ProjectCard = ({ title, description, techStack, githubLink, liveLink }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20">
      <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-zinc-400">
        {description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      {(githubLink || liveLink) && (
        <div className="mt-6 flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-violet-300 transition hover:text-violet-200"
            >
              View on GitHub
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              Live site
            </a>
          )}
        </div>
      )}
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string,
};

export default ProjectCard;
