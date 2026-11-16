import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const links = [
  {
    href: "https://www.linkedin.com/in/philipp-petersohn",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "https://github.com/philpetersohn",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "mailto:petersohn.phil@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Philipp Petersohn
        </p>
        <div className="flex items-center gap-5">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                className="text-zinc-400 transition hover:text-white"
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
