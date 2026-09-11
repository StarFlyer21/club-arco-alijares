/**
 * ============================================================================
 * C.D. ALIJARES — CARRUSEL FOTOGRÁFICO AUTOMÁTICO (PORTADA)
 * ============================================================================
 * Bloque centralizado de gran formato con rotación automática (autoplay).
 * Diseñado sin filtros en la página principal para ofrecer una experiencia
 * relajada y estética, con botón discreto para abrir la Galería completa.
 * 
 * Props:
 *  - albumes: Colección de datos de eventos leídos desde los JSON.
 *  - onVerGaleria: Disparador para abrir la vista completa de la galería.
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { BGW, FG, BDR, OLI } from "../constants";

export default function GaleriaTeaser({ albumes = [], onVerGaleria }) {
  // Extraemos fotos de portada (o fotos de muestra si aún hay pocos álbumes)
  const fotos = albumes.length > 0
    ? [...albumes].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
    : [
        {
          portada: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&fit=crop",
          titulo: "Recorrido Forestal 3D",
          fecha: "Temporada Actual",
        },
        {
          portada: "https://images.unsplash.com/photo-1511497584788-87676104235f?w=1600&fit=crop",
          titulo: "Jornada de Perfeccionamiento y Precisión",
          fecha: "Competición Social",
        }
      ];

  const [indiceActual, setIndiceActual] = useState(0);
  const [enPausa, setEnPausa] = useState(false);

  // Autoplay: avanza cada 4.5 segundos si el usuario no tiene el cursor encima
  useEffect(() => {
    if (enPausa || fotos.length <= 1) return;

    const temporizador = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % fotos.length);
    }, 4500);

    return () => clearInterval(temporizador);
  }, [enPausa, fotos.length]);

  const irAnterior = () => {
    setIndiceActual((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  const irSiguiente = () => {
    setIndiceActual((prev) => (prev + 1) % fotos.length);
  };

  const fotoActiva = fotos[indiceActual] || fotos[0];

  return (
    <section 
      className="py-20 border-b overflow-hidden" 
      style={{ background: BGW, borderColor: BDR }}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Cabecera elegante y centrada */}
        <div className="text-center mb-10">
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.3em] block mb-2"
            style={{ color: OLI || "#7A8C38", fontFamily: "'DM Mono', monospace" }}
          >
            Vida del Club
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "'Spectral', Georgia, serif", color: FG }}
          >
            Momentos en el Bosque
          </h2>
        </div>

        {/* Marco principal del carrusel de gran tamaño */}
        <div
          className="relative w-full h-[420px] sm:h-[520px] rounded-lg overflow-hidden border shadow-lg group select-none"
          style={{ borderColor: BDR, background: "#171717" }}
          onMouseEnter={() => setEnPausa(true)}
          onMouseLeave={() => setEnPausa(false)}
        >
          {/* Imagen a pantalla completa con transición suave */}
          <img
            key={indiceActual}
            src={fotoActiva.portada}
            alt={fotoActiva.titulo}
            className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            loading="lazy"
          />

          {/* Degradado cinematográfico inferior para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={irAnterior}
            aria-label="Foto anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={irSiguiente}
            aria-label="Foto siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pie de foto editorial superpuesto */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="text-white max-w-xl">
              <span
                className="text-[11px] tracking-widest uppercase text-[#D6E0A6] block mb-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {fotoActiva.categoria || "Tiro con Arco"}
              </span>
              <h3
                className="text-xl sm:text-2xl font-medium leading-snug drop-shadow-sm"
                style={{ fontFamily: "'Spectral', Georgia, serif" }}
              >
                {fotoActiva.titulo}
              </h3>
              <p className="text-xs text-neutral-300 mt-1 font-mono">
                {fotoActiva.fecha}
              </p>
            </div>

            {/* Botón directo a la galería completa */}
            <button
              type="button"
              onClick={onVerGaleria}
              className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20 transition-all rounded"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span>Ver Galería Completa</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Indicadores de progreso (puntos inferiores) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {fotos.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => setIndiceActual(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === indiceActual 
                    ? "w-6 bg-white" 
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}