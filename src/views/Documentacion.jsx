import { Download, ExternalLink, FileText } from "lucide-react";
import { BDR, BGL, BGW, FG, MFG, OLI, DOCUMENTS } from "../constants";
import SectionHeader from "../components/SectionHeader";

export default function Documentacion() {
  return (
    <section id="documentacion" style={{ background: BGW }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="06"
          title="Centro de Documentación"
          subtitle="Descarga o consulta en línea los documentos oficiales del club."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOCUMENTS.map((doc, index) => {
            const hasPdf = Boolean(doc.pdf);

            return (
              <div
                key={index}
                className="border p-5 flex flex-col transition-all duration-200"
                style={{ borderColor: BDR, background: BGL }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = `${OLI}55`;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = BDR;
                }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(122,140,56,0.09)",
                      border: `1px solid rgba(122,140,56,0.18)`,
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

                <p
                  className="text-xs leading-relaxed flex-1 mb-5"
                  style={{ color: MFG }}
                >
                  {doc.desc}
                </p>

                <div className="flex gap-2">
                  {/* Botón Ver Online */}
                  <a
                    href={hasPdf ? doc.pdf : undefined}
                    target={hasPdf ? "_blank" : undefined}
                    rel={hasPdf ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                      if (!hasPdf) {
                        e.preventDefault();
                        alert("Documento pendiente de subir por la directiva.");
                      }
                    }}
                    className={`flex-1 flex items-center justify-center gap-1.5 text-xs py-2.5 font-medium transition-colors duration-200 ${
                      hasPdf ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                    }`}
                    style={{ background: OLI, color: "#FFF" }}
                    onMouseEnter={(event) => {
                      if (hasPdf) event.currentTarget.style.background = "#6A7B2E";
                    }}
                    onMouseLeave={(event) => {
                      if (hasPdf) event.currentTarget.style.background = OLI;
                    }}
                  >
                    <ExternalLink className="w-3 h-3" /> Ver Online
                  </a>

                  {/* Botón Descarga directa */}
                  <a
                    href={hasPdf ? doc.pdf : undefined}
                    download
                    onClick={(e) => {
                      if (!hasPdf) e.preventDefault();
                    }}
                    className={`flex items-center justify-center gap-1.5 text-xs py-2.5 px-3 border transition-colors duration-200 ${
                      hasPdf ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                    }`}
                    style={{ border: `1px solid ${BDR}`, color: MFG }}
                    onMouseEnter={(event) => {
                      if (hasPdf) {
                        event.currentTarget.style.borderColor = OLI;
                        event.currentTarget.style.color = FG;
                      }
                    }}
                    onMouseLeave={(event) => {
                      if (hasPdf) {
                        event.currentTarget.style.borderColor = BDR;
                        event.currentTarget.style.color = MFG;
                      }
                    }}
                  >
                    <Download className="w-3 h-3" /> PDF
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}