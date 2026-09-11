/**
 * ============================================================================
 * C.D. ALIJARES — VISTA DE GALERÍA MINIMALISTA
 * ============================================================================
 * Muestra el catálogo fotográfico estructurado por eventos sin numeraciones
 * ni líneas divisorias rígidas.
 * Cada álbum generado desde Decap CMS se renderiza como un bloque limpio.
 */

import { useState } from "react";
import { BGW, FG, MFG, OLI } from "../constants";

export default function Galeria({ onVolver }) {
  const [fotoEnModal, setFotoEnModal] = useState(null);

  // Lectura automática de todos los JSON generados por Decap CMS
  const modulosJson = import.meta.glob("../data/galeria/*.json", {
    eager: true,
    import: "default",
  });
  const albumesCargados = Object.values(modulosJson);

  // Orden descendente: los eventos con fechas más recientes van primero
  const albumesOrdenados = [...albumesCargados].sort(
    (a, b) => new Date(b.fecha) - new Date(a.fecha)
  );

  return (
    <div style={{ background: BGW }} className="min-h-screen pt-28 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navegación sutil de vuelta al home */}
        <div className="mb-10">
          <button
            type="button"
            onClick={onVolver}
            className="text-xs uppercase tracking-widest inline-flex items-center gap-2 cursor-pointer transition-colors hover:text-black"
            style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
          >
            &larr; Volver al Inicio
          </button>
        </div>

        {/* Encabezado minimalista sin bordes divisorios */}
        <div className="mb-20">
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "'Spectral', Georgia, serif", color: FG }}
          >
            Galería del Club
          </h1>
        </div>

        {/* Lista de tiradas: separación orgánica por espacios en lugar de líneas */}
        <div className="space-y-24">
          {albumesOrdenados.map((evento, index) => {
            const listaFotos = [
              ...(evento.portada ? [{ imagen: evento.portada }] : []),
              ...(evento.fotos || []),
            ];

            const fotosUnicas = Array.from(
              new Set(listaFotos.map((item) => (typeof item === "string" ? item : item.imagen)))
            ).filter(Boolean);

            return (
              <section key={index} className="space-y-6">
                {/* Cabecera del evento limpia: solo título y fecha al lado */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h2
                    className="text-2xl sm:text-3xl font-medium tracking-tight"
                    style={{ fontFamily: "'Spectral', Georgia, serif", color: FG }}
                  >
                    {evento.titulo}
                  </h2>
                  <span
                    className="text-xs tracking-wider font-medium"
                    style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
                  >
                    {evento.fecha}
                  </span>
                </div>

                {/* Cuadrícula de fotos con esquinas limpias */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {fotosUnicas.map((urlFoto, fotoIdx) => (
                    <div
                      key={fotoIdx}
                      onClick={() => setFotoEnModal(urlFoto)}
                      className="group aspect-square w-full overflow-hidden bg-neutral-100 cursor-pointer select-none"
                    >
                      <img
                        src={urlFoto}
                        alt={`${evento.titulo} — ${fotoIdx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {albumesOrdenados.length === 0 && (
          <p
            className="text-sm py-20 text-center"
            style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}
          >
            No hay tiradas publicadas en el archivo gráfico.
          </p>
        )}
      </div>

      {/* Lightbox / Modal */}
      {fotoEnModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setFotoEnModal(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <button
              type="button"
              className="absolute -top-10 right-0 text-white text-2xl font-mono hover:text-neutral-400 cursor-pointer"
              onClick={() => setFotoEnModal(null)}
            >
              ✕
            </button>
            <img
              src={fotoEnModal}
              alt="Detalle"
              className="max-h-[85vh] max-w-full object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}