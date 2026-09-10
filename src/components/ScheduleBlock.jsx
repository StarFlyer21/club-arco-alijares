/**
 * ============================================================================
 * C.D. ALIJARES — BLOQUE DE HORARIOS DE INSTALACIÓN
 * ============================================================================
 * Renderiza la tarjeta contenedora y la tabla de disponibilidad horaria
 * de un recinto deportivo (Campo Exterior 3D o Pabellón Cubierto).
 * 
 * Props:
 *  - icon: Componente de icono vectorial (Lucide React) para la cabecera.
 *  - title: Nombre oficial del recinto deportivo.
 *  - headerColor: Color de fondo institucional para la franja superior.
 *  - rows: Lista de registros horarios ({ day, time, tag }).
 *  - note: Aclaración complementaria ubicada al pie de la tabla.
 */

import { BDR, BGW, FG, MFG } from "../constants";
import Tag from "./Tag";

export default function ScheduleBlock({ icon: Icon, title, headerColor, rows = [], note }) {
  return (
    <div className="border overflow-hidden" style={{ borderColor: BDR, background: BGW }}>
      {/* Barra superior distintiva de la instalación */}
      <div className="px-6 py-4 flex items-center gap-3" style={{ background: headerColor }}>
        {Icon && <Icon className="w-5 h-5" style={{ color: "#F8F5EE" }} />}
        <h3 className="font-semibold text-lg" style={{ fontFamily: "'Spectral', serif", color: "#F8F5EE" }}>
          {title}
        </h3>
      </div>

      {/* Cuerpo principal con tabla horaria */}
      <div className="p-6">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: `1px solid ${BDR}` }}>
              {["Día", "Horario", "Estado"].map((header) => (
                <th
                  key={header}
                  className="text-left pb-2.5 pr-3 font-medium uppercase text-xs tracking-wide"
                  style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} style={{ borderBottom: `1px solid ${BDR}` }}>
                <td className="py-3 pr-3 font-medium" style={{ color: FG }}>
                  {row.day}
                </td>
                <td className="py-3 pr-3 text-xs" style={{ fontFamily: "'DM Mono', monospace", color: FG }}>
                  {row.time}
                </td>
                <td className="py-3">
                  <Tag tag={row.tag} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Nota informativa a pie de tabla */}
        {note && (
          <p className="mt-4 text-xs leading-relaxed" style={{ color: MFG, borderTop: `1px solid ${BDR}`, paddingTop: "1rem" }}>
            {note}
          </p>
        )}
      </div>
    </div>
  );
}