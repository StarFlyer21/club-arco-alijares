/**
 * ============================================================================
 * C.D. ALIJARES — REGISTRO DINÁMICO DE ARCHIVOS PDF
 * ============================================================================
 * Mapea archivos PDF importados dentro del árbol de código mediante slugs
 * normalizados para permitir su vinculación semántica por título de evento.
 */

// Importación ansiosa de todos los documentos PDF presentes en assets/pdfs/
const pdfModules = import.meta.glob("../assets/pdfs/**/*.pdf", {
  eager: true,
  import: "default",
});

/**
 * Normaliza una cadena de texto a formato slug (minúsculas, sin tildes ni caracteres especiales).
 * @param {string} value - Texto de entrada.
 * @returns {string} Texto formateado con guiones.
 */
function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Busca y resuelve la URL estática del PDF cuyo nombre coincide con el título normalizado.
 * @param {string} title - Nombre o titular a emparejar.
 * @returns {string|null} URL del archivo o null si no se localiza en disco.
 */
export function getPdfUrlForEventTitle(title) {
  const targetSlug = slugify(title);

  for (const [path, url] of Object.entries(pdfModules)) {
    const fileName = path.split("/").pop() || "";
    const fileSlug = fileName.replace(/\.pdf$/i, "");

    if (fileSlug === targetSlug) {
      return url;
    }
  }

  return null;
}