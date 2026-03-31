import FadeIn from "./FadeIn";

const execution = [
  {
    name: "Base Thread",
    type: "Single Task",
    desc: "One agent, one task, one review. The fundamental unit. Bug fix, small feature, isolated change.",
    checkpoints: "Start + End",
  },
  {
    name: "P-Thread",
    type: "Parallel",
    desc: "3-5 agents work simultaneously on independent sub-tasks. No shared files, no cross-talk, integration after.",
    checkpoints: "Start + End",
  },
  {
    name: "C-Thread",
    type: "Chain",
    desc: "Sequential phases with human review between each. Different agents can own different phases with explicit handoffs.",
    checkpoints: "Between every phase",
  },
  {
    name: "L-Thread",
    type: "Long Duration",
    desc: "Extended autonomous work with task tracking and self-checkpoints. Plan upfront, execute with breadcrumbs, escalate when needed.",
    checkpoints: "Optional self-checkpoints",
  },
  {
    name: "B-Thread",
    type: "Big / Hierarchical",
    desc: "Flight coordinates a tree of specialist agents with dependencies. Design Review before launch, contracts between agents.",
    checkpoints: "Start + End",
  },
  {
    name: "F-Thread",
    type: "Fusion / Competitive",
    desc: "2-3 agents compete with different strategies. Flight evaluates, user picks the winner. For when the right approach is uncertain.",
    checkpoints: "Start + Selection + End",
  },
  {
    name: "Z-Thread",
    type: "Zero-Touch",
    desc: "Fully autonomous. Agent self-verifies through tests. FIDO must approve test coverage first. Max 3 self-fix attempts before escalation.",
    checkpoints: "End only",
  },
];

const quality = [
  {
    name: "Review Thread",
    type: "Quality Gate",
    desc: "Post-execution evaluation using the Core Four framework. GREEN / YELLOW / RED rating. FIDO leads, RETRO checks security.",
    info: "GREEN \u00B7 YELLOW \u00B7 RED",
    label: "Rating",
  },
  {
    name: "Status Thread",
    type: "Metrics Dashboard",
    desc: "Thread metrics, agent utilization, optimization suggestions. Read-only. Run at session end for continuous improvement.",
    info: "Read-only analysis",
    label: "Mode",
  },
];

export default function Threads() {
  return (
    <section
      className="py-30 bg-dark border-y border-border"
      id="threads"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            Execution Patterns
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            9 thread patterns.
            <br />
            Pick the shape, not just the prompt.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-base text-text-dim max-w-[600px] leading-relaxed mb-16">
            Each pattern defines how work is structured: checkpoints,
            parallelism, phases, verification loops. The right pattern prevents
            scope creep before it starts.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {execution.map((t, i) => (
            <FadeIn key={t.name} delay={i * 75}>
              <div className="p-6 bg-card border border-border rounded border-l-3 border-l-ghost h-full">
                <h3 className="text-[15px] font-bold text-white mb-1">
                  {t.name}
                </h3>
                <p className="text-[11px] text-ghost tracking-wider uppercase mb-3">
                  {t.type}
                </p>
                <p className="text-[13px] text-text-dim leading-relaxed mb-3">
                  {t.desc}
                </p>
                <p className="text-xs text-text">
                  <span className="text-text-dim">Checkpoints:</span>{" "}
                  {t.checkpoints}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quality.map((t, i) => (
            <FadeIn key={t.name} delay={i * 75}>
              <div className="p-6 bg-card border border-border rounded border-l-3 border-l-accent-yellow h-full">
                <h3 className="text-[15px] font-bold text-white mb-1">
                  {t.name}
                </h3>
                <p className="text-[11px] text-accent-yellow tracking-wider uppercase mb-3">
                  {t.type}
                </p>
                <p className="text-[13px] text-text-dim leading-relaxed mb-3">
                  {t.desc}
                </p>
                <p className="text-xs text-text">
                  <span className="text-text-dim">{t.label}:</span> {t.info}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
