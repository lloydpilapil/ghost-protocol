import FadeIn from "./FadeIn";

const dimensions = [
  {
    title: "Context",
    desc: "Does the work show understanding of the codebase? Existing patterns followed? Dependencies considered?",
    score: "CODEBASE AWARE",
    color: "bg-[rgba(0,255,136,0.15)] text-ghost",
  },
  {
    title: "Model",
    desc: "Right capability level applied? Simple task = simple approach. No over-engineering, no under-engineering.",
    score: "RIGHT-SIZED",
    color: "bg-[rgba(0,255,136,0.15)] text-ghost",
  },
  {
    title: "Prompt",
    desc: "Work aligns with original request? No scope drift? Ambiguities resolved correctly?",
    score: "SCOPE CHECK",
    color: "bg-[rgba(255,204,0,0.15)] text-accent-yellow",
  },
  {
    title: "Tools",
    desc: "Appropriate tools used? Tests written and run? Linting checked? Right thread pattern selected?",
    score: "VERIFIED",
    color: "bg-[rgba(0,255,136,0.15)] text-ghost",
  },
];

export default function CoreFour() {
  return (
    <section
      className="py-30 bg-dark border-y border-border"
      id="core-four"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            Quality Framework
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            The Core Four.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-base text-text-dim max-w-[600px] leading-relaxed mb-16">
            Every thread is evaluated against four dimensions. No hand-waving.
            Scored 1-5 with evidence.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((d, i) => (
            <FadeIn key={d.title} delay={i * 100}>
              <div className="p-8 bg-card border border-border rounded text-center h-full flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2">
                  {d.title}
                </h3>
                <p className="text-[13px] text-text-dim leading-relaxed flex-1">
                  {d.desc}
                </p>
                <span
                  className={`inline-block text-[11px] px-3 py-1 rounded-sm mt-4 tracking-wider ${d.color}`}
                >
                  {d.score}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
