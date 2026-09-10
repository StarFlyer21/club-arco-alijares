/**
 * ============================================================================
 * C.D. ALIJARES — GENERADOR AUTOMÁTICO DE EVENTOS POR ARCHIVOS PDF
 * ============================================================================
 * Escanea de forma reactiva la carpeta de activos `src/assets/tiradas/` para
 * generar la lista de competiciones sin requerir actualización manual en código.
 * 
 * Convención de nomenclatura obligatoria para los archivos:
 *   AAAA-MM-DD__Título del Evento__Subtítulo o Lugar__Categoría.pdf
 *   Ejemplo: 2026-10-19__III Tirada 3D Montillo__Bosque__Tirada Local.pdf
 */

// Escaneo estático en tiempo de compilación/ejecución mediante la API de Vite
const pdfFiles = import.meta.glob("../assets/tiradas/*.pdf", {
  eager: true,
  import: "default",
});

/**
 * Procesa los nombres de archivo y devuelve el array de eventos normalizados.
 * @returns {Array<Object>} Lista de eventos con fechas, metadatos y URLs resueltas.
 */
export function getAutoEvents() {
  const eventos = [];

  for (const [rutaArchivo, urlFinal] of Object.entries(pdfFiles)) {
    // 1. Aislamiento del nombre de archivo eliminando ruta y extensión .pdf
    const nombreLimpio = rutaArchivo.split("/").pop().replace(/\.pdf$/i, "");

    // 2. Segmentación de metadatos mediante el delimitador doble '__'
    const partes = nombreLimpio.split("__");

    if (partes.length >= 2) {
      const isoDate = partes[0].trim(); // Formato cronológico ISO: AAAA-MM-DD
      const title = partes[1].trim();   // Denominación principal del evento
      const subtitle = partes[2] ? partes[2].trim() : "Campo de Tiro";
      const category = partes[3] ? partes[3].trim() : "Competición";

      // Conversión de fecha ISO a formato legible localizado en castellano (ej: 19 OCT 2026)
      const fechaObj = new Date(`${isoDate}T00:00:00`);
      const fechaFormateada = !isNaN(fechaObj.getTime())
        ? fechaObj.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" }).toUpperCase()
        : isoDate;

      eventos.push({
        id: nombreLimpio,
        title,
        subtitle,
        category,
        date: fechaFormateada,
        isoDate,
        pdf: urlFinal, // URL final resuelta por el empaquetador para el navegador
        color: "#7A8C38",
      });
    }
  }

  return eventos;
}