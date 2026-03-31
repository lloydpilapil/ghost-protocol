import FadeIn from "./FadeIn";

const problems = [
  {
    icon: "\uD83D\uDCA5",
    title: "Scope Creep",
    bad: "Agent expands beyond what you asked",
    fix: "Thread patterns enforce scope limits and escalation triggers",
  },
  {
    icon: "\uD83E\uDDE0",
    title: "Lost Context",
    bad: "Agent forgets decisions from 20 messages ago",
    fix: "Agent history files and team decisions persist across sessions",
  },
  {
    icon: "\uD83D\uDC41\uFE0F",
    title: "No Visibility",
    bad: "You don't know what the agent decided or why",
    fix: "Structured output, decision logging, Scribe session archive",
  },
  {
    icon: "\uD83D\uDEA7",
    title: "No Quality Gate",
    bad: "Work ships without structured review",
    fix: "Core Four framework, Review Thread, agent-specific quality checks",
  },
];

export default function Problems() {
  return (
    <section className="py-30 bg-dark border-y border-border" id="problem">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            The Problem
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            AI agents are powerful.
            <br />
            Unstructured AI agents are chaos.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-base text-text-dim max-w-[600px] leading-relaxed mb-16">
            Without structure, you get four failure modes. Ghost Protocol
            eliminates all of them.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 100}>
              <div className="p-8 bg-card border border-border rounded h-full">
                <div className="text-2xl mb-4">{p.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-[13px] text-text-dim leading-relaxed">
                  <span className="text-accent-red line-through opacity-60">
                    {p.bad}
                  </span>
                  <br />
                  <span className="text-ghost">{p.fix}</span>
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
