import { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const channels = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "petersohn.phil@gmail.com",
    href: "mailto:petersohn.phil@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+1 250 619 1329",
    href: "tel:+12506191329",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "philipp-petersohn",
    href: "https://www.linkedin.com/in/philipp-petersohn",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "philpetersohn",
    href: "https://github.com/philpetersohn",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Vancouver, Canada",
  },
];

function Contact() {
  useEffect(() => {
    const section = document.querySelector("section");
    section.classList.add("fade-in");
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 opacity-0">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-300">
        Contact
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
        Let's talk.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
        Open to new opportunities and collaborations. A project, a question, or
        a hello — I will get back to you.
      </p>
      <div className="mt-12 grid gap-3 sm:grid-cols-2">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const inner = (
            <>
              <Icon className="text-violet-300" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {channel.label}
                </p>
                <p className="mt-1 text-sm text-white">{channel.value}</p>
              </div>
            </>
          );
          const className = `flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-white/20 ${
            channel.label === "Location" ? "sm:col-span-2" : ""
          }`;

          return channel.href ? (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={className}
            >
              {inner}
            </a>
          ) : (
            <div key={channel.label} className={className}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
