const pdfModules = import.meta.glob("../assets/pdfs/**/*.pdf", {
  eager: true,
  import: "default",
});

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

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