interface TerminalProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Terminal({
  title = "ghost-protocol",
  children,
  className = "",
}: TerminalProps) {
  return (
    <div
      className={`bg-dark border border-border rounded-lg overflow-hidden text-left w-full ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-darker border-b border-border">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="text-text-dim text-xs ml-2">{title}</span>
      </div>
      <div className="p-5 text-[13px] leading-[1.8]">{children}</div>
    </div>
  );
}

export function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <span className="text-ghost">$</span>{" "}
      <span className="text-white">{children}</span>
    </div>
  );
}

export function Comment({ children }: { children: React.ReactNode }) {
  return <div className="text-text-dim">{children}</div>;
}

export function Output({ children }: { children?: React.ReactNode }) {
  return <div className="text-text">{children ?? "\u00A0"}</div>;
}
