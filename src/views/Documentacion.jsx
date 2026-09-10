/**
 * ============================================================================
 * C.D. ALIJARES — CENTRO DE DOCUMENTACIÓN INSTITUCIONAL
 * ============================================================================
 * Lista de documentos normativos y estatutarios aprobados por el club.
 * Filtra borradores marcados con draft: true y enlaza a los PDFs de /public.
 */

import { ExternalLink, FileText, Clock } from "lucide-react";
import { BDR, BGL, BGW, FG, MFG, OLI, DOCUMENTS } from "../constants";
import SectionHeader from "../components/SectionHeader";

export default function Documentacion() {
  // Filtra documentos excluyendo aquellos marcados como borradores
  const documentosVisibles = DOCUMENTS.filter((doc) => !doc.draft);

  return (
    <section id="documentacion" style={{ background: BGW }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="06"
          title="Centro de Documentación"
          subtitle="Consulta los documentos oficiales del club."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {documentosVisibles.map((doc, index) => {
            const hasPdf = Boolean(doc.pdf);

            return (
              <div
                key={index}
                className="border p-5 flex flex-col justify-between transition-all duration-200"
                style={{ borderColor: BDR, background: BGL }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = `${OLI}55`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = BDR;
                }}
              >
                <div>
                  {/* Encabezado: Icono distintivo, denominación y estado/fecha */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(122,140,56,0.09)",
                        border: "1px solid rgba(122,140,56,0.18)",
                      }}
                    >
                      <FileText className="w-5 h-5" style={{ color: OLI }} />
                    </div>
                    <div className="flex-1">
                      <div
                        className="font-semibold text-sm leading-tight"
                        style={{ color: FG }}
                      >
                        {doc.title}
                      </div>
                      <div
                        className="text-xs mt-0.5"
                        style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
                      >
                        {doc.date}
                      </div>
                    </div>
                  </div>

                  {/* Resumen descriptivo del marco normativo */}
                  <p
                    className="text-xs leading-relaxed mb-5"
                    style={{ color: MFG }}
                  >
                    {doc.desc}
                  </p>
                </div>

                {/* Acceso directo al documento PDF o aviso de tramitación */}
                {hasPdf ? (
                  <a
                    href={doc.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 text-xs py-2.5 font-medium transition-colors duration-200 no-underline"
                    style={{ background: OLI, color: "#FFF" }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background = "#6A7B2E";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background = OLI;
                    }}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Consultar Documento (PDF)
                  </a>
                ) : (
                  <div
                    className="w-full py-2.5 px-3 text-xs flex items-center justify-center gap-1.5 border"
                    style={{
                      borderColor: BDR,
                      color: MFG,
                      background: "rgba(0,0,0,0.02)",
                    }}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Documento en tramitación
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}