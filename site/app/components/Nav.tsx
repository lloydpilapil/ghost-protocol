"use client";

const links = [
  { href: "#agents", label: "Agents" },
  { href: "#threads", label: "Patterns" },
  { href: "#routing", label: "Routing" },
  { href: "#core-four", label: "Core Four" },
  { href: "#install", label: "Install" },
  {
    href: "https://github.com/lloydpilapil/ghost-protocol",
    label: "GitHub",
    external: true,
  },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full z-100 bg-black/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-15">
        <span className="text-sm font-bold text-ghost tracking-[3px] uppercase">
          Ghost Protocol
        </span>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-text-dim text-xs tracking-wider uppercase hover:text-ghost transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
