export const OLI = "#7A8C38";
export const RED = "#C0392B";
export const BGW = "#FFFFFF";
export const BGL = "#F8F5EE";
export const BGM = "#F0EDE4";
export const FG = "#1A1814";
export const MFG = "#7A7567";
export const BDR = "rgba(122,140,56,0.18)";

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Horarios", href: "#horarios" },
  { label: "Normativas", href: "#normativas" },
  { label: "Cursos", href: "#cursos" },
  { label: "Documentación", href: "#documentacion" },
  { label: "Contacto", href: "#contacto" },
];

export const TAG_STYLE = {
  "Acceso Libre": { bg: "rgba(122,140,56,0.10)", color: OLI },
  "Curso Iniciación": { bg: "rgba(192,57,43,0.10)", color: RED },
  "Instalación Cerrada": { bg: "#EDE8DC", color: MFG },
};

export const FIELD_ROWS = [
  { day: "Sábado", time: "08:00 – 13:00", tag: "Acceso Libre" },
  { day: "Domingo", time: "08:00 – 13:00", tag: "Acceso Libre" },
];

export const HALL_ROWS = [
  { day: "Sábado", time: "08:00 – 13:00", tag: "Acceso Libre" },
  { day: "Domingo", time: "08:00 – 13:00", tag: "Instalación Cerrada" },
];

export const EVENTS = [
  {
    id: "tirada-1",
    title: "Trofeo de Otoño 3D",
    subtitle: "Paraje Las Alijares — Bosque",
    date: "18 OCT 2026",
    isoDate: "2026-10-18", // Esto le dice al sistema cuándo caduca y cómo ordenarlo
    category: "Tirada Local",
    color: OLI,
    pdf: "/pdfs/tiradas/trofeo-otono-2026.pdf" // La ruta directa al PDF en public
  },
  {
    id: "tirada-2",
    title: "Campeonato Provincial",
    subtitle: "Recorrido Bosque 24 Dianas",
    date: "15 NOV 2026",
    isoDate: "2026-11-15",
    category: "Competición",
    color: "#4A5E28",
    pdf: "/pdfs/tiradas/campeonato-provincial-2026.pdf"
  },
  // Aunque aquí haya 200 eventos acumulados a lo largo de los años...
];

export const COURSES = [
  {
    type: "curso",
    date: "15 Sep 2026",
    title: "Iniciación al Tiro con Arco 3D",
    level: "Principiante",
    duration: "8 h · 2 sesiones",
    desc: "Introducción al tiro en entorno forestal. Equipo incluido. Máx. 12 participantes.",
    spots: 4,
  },
  {
    type: "curso",
    date: "4 Oct 2026",
    title: "Iniciación al Tiro con Arco Indoor",
    level: "Principiante",
    duration: "6 h · 2 sesiones",
    desc: "Formación básica en pabellón cubierto. Ideal para comenzar antes del invierno.",
    spots: 6,
  },
  {
    type: "taller",
    date: "18 Oct 2026",
    title: "Taller: Ajuste de Punto de Mira",
    level: "Intermedio",
    duration: "3 h · 1 sesión",
    desc: "Sesión técnica intensiva sobre calibración y ajuste de miras para recurvo.",
    spots: 10,
  },
  {
    type: "taller",
    date: "8 Nov 2026",
    title: "Taller: Técnica de Release y Anclaje",
    level: "Intermedio",
    duration: "3 h · 1 sesión",
    desc: "Perfeccionamiento del anclaje y la fase de suelta con análisis de postura.",
    spots: 8,
  },
  {
    type: "curso",
    date: "25 Oct 2026",
    title: "Tiro Tradicional: Recurvo y Longbow",
    level: "Todos los niveles",
    duration: "10 h · 2 sesiones",
    desc: "Inmersión en técnicas ancestrales. Arcos tradicionales disponibles. Bosque.",
    spots: 6,
  },
  {
    type: "taller",
    date: "29 Nov 2026",
    title: "Taller: Tiro 3D en Pendiente",
    level: "Avanzado",
    duration: "4 h · 1 sesión",
    desc: "Técnicas de compensación angular y distancia en terreno de bosque irregular.",
    spots: 7,
  },
];

export const DOCUMENTS = [
  {
    title: "Hoja de Inscripción",
    desc: "Formulario oficial de alta como socio.",
    date: "Rev. 2026",
    pdf: "/pdfs/documentos/hoja_inscripcion_2026.pdf",
  },
  {
    title: "Reglamento Interno",
    desc: "Normativa general del club e instalaciones.",
    date: "Ed. 2025",
    pdf: "/pdfs/documentos/reglamento_interno.pdf",
  },
  {
    title: "Normativa de Seguridad",
    desc: "Protocolo obligatorio de seguridad en campo.",
    date: "Rev. 2025",
    pdf: "/pdfs/documentos/normativa_seguridad.pdf",
  },
  {
    title: "Calendario Competiciones 2026",
    desc: "Fechas y modalidades del año en curso.",
    date: "2026",
    pdf: "/pdfs/documentos/calendario_2026.pdf",
  },
  {
    title: "Solicitud Licencia Federativa",
    desc: "Tramitación de licencia a través del club.",
    date: "Rev. 2026",
    pdf: "/pdfs/documentos/licencia_federativa.pdf",
  },
  {
    title: "Renovación de Membresía",
    desc: "Formulario anual de renovación de cuota.",
    date: "Rev. 2026",
    pdf: "/pdfs/documentos/renovacion_cuota.pdf",
  },
];

export const SAFETY = [
  {
    iconKey: "AlertTriangle",
    title: "Línea de Tiro",
    text: "Prohibido cruzar o acercarse a la línea mientras haya arqueros activos.",
  },
  {
    iconKey: "Eye",
    title: "Equipamiento Homologado",
    text: "Solo arcos y flechas conformes a la normativa RFETA están permitidos.",
  },
  {
    iconKey: "Bell",
    title: "Señal Acústica",
    text: "Las flechas se recogen únicamente tras la señal de fin de serie.",
  },
  {
    iconKey: "UserCheck",
    title: "Supervisión de Menores",
    text: "Tiradores menores de 14 años deben estar acompañados en todo momento.",
  },
];
