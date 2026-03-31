import FadeIn from "./FadeIn";
import Terminal, { Prompt, Comment, Output } from "./Terminal";

export default function Install() {
  return (
    <section className="py-30 text-center" id="install">
      <div className="max-w-[1100px] mx-auto px-6">
        <FadeIn>
          <p className="text-[11px] text-ghost tracking-[4px] uppercase mb-4">
            Get Started
          </p>
        </FadeIn>
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold text-white mb-16 tracking-tight">
            One command. A team that
            <br />
            executes and disappears.
          </h2>
        </FadeIn>

        <FadeIn className="max-w-[600px] mx-auto">
          <Terminal title="terminal">
            <Prompt>
              git clone https://github.com/lloydpilapil/ghost-protocol.git
            </Prompt>
            <Prompt>cd ghost-protocol</Prompt>
            <Prompt>chmod +x install.sh</Prompt>
            <Prompt>./install.sh /path/to/your/project</Prompt>
            <Output />
            <Output>
              <span className="text-ghost">
                Ghost Protocol installed successfully!
              </span>
            </Output>
            <Output />
            <Comment># Or just copy the files manually:</Comment>
            <Prompt>cp -r .ghost-protocol /your/project/</Prompt>
            <Prompt>
              cp copilot/instructions.md
              /your/project/.github/copilot-instructions.md
            </Prompt>
          </Terminal>
        </FadeIn>
      </div>
    </section>
  );
}
