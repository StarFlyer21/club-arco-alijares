/**
 * ============================================================================
 * C.D. ALIJARES — SECCIÓN DE NORMATIVAS Y REGLAMENTO DE SEGURIDAD
 * ============================================================================
 * Expone las cuatro reglas críticas de convivencia y tiro en línea,
 * junto con accesos a los documentos PDF oficiales de Estatutos y Campo.
 */

import { Bell, Eye, ExternalLink, FileText, UserCheck, AlertTriangle } from "lucide-react";
import { BDR, BGW, BGM, FG, MFG, OLI, RED, SAFETY } from "../constants";
import SectionHeader from "../components/SectionHeader";

// Mapeo de iconos vectoriales consumidos por la configuración de constantes
const ICONS = {
  AlertTriangle,
  Eye,
  Bell,
  UserCheck,
};

// Rutas a los reglamentos PDF alojados en la carpeta /public
const DOCS = [
  { 
    label: "Ver Estatutos Completos (PDF)", 
    href: "/pdfs/reglas/estatutos_cdalijares.pdf", 
    icon: FileText 
  },
  { 
    label: "Ver Reglamento Interno (PDF)", 
    href: "/pdfs/reglas/normas_uso_campo.pdf", 
    icon: FileText 
  },
];

export default function Normativas() {
  return (
    <section id="normativas" style={{ background: BGM }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="03"
          title="Normativas de Seguridad"
          subtitle="Resumen de las cuatro normas más críticas. Consulta los documentos oficiales para conocer la normativa completa."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Cuadrícula con las 4 normas críticas de seguridad en la línea de tiro */}
          <div className="grid sm:grid-cols-2 gap-4">
            {SAFETY.map(({ iconKey, title, text }) => {
              const Icon = ICONS[iconKey];

              return (
                <div
                  key={title}
                  className="p-5 border"
                  style={{ background: BGW, borderColor: BDR, borderLeft: `3px solid ${OLI}` }}
                >
                  <div className="w-8 h-8 flex items-center justify-center mb-3" style={{ color: OLI }}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-semibold text-sm mb-1.5" style={{ color: FG }}>
                    {title}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: MFG }}>
                    {text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bloque de consulta de documentación oficial y aceptación expresa */}
          <div className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed" style={{ color: MFG }}>
              Para el conocimiento completo de las normas del club, sus instalaciones y la convivencia entre socios, consulta los documentos oficiales:
            </p>

            {/* Enlaces directos a los PDFs de Estatutos y Normas de Campo */}
            {DOCS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-5 border w-full text-left transition-colors duration-200 group block no-underline"
                style={{ background: BGW, borderColor: BDR }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = OLI;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = BDR;
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center" style={{ background: "rgba(122,140,56,0.08)", color: OLI }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium" style={{ color: FG }}>
                    {label}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 shrink-0" style={{ color: OLI }} />
              </a>
            ))}

            {/* Aviso legal obligatorio de acceso a las instalaciones */}
            <div className="mt-2 p-4 border-l-2" style={{ borderColor: RED, background: "rgba(192,57,43,0.04)" }}>
              <p className="text-xs leading-relaxed" style={{ color: MFG }}>
                <span className="font-semibold" style={{ color: FG }}>
                  Importante:
                </span>{" "}
                El acceso a las instalaciones implica la aceptación expresa del Reglamento Interno y las Normativas de Seguridad vigentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}