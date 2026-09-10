import { BDR, OLI } from "../constants";

export default function SectionLabel({ n, light = false }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      <span
        style={{
          color: light ? "rgba(168,184,122,0.9)" : OLI,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.7rem",
        }}
        className="font-medium tracking-widest"
      >
        {n}
      </span>
      <div className="h-px flex-1" style={{ background: light ? "rgba(168,184,122,0.25)" : BDR }} />
    </div>
  );
}