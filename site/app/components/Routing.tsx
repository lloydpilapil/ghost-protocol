import FadeIn from "./FadeIn";

const examples = [
  {
    input:
      "Fix the pagination bug. Off-by-one error returning 9 items instead of 10.",
    agent: "EECOM",
    pattern: "Base Thread",
    result: "EECOM executes a scoped fix, presents for review",
  },
  {
    input:
      "Implement auth system. Phase 1: schema. Phase 2: API. Phase 3: frontend. Phase 4: tests.",
    agent: "EECOM \u2192 CAPCOM \u2192 EECOM \u2192 FIDO",
    pattern: "Chain Thread",
    result:
      "Sequential phases with explicit handoffs, human review between each",
  },
  {
    input:
      "Evaluate WebSocket vs SSE vs polling for real-time dashboard updates.",
    agent: "Flight (leads)",
    pattern: "Fusion Thread",
    result: "3 strategies compete, Flight evaluates, you pick the winner",
  },
];

export default function Routing() {
  return (
    <section className="py-30" id="routing">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            Dual Routing
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            Every task gets a who and a how.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-base text-text-dim max-w-[600px] leading-relaxed mb-16">
            The coordinator selects the specialist agent AND the execution
            pattern. Not one or the other. Both.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {examples.map((ex, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="bg-card border border-border rounded p-8">
                <div className="mb-4 pb-4 border-b border-border">
                  <span className="block text-[11px] text-text-dim tracking-wider uppercase mb-2">
                    You say
                  </span>
                  <p className="text-sm text-text">&ldquo;{ex.input}&rdquo;</p>
                </div>
                <div className="flex flex-wrap gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-text-dim uppercase tracking-wider">
                      Agent
                    </span>
                    <span className="text-[13px] text-ghost bg-ghost-dim px-3 py-1 rounded-sm">
                      {ex.agent}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-text-dim uppercase tracking-wider">
                      Pattern
                    </span>
                    <span className="text-[13px] text-ghost bg-ghost-dim px-3 py-1 rounded-sm">
                      {ex.pattern}
                    </span>
                  </div>
                </div>
                <p className="text-[13px] text-text-dim">
                  &rarr; {ex.result}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
