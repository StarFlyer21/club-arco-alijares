/**
 * ============================================================================
 * C.D. ALIJARES — COMPONENTE PRINCIPAL (APP.JSX)
 * ============================================================================
 * Estructura original con Navbar y Footer fijos.
 * Integra:
 *  - Navbar institucional con acceso directo a la nueva vista de Galería.
 *  - GaleriaTeaser: Carrusel automático centrado en la portada.
 *  - Conmutación suave entre la Home y la vista completa de Galeria.
 */

import { useState } from "react";

// Componentes estructurales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Vistas institucionales
import Hero from "./views/Hero";
import Horarios from "./views/Horarios";
import Normativas from "./views/Normativas";
import Cursos from "./views/Cursos";
import Eventos from "./views/Eventos";
import Documentacion from "./views/Documentacion";
import Contacto from "./views/Contacto";

// Galería y Carrusel
import Galeria from "./views/Galeria";
import GaleriaTeaser from "./components/GaleriaTeaser";

export default function App() {
  // Estado para alternar entre la web principal y la vista de galería completa
  const [vistaActual, setVistaActual] = useState("home");

  // Lectura automática de álbumes JSON de Decap CMS
  const modulosJson = import.meta.glob("./data/galeria/*.json", {
    eager: true,
    import: "default",
  });
  const albumes = Object.values(modulosJson);

  return (
    <div
      style={{ fontFamily: "'Jost', sans-serif" }}
      className="bg-background text-foreground min-h-screen flex flex-col justify-between"
    >
      {/* Tu Navbar original siempre visible arriba */}
      <Navbar
        onIrAGaleria={() => {
          setVistaActual("galeria");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onIrAInicio={() => {
          setVistaActual("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Alternancia entre la Galería completa y la Home habitual */}
      {vistaActual === "galeria" ? (
        <main className="flex-grow">
          <Galeria onVolver={() => setVistaActual("home")} />
        </main>
      ) : (
        <main className="flex-grow">
          <Hero />
          <Horarios />

          {/* Carrusel automático de imágenes centrado y grande */}
          <GaleriaTeaser
            albumes={albumes}
            onVerGaleria={() => {
              setVistaActual("galeria");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          <Normativas />
          <Cursos />
          <Eventos />
          <Documentacion />
          <Contacto />
        </main>
      )}

      {/* Tu Footer original siempre visible abajo */}
      <Footer />
    </div>
  );
}