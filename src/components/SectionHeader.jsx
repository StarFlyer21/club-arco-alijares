import { FG, MFG } from "../constants";
import SectionLabel from "./SectionLabel";

export default function SectionHeader({ n, title, subtitle, light = false }) {
  return (
    <div className="mb-14">
      <SectionLabel n={n} light={light} />
      <h2
        className="font-bold mb-2"
        style={{
          fontFamily: "'Spectral', serif",
          fontSize: "clamp(1.65rem, 3.5vw, 2.4rem)",
          color: light ? "#F8F5EE" : FG,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed" style={{ color: light ? "rgba(212,201,168,0.85)" : MFG }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}