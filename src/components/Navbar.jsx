import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  const linkClass = ({ isActive }) =>
    `block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-white/10 text-white"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <NavLink
          to="/"
          onClick={close}
          className="font-display text-lg font-semibold tracking-tight text-white"
        >
          Philipp Petersohn
        </NavLink>
        <button
          className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-200 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="space-y-1 border-t border-white/10 px-4 py-3 md:hidden">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
                onClick={close}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
