/**
 * ============================================================================
 * C.D. ALIJARES — ENCABEZADO DE SECCIÓN
 * ============================================================================
 * Titular estandarizado para las distintas secciones del portal web.
 * Garantiza consistencia jerárquica con escala tipográfica fluida.
 * 
 * Props:
 *  - n: Índice numérico formateado de la sección (ej. "01", "02").
 *  - title: Título principal de la sección.
 *  - subtitle: Párrafo descriptivo contextual (opcional).
 *  - light: Booleano para invertir colores en fondos oscuros (default: false).
 */

import { FG, MFG } from "../constants";
import SectionLabel from "./SectionLabel";

export default function SectionHeader({ n, title, subtitle, light = false }) {
  return (
    <div className="mb-14">
      {/* Indicador numérico superior con línea divisoria */}
      <SectionLabel n={n} light={light} />

      {/* Titular principal tipográfico */}
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

      {/* Subtítulo explicativo */}
      {subtitle && (
        <p className="max-w-xl text-base leading-relaxed" style={{ color: light ? "rgba(212,201,168,0.85)" : MFG }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}