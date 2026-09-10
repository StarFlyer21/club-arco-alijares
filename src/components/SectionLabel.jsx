/**
 * ============================================================================
 * C.D. ALIJARES — ETIQUETA NUMÉRICA DE SECCIÓN
 * ============================================================================
 * Elemento gráfico que sitúa el número de sección acompañado de un divisor horizontal.
 * 
 * Props:
 *  - n: Cadena con el número de índice (ej. "01", "07").
 *  - light: Booleano para alternar entre modo claro y modo sobre fondo oscuro.
 */

import { BDR, OLI } from "../constants";

export default function SectionLabel({ n, light = false }) {
  return (
    <div className="flex items-center gap-4 mb-3">
      {/* Código numérico en fuente monoespaciada */}
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

      {/* Línea divisoria expansiva */}
      <div className="h-px flex-1" style={{ background: light ? "rgba(168,184,122,0.25)" : BDR }} />
    </div>
  );
}