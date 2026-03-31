import FadeIn from "./FadeIn";

const rows = [
  {
    cap: "Named specialist agents",
    squad: { text: "Yes", highlight: true },
    tek: { text: "No", highlight: false },
    gp: { text: "Yes", highlight: true },
  },
  {
    cap: "Structured execution patterns",
    squad: { text: "No", highlight: false },
    tek: { text: "9 patterns", highlight: true },
    gp: { text: "9 patterns", highlight: true },
  },
  {
    cap: "Persistent agent memory",
    squad: { text: "Yes", highlight: true },
    tek: { text: "Stateless", highlight: false },
    gp: { text: "Yes", highlight: true },
  },
  {
    cap: "Human checkpoints",
    squad: { text: "Ad hoc", highlight: false },
    tek: { text: "Per-pattern", highlight: true },
    gp: { text: "Per-pattern", highlight: true },
  },
  {
    cap: "Quality framework",
    squad: { text: "Reviewer gates", highlight: false },
    tek: { text: "Core Four", highlight: true },
    gp: { text: "Core Four + agent review", highlight: true },
  },
  {
    cap: "Dual routing (who + how)",
    squad: { text: "Who only", highlight: false },
    tek: { text: "How only", highlight: false },
    gp: { text: "Who + How", highlight: true },
  },
  {
    cap: "Ceremonies (retros, design review)",
    squad: { text: "Yes", highlight: true },
    tek: { text: "No", highlight: false },
    gp: { text: "Yes, auto-triggered", highlight: true },
  },
];

function Cell({ text, highlight }: { text: string; highlight: boolean }) {
  return (
    <td
      className={`px-4 py-4 text-[13px] border-b border-border ${
        highlight ? "text-ghost" : "text-text-dim"
      }`}
    >
      {text}
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="py-30" id="comparison">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            Why Ghost Protocol
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-4 tracking-tight">
            The best of both worlds.
          </h2>
        </FadeIn>
        <FadeIn>
          <p className="text-base text-text-dim max-w-[600px] leading-relaxed mb-8">
            Squad solved &ldquo;who.&rdquo; Thread Engineering solved
            &ldquo;how.&rdquo; Ghost Protocol solves both.
          </p>
        </FadeIn>

        <FadeIn>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-4 py-4 text-left text-[11px] text-text-dim tracking-wider uppercase font-normal border-b border-border">
                    Capability
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] text-text-dim tracking-wider uppercase font-normal border-b border-border">
                    Squad
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] text-text-dim tracking-wider uppercase font-normal border-b border-border">
                    Thread Engineering
                  </th>
                  <th className="px-4 py-4 text-left text-[11px] text-text-dim tracking-wider uppercase font-normal border-b border-border">
                    Ghost Protocol
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.cap}>
                    <td className="px-4 py-4 text-[13px] text-white font-semibold border-b border-border">
                      {r.cap}
                    </td>
                    <Cell {...r.squad} />
                    <Cell {...r.tek} />
                    <Cell {...r.gp} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
