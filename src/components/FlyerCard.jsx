import { Eye } from "lucide-react";
import { BDR, FG } from "../constants";

// Recibimos "pdf" directamente de las constantes
export default function FlyerCard({ title, subtitle, date, category, color, pdf }) {
  const hasPdf = Boolean(pdf);

  return (
    <div className="flex flex-col border overflow-hidden" style={{ borderColor: BDR, background: "#FFFFFF" }}>
      <div className="aspect-[3/4] flex flex-col" style={{ background: color }}>
        <div className="px-4 py-3 flex items-center justify-between" style={{ background: "rgba(0,0,0,0.18)" }}>
          <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'DM Mono', monospace" }}>
            C.D. ALIJARES
          </span>
          <svg width="18" height="18" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="6" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.9)" />
          </svg>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-5 py-4">
          <svg width="72" height="72" viewBox="0 0 72 72" className="mb-4 opacity-30">
            <circle cx="36" cy="36" r="34" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="36" cy="36" r="24" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="36" cy="36" r="15" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="36" cy="36" r="8" fill="none" stroke="white" strokeWidth="1" />
            <circle cx="36" cy="36" r="3" fill="white" opacity="0.9" />
          </svg>
          <p className="text-xs text-center mb-3" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Mono', monospace" }}>
            {category.toUpperCase()}
          </p>
          <h4 className="text-center font-semibold leading-tight" style={{ fontFamily: "'Spectral', serif", color: "#FFFFFF", fontSize: "0.95rem" }}>
            {title}
          </h4>
          <p className="text-xs text-center mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
            {subtitle}
          </p>
        </div>

        <div className="px-4 py-3 text-center" style={{ background: "rgba(0,0,0,0.25)" }}>
          <span className="text-sm font-semibold tracking-widest" style={{ color: "#FFFFFF", fontFamily: "'DM Mono', monospace" }}>
            {date}
          </span>
        </div>
      </div>

      <div className="p-4">
        <a
          href={hasPdf ? pdf : undefined}
          target={hasPdf ? "_blank" : undefined}
          rel={hasPdf ? "noopener noreferrer" : undefined}
          onClick={(e) => {
            if (!hasPdf) {
              e.preventDefault();
              alert("Cartel o programa no disponible todavía.");
            }
          }}
          className={`w-full flex items-center justify-center gap-2 text-xs font-medium py-2.5 px-3 border transition-colors duration-200 text-center ${
            hasPdf ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
          }`}
          style={{ border: `1px solid ${BDR}`, color: FG }}
          onMouseEnter={(event) => {
            if (hasPdf) {
              event.currentTarget.style.borderColor = "#7A8C38";
              event.currentTarget.style.color = "#7A8C38";
            }
          }}
          onMouseLeave={(event) => {
            if (hasPdf) {
              event.currentTarget.style.borderColor = BDR;
              event.currentTarget.style.color = FG;
            }
          }}
        >
          <Eye className="w-3.5 h-3.5" />
          {hasPdf ? "Previsualizar Cartel / Programa (PDF)" : "Cartel Próximamente"}
        </a>
      </div>
    </div>
  );
}