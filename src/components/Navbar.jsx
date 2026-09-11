/**
 * ============================================================================
 * C.D. ALIJARES — CABECERA Y BARRA DE NAVEGACIÓN (NAVBAR)
 * ============================================================================
 * Barra fija superior responsive con detección de desplazamiento:
 *  - Escudo institucional oficial ampliado a la izquierda con enlace a inicio.
 *  - Menú de navegación ancla con efecto hover sincronizado con la paleta.
 *  - Nuevo acceso a la vista Galería (escritorio y móvil).
 *  - Botón de llamada a la acción hacia el formulario de inscripción (#contacto).
 *  - Desplegable móvil accesible con alternancia de icono (hamburguesa / cierre).
 */

import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { BDR, BGW, FG, MFG, NAV_LINKS, OLI } from "../constants";

export default function Navbar({ onIrAGaleria, onIrAInicio }) {   
   const [mobileOpen, setMobileOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   /**
    * Listener pasivo para detectar si el usuario ha hecho scroll.
    * Añade borde inferior y sombra sutil para despegar el menú del contenido.
    */
   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <header
         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         style={{
            background: BGW,
            borderBottom: scrolled ? `1px solid ${BDR}` : "1px solid transparent",
            boxShadow: scrolled ? "0 1px 12px rgba(26,24,20,0.07)" : "none",
         }}
      >
         <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
            {/* Identidad institucional: Escudo oficial del club y tipografía corporativa */}
            <a 
               href="#inicio" 
               onClick={onIrAInicio}
               className="flex items-center gap-4 group cursor-pointer"
            >
               {/* 
                  Contenedor del escudo ampliado:
                  Altura fijada en h-14 (56px) con object-contain para asegurar 
                  la nitidez del óvalo y los detalles interiores del dibujo.
               */}
               <div className="h-14 w-20 flex items-center justify-center shrink-0">
                  <img
                     src="/Arcoalijares.png"
                     alt="Escudo Oficial C.D. Alijares Tiro con Arco"
                     className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                     loading="eager"
                  />
               </div>

               <div>
                  <div
                     className="text-lg font-semibold leading-tight tracking-tight"
                     style={{ fontFamily: "'Spectral', serif", color: FG }}
                  >
                     C.D. Alijares
                  </div>
                  <div
                     className="text-[10px] tracking-[0.22em] uppercase mt-0.5"
                     style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
                  >
                     Tiro con Arco · 3D
                  </div>
               </div>
            </a>

            {/* Menú de navegación de escritorio */}
            <nav className="hidden md:flex items-center gap-7">
               {NAV_LINKS.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     onClick={onIrAInicio}
                     className="text-xs tracking-widest uppercase transition-colors duration-200"
                     style={{ color: MFG }}
                     onMouseEnter={(event) => {
                        event.currentTarget.style.color = FG;
                     }}
                     onMouseLeave={(event) => {
                        event.currentTarget.style.color = MFG;
                     }}
                  >
                     {link.label}
                  </a>
               ))}

               {/* Botón integrado de Galería en escritorio */}
               <button
                  type="button"
                  onClick={onIrAGaleria}
                  className="text-xs tracking-widest uppercase transition-colors duration-200 cursor-pointer"
                  style={{ color: MFG, background: "transparent", border: "none" }}
                  onMouseEnter={(event) => {
                     event.currentTarget.style.color = FG;
                  }}
                  onMouseLeave={(event) => {
                     event.currentTarget.style.color = MFG;
                  }}
               >
                  Galería
               </button>

               {/* Botón de acceso directo a inscripción */}
               <a
                  href="#contacto"
                  onClick={onIrAInicio}
                  className="text-xs tracking-widest uppercase px-4 py-2 transition-colors duration-200 inline-flex items-center gap-1.5 font-medium"
                  style={{ background: OLI, color: "#FFF" }}
                  onMouseEnter={(event) => {
                     event.currentTarget.style.background = "#6A7B2E";
                  }}
                  onMouseLeave={(event) => {
                     event.currentTarget.style.background = OLI;
                  }}
               >
                  Inscríbete <ChevronRight className="w-3.5 h-3.5" />
               </a>
            </nav>

            {/* Botón hamburguesa para dispositivos móviles */}
            <button
               className="md:hidden p-1.5 transition-colors duration-200"
               style={{ color: FG }}
               onClick={() => setMobileOpen((open) => !open)}
               aria-label={mobileOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
               {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
         </div>

         {/* Menú desplegable para vista móvil */}
         {mobileOpen && (
            <div
               className="md:hidden px-6 py-4 flex flex-col gap-4"
               style={{ borderTop: `1px solid ${BDR}`, background: BGW }}
            >
               {NAV_LINKS.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     className="text-xs tracking-widest uppercase py-1"
                     style={{ color: MFG }}
                     onClick={() => {
                        setMobileOpen(false);
                        if (onIrAInicio) onIrAInicio();
                     }}
                  >
                     {link.label}
                  </a>
               ))}

               {/* Botón integrado de Galería en vista móvil */}
               <button
                  type="button"
                  className="text-xs tracking-widest uppercase py-1 text-left cursor-pointer"
                  style={{ color: MFG, background: "transparent", border: "none" }}
                  onClick={() => {
                     setMobileOpen(false);
                     onIrAGaleria();
                  }}
               >
                  Galería
               </button>

               <a
                  href="#contacto"
                  className="text-xs tracking-widest uppercase py-2.5 px-4 text-center font-medium mt-1 inline-flex items-center justify-center gap-1.5"
                  style={{ background: OLI, color: "#FFF" }}
                  onClick={() => {
                     setMobileOpen(false);
                     if (onIrAInicio) onIrAInicio();
                  }}
               >
                  Inscríbete <ChevronRight className="w-3.5 h-3.5" />
               </a>
            </div>
         )}
      </header>
   );
}