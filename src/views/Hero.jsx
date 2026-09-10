/**
 * ============================================================================
 * C.D. ALIJARES — PORTADA PRINCIPAL (HERO)
 * ============================================================================
 * Sección de bienvenida a pantalla completa con titulares de impacto,
 * accesos directos principales y fotografía representativa del entorno natural.
 */

import { ArrowDown, ChevronRight } from "lucide-react";
import { BDR, BGW, BGL, FG, MFG, OLI } from "../constants";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center" style={{ background: BGL }}>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Bloque principal de contenido textual y acciones */}
          <div className="lg:col-span-3">
            <p className="text-xs tracking-[0.35em] uppercase mb-6 font-medium" style={{ color: OLI, fontFamily: "'DM Mono', monospace" }}>
              Tiro con Arco · Toledo
            </p>
            <h1
              className="leading-[1.06] mb-6 font-bold"
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                color: FG,
              }}
            >
              Tradición,<br />
              naturaleza<br />
              <em style={{ color: OLI, fontStyle: "italic" }}>y precisión.</em>
            </h1>
            <p className="text-base mb-10 max-w-md leading-relaxed" style={{ color: MFG }}>
              C.D. Alijares es un club de tiro con arco tradicional 3D en entorno forestal y cubierto. Competición, formación y naturaleza para todos los niveles.
            </p>

            {/* Botones de acción hacia inscripción y horarios */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
                style={{ background: OLI, color: "#FFF", padding: "13px 28px" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.background = "#6A7B2E";
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.background = OLI;
                }}
              >
                Inscríbete <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#horarios"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200"
                style={{ border: `1px solid ${BDR}`, color: MFG, padding: "13px 28px" }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = OLI;
                  event.currentTarget.style.color = FG;
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = BDR;
                  event.currentTarget.style.color = MFG;
                }}
              >
                Ver horarios
              </a>
            </div>
          </div>

          {/* Bloque visual: Fotografía del entorno de tiro forestal con tarjeta flotante */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div className="overflow-hidden" style={{ height: "520px", border: `1px solid ${BDR}` }}>
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&h=900&fit=crop&auto=format"
                  alt="Entorno forestal del campo de tiro C.D. Alijares"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.8) brightness(0.97)" }}
                />
              </div>
              <div
                className="absolute -bottom-4 -left-4 px-5 py-4"
                style={{ background: BGW, border: `1px solid ${BDR}`, boxShadow: "0 4px 16px rgba(26,24,20,0.08)" }}
              >
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                  Modalidades
                </div>
                <div
                  className="font-semibold flex flex-col gap-1 text-sm"
                  style={{ fontFamily: "'Spectral', serif", color: FG }}
                >
                  <div>Tiro con Arco 3D</div>
                  <div>Desnudo</div>
                  <div>Poleas</div>
                  <div>Olímpico</div>
                  <div>Tradicional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de desplazamiento hacia la sección de horarios */}
      <a href="#horarios" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: OLI }}>
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}