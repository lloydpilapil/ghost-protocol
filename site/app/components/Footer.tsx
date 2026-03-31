export default function Footer() {
  return (
    <footer className="py-12 border-t border-border text-center">
      <div className="max-w-[1100px] mx-auto px-6">
        <p className="text-ghost text-sm font-bold tracking-[3px] mb-4">
          GHOST PROTOCOL
        </p>
        <p className="text-xs text-text-dim leading-8">
          Silent agents. Clean code. No trace left behind.
        </p>
        <p className="text-xs text-text-dim leading-8 mt-4">
          Thread patterns adapted from{" "}
          <a
            href="https://github.com/nicholaspilapil/thread-engineering-kit"
            className="text-ghost hover:opacity-80 transition-opacity"
          >
            Thread Engineering Kit
          </a>{" "}
          by{" "}
          <a
            href="https://www.lloydpilapil.com/"
            className="text-ghost hover:opacity-80 transition-opacity"
          >
            Lloyd Pilapil
          </a>
          <br />
          Multi-agent model inspired by{" "}
          <a
            href="https://github.com/bradygaster/squad"
            className="text-ghost hover:opacity-80 transition-opacity"
          >
            Squad
          </a>{" "}
          by Brady Gaster
        </p>
        <p className="text-xs text-text-dim mt-4">MIT License</p>
      </div>
    </footer>
  );
}
