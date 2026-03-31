import FadeIn from "./FadeIn";

const agents = [
  {
    name: "Flight",
    role: "Lead / Architect",
    desc: "The one who sees the whole board. Refuses to let tactical wins create strategic debt. Evaluates trade-offs, coordinates big work, kills features to protect architecture.",
    patterns: ["Fusion", "Big", "Review"],
    silent: false,
  },
  {
    name: "EECOM",
    role: "Core Developer",
    desc: 'Ships working code. Three lines of duplication beats a premature abstraction. Pragmatic, code-first, treats "it compiles" as different from "it works."',
    patterns: ["Base", "Chain", "Long", "Zero"],
    silent: false,
  },
  {
    name: "FIDO",
    role: "Quality Owner",
    desc: "The gatekeeper. 80% coverage is the floor, not the ceiling. Prefers integration tests over mocks. Will block a merge if tests are missing.",
    patterns: ["Review", "Status", "Zero (verify)"],
    silent: false,
  },
  {
    name: "Procedures",
    role: "Prompt Engineer",
    desc: "The architect of agent behavior. Treats every word in a charter like a line of code. If an agent has to ask for help, the prompt failed.",
    patterns: ["Big (design)", "Base"],
    silent: false,
  },
  {
    name: "PAO",
    role: "Docs / DevRel",
    desc: "If the docs are wrong, the feature doesn't exist. Allergic to jargon. Inline code examples are worth a thousand words.",
    patterns: ["Base", "Chain (docs phase)"],
    silent: false,
  },
  {
    name: "CAPCOM",
    role: "Integration Specialist",
    desc: "The translator between your code and the outside world. Every API call gets a timeout, every webhook gets idempotency, every response gets validated.",
    patterns: ["Chain", "Big", "Base"],
    silent: false,
  },
  {
    name: "RETRO",
    role: "Security",
    desc: 'The paranoid one. Justifiably so. Assumes every input is hostile. Will block a merge over a missing CSRF token. "We\'ll add auth later" is the most dangerous sentence.',
    patterns: ["Review", "Base", "Chain"],
    silent: false,
  },
  {
    name: "Scribe",
    role: "Session Logger",
    desc: "The team's memory. Invisible until you need the receipts. Runs in the background after every thread. If it wasn't logged, it didn't happen.",
    patterns: ["Background (always)"],
    silent: true,
  },
];

export default function Agents() {
  return (
    <section className="py-30" id="agents">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            The Team
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            8 named specialists.
            <br />
            Each with a charter, a history, and opinions.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-base text-text-dim max-w-[600px] leading-relaxed mb-16">
            Not generic bots wearing hats. Each agent has defined expertise,
            boundaries, and a persistent memory of past work.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agents.map((a, i) => (
            <FadeIn key={a.name} delay={i * 75}>
              <div className="p-6 bg-card border border-border rounded hover:border-ghost-mid transition-colors h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      a.silent
                        ? "bg-text-dim"
                        : "bg-ghost shadow-[0_0_8px_var(--color-ghost)]"
                    }`}
                  />
                  <span className="text-[15px] font-bold text-white">
                    {a.name}
                  </span>
                  <span className="text-[11px] text-ghost tracking-wider uppercase ml-auto">
                    {a.role}
                  </span>
                </div>
                <p className="text-[13px] text-text-dim leading-relaxed mb-3">
                  {a.desc}
                </p>
                <p className="text-[11px] text-text-dim">
                  Patterns:
                  {a.patterns.map((p) => (
                    <span
                      key={p}
                      className="text-text bg-darker px-2 py-0.5 rounded-sm ml-1"
                    >
                      {p}
                    </span>
                  ))}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
