// Vite busca todos los archivos .pdf dentro de src/assets/tiradas/
// (Nota: Vite solo puede analizar dinámicamente archivos dentro de src)
const pdfFiles = import.meta.glob("../assets/tiradas/*.pdf", {
  eager: true,
  import: "default",
});

export function getAutoEvents() {
  const eventos = [];

  for (const [rutaArchivo, urlFinal] of Object.entries(pdfFiles)) {
    // 1. Extraemos solo el nombre del archivo sin la ruta ni el '.pdf'
    // Ejemplo: '2026-10-19__III Tirada 3D Montillo__Bosque__Tirada Local'
    const nombreLimpio = rutaArchivo.split("/").pop().replace(/\.pdf$/i, "");

    // 2. Separamos las partes por el doble guion bajo '__'
    const partes = nombreLimpio.split("__");

    if (partes.length >= 2) {
      const isoDate = partes[0].trim(); // '2026-10-19'
      const title = partes[1].trim();   // 'III Tirada 3D Montillo'
      const subtitle = partes[2] ? partes[2].trim() : "Campo de Tiro";
      const category = partes[3] ? partes[3].trim() : "Competición";

      // Formatear la fecha para mostrarla visualmente bonita (ej: '19 OCT 2026')
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
        pdf: urlFinal, // La URL lista para abrir el PDF
        color: "#7A8C38",
      });
    }
  }

  return eventos;
}