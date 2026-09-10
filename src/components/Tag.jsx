/**
 * ============================================================================
 * C.D. ALIJARES — INSIGNIA DE ESTADO DE HORARIO (TAG)
 * ============================================================================
 * Representa visualmente el estado de apertura y disponibilidad de una instalación.
 * Incorpora un objeto de respaldo (fallback) para asegurar que el componente
 * nunca lance errores de ejecución si la clave recibida es indefinida o no coincide.
 * 
 * Props:
 *  - tag: Clave de estado ('Acceso Libre', 'Curso Iniciación', 'Instalación Cerrada').
 */

import { TAG_STYLE, MFG } from "../constants";

export default function Tag({ tag }) {
  // Estilo neutro por defecto en caso de discrepancia o ausencia de valor
  const estiloPorDefecto = { bg: "#EDE8DC", color: MFG };

  // Selección segura de estilos comprobando la existencia de la propiedad
  const estilo = (tag && TAG_STYLE && TAG_STYLE[tag]) ? TAG_STYLE[tag] : estiloPorDefecto;

  return (
    <span
      className="text-xs px-2.5 py-0.5 font-medium inline-block"
      style={{
        background: estilo.bg,
        color: estilo.color,
        fontFamily: "'DM Mono', monospace",
      }}
    >
      {tag || "Sin especificar"}
    </span>
  );
}