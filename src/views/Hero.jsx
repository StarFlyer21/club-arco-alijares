/**
 * ============================================================================
 * C.D. ALIJARES — PORTADA PRINCIPAL (HERO) CON BARRA DE NAVEGACIÓN
 * ============================================================================
 * Sección de bienvenida a pantalla completa que incorpora:
 *  - Barra de navegación institucional superior fija (Navbar) con logo,
 *    enlaces a las secciones de la página y disparador para la vista Galería.
 *  - Titular principal con tipografía editorial Spectral y colores del club.
 *  - Accesos directos a inscripción y horarios.
 *  - Fotografía representativa del bosque con tarjeta flotante de modalidades.
 * 
 * Props:
 *  - onIrAGaleria: Función callback para cambiar la vista principal a la Galería.
 */

import { ArrowDown, ChevronRight, Image as ImageIcon } from "lucide-react";
import { BDR, BGW, BGL, FG, MFG, OLI } from "../constants";

export default function Hero({ onIrAGaleria }) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between"
      style={{ background: BGL }}
    >
      {/* ==================================================================== */}
      {/* BARRA DE NAVEGACIÓN SUPERIOR (NAVBAR)                                */}
      {/* ==================================================================== */}
      <header
        className="w-full border-b sticky top-0 z-40 backdrop-blur-md transition-colors"
        style={{
          borderColor: BDR,
          background: "rgba(247, 244, 237, 0.92)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Identidad del club: Escudo y denominación */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <img
              src="/Arcoalijares.png"
              alt="Escudo C.D. Alijares"
              className="w-11 h-11 object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className="font-bold text-base leading-tight tracking-wide"
                style={{ fontFamily: "'Spectral', serif", color: FG }}
              >
                C.D. Alijares
              </span>
              <span
                className="text-[10px] uppercase tracking-widest"
                style={{ color: OLI, fontFamily: "'DM Mono', monospace" }}
              >
                Tiro con Arco · Toledo
              </span>
            </div>
          </a>

          {/* Menú de navegación principal */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#horarios"
              className="text-xs uppercase tracking-wider font-medium transition-colors hover:text-emerald-800"
              style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
            >
              Horarios
            </a>
            <a
              href="#eventos"
              className="text-xs uppercase tracking-wider font-medium transition-colors hover:text-emerald-800"
              style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
            >
              Eventos
            </a>
            <a
              href="#cursos"
              className="text-xs uppercase tracking-wider font-medium transition-colors hover:text-emerald-800"
              style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
            >
              Cursos
            </a>
            <a
              href="#documentacion"
              className="text-xs uppercase tracking-wider font-medium transition-colors hover:text-emerald-800"
              style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
            >
              Documentación
            </a>
            <a
              href="#normativas"
              className="text-xs uppercase tracking-wider font-medium transition-colors hover:text-emerald-800"
              style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
            >
              Normativas
            </a>

            {/* Acceso a la Galería Completa */}
            <button
              type="button"
              onClick={onIrAGaleria}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium transition-colors hover:text-emerald-800"
              style={{ color: OLI, fontFamily: "'DM Mono', monospace" }}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Galería</span>
            </button>
          </nav>

          {/* Botón de acción directo a Contacto / Inscripción */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="text-xs uppercase tracking-wider font-medium transition-all px-4 py-2.5 border"
              style={{
                fontFamily: "'DM Mono', monospace",
                background: OLI,
                color: "#FFFFFF",
                borderColor: OLI,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#6A7B2E")}
              onMouseLeave={(e) => (e.currentTarget.style.background = OLI)}
            >
              Contacto
            </a>
          </div>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* CONTENIDO PRINCIPAL DEL HERO                                         */}
      {/* ==================================================================== */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 w-full my-auto">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Bloque de títulos y llamadas a la acción */}
          <div className="lg:col-span-3">
            <p
              className="text-xs tracking-[0.35em] uppercase mb-6 font-medium"
              style={{ color: OLI, fontFamily: "'DM Mono', monospace" }}
            >
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

            {/* Acciones principales */}
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

          {/* Bloque visual lateral: Imagen del bosque y tarjeta de modalidades */}
          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative">
              <div
                className="overflow-hidden"
                style={{ height: "520px", border: `1px solid ${BDR}` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&h=900&fit=crop&auto=format"
                  alt="Entorno forestal del campo de tiro C.D. Alijares"
                  className="w-full h-full object-cover"
                  style={{ filter: "saturate(0.8) brightness(0.97)" }}
                />
              </div>

              {/* Ficha flotante de modalidades reconocidas */}
              <div
                className="absolute -bottom-4 -left-4 px-5 py-4"
                style={{
                  background: BGW,
                  border: `1px solid ${BDR}`,
                  boxShadow: "0 4px 16px rgba(26,24,20,0.08)",
                }}
              >
                <div
                  className="text-xs uppercase tracking-widest mb-1"
                  style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
                >
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

      {/* Flecha inferior indicadora de scroll hacia Horarios */}
      <div className="pb-6 flex justify-center">
        <a
          href="#horarios"
          className="animate-bounce p-2"
          style={{ color: OLI }}
          aria-label="Ir a la sección de horarios"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}