import FadeIn from "./FadeIn";
import Terminal, { Prompt, Comment, Output } from "./Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-15 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-ghost-dim)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-[1100px] mx-auto px-6">
        <FadeIn delay={200}>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-8">
            Thread-Based Multi-Agent Engineering
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <h1 className="text-[clamp(48px,8vw,96px)] font-extrabold text-white leading-none tracking-tight mb-6">
            Ghost
            <br />
            <span className="text-ghost">Protocol</span>
          </h1>
        </FadeIn>

        <FadeIn delay={600}>
          <p className="text-lg text-text-dim max-w-[600px] leading-relaxed mb-12">
            Agents execute autonomously, leave clean results, disappear. Named
            specialists running disciplined execution patterns for GitHub
            Copilot.
          </p>
        </FadeIn>

        <FadeIn delay={800}>
          <div className="flex gap-4 flex-col sm:flex-row">
            <a
              href="#install"
              className="px-8 py-3.5 bg-ghost text-black text-[13px] font-semibold tracking-wider uppercase hover:shadow-[0_0_30px_var(--color-ghost-dim)] transition-shadow"
            >
              Get Started
            </a>
            <a
              href="https://github.com/lloydpilapil/ghost-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-ghost text-ghost text-[13px] font-semibold tracking-wider uppercase hover:bg-ghost-dim transition-colors"
            >
              View Source
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={1000} className="w-full max-w-[700px] mt-12">
          <Terminal>
            <Prompt>ghost-protocol init</Prompt>
            <Comment># Routing to EECOM + Chain Thread...</Comment>
            <Output />
            <Output>
              C-THREAD: Payment System | Phase 1/4 | Agent: EECOM
            </Output>
            <Output>CURRENT PHASE: Stripe integration</Output>
            <Output>
              STATUS: <span className="text-ghost">Complete</span>
            </Output>
            <Output>HANDOFF TO: CAPCOM &mdash; webhook contracts ready</Output>
            <Output />
            <Comment>
              # CHECKPOINT: Approve and continue to Phase 2? [Y/n]
            </Comment>
          </Terminal>
        </FadeIn>
      </div>
    </section>
  );
}
