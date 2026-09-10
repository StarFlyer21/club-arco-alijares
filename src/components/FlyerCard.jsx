/**
 * ============================================================================
 * C.D. ALIJARES — TARJETA DE CARTEL DEPORTIVO / EVENTO (FLYERCARD)
 * ============================================================================
 * Presentación visual en proporción 3:4 que emula un cartel oficial de tirada
 * o competición. Gestiona la previsualización del documento técnico en PDF.
 * 
 * Props:
 *  - title: Nombre oficial del trofeo o tirada deportiva.
 *  - subtitle: Modalidad o localización específica dentro del bosque.
 *  - date: Fecha formateada visible para el usuario.
 *  - category: Tipología ('Tirada Local', 'Competición Oficial', 'Liga').
 *  - color: Tono cromático de fondo del cartel.
 *  - pdf: Ruta estática al archivo PDF en /public (o null si está en preparación).
 */

import { Eye } from "lucide-react";
import { BDR, FG } from "../constants";

export default function FlyerCard({ title, subtitle, date, category, color, pdf }) {
  const hasPdf = Boolean(pdf);

  return (
    <div className="flex flex-col border overflow-hidden" style={{ borderColor: BDR, background: "#FFFFFF" }}>
      {/* Lienzo del cartel en proporción vertical 3:4 */}
      <div className="aspect-[3/4] flex flex-col" style={{ background: color }}>
        {/* Franja superior institucional */}
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

        {/* Cuerpo central: Diana concéntrica y datos de la competición */}
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

        {/* Franja inferior con la fecha del evento */}
        <div className="px-4 py-3 text-center" style={{ background: "rgba(0,0,0,0.25)" }}>
          <span className="text-sm font-semibold tracking-widest" style={{ color: "#FFFFFF", fontFamily: "'DM Mono', monospace" }}>
            {date}
          </span>
        </div>
      </div>

      {/* Botón de acceso al PDF oficial del evento */}
      <div className="p-4">
        {hasPdf ? (
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 text-xs font-medium py-2.5 px-3 border transition-colors duration-200 text-center no-underline cursor-pointer"
            style={{ border: `1px solid ${BDR}`, color: FG }}
            onMouseEnter={(event) => {
              event.currentTarget.style.borderColor = "#7A8C38";
              event.currentTarget.style.color = "#7A8C38";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.borderColor = BDR;
              event.currentTarget.style.color = FG;
            }}
          >
            <Eye className="w-3.5 h-3.5" />
            Previsualizar Cartel / Programa (PDF)
          </a>
        ) : (
          <div
            className="w-full flex items-center justify-center gap-2 text-xs font-medium py-2.5 px-3 border text-center opacity-60 cursor-not-allowed select-none"
            style={{ border: `1px solid ${BDR}`, color: FG }}
          >
            <Eye className="w-3.5 h-3.5" />
            Cartel Próximamente
          </div>
        )}
      </div>
    </div>
  );
}