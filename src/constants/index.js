/**
 * ============================================================================
 * C.D. ALIJARES — CONFIGURACIÓN GLOBAL Y CONSTANTES DEL SITIO
 * ============================================================================
 * Este archivo centraliza el contenido estático, la paleta visual, los enlaces
 * y los datos de las diferentes secciones del portal web.
 */

/* -------------------------------------------------------------------------- */
/* 1. PALETA DE COLOR (SISTEMA DE DISEÑO)                                     */
/* -------------------------------------------------------------------------- */

/** Color principal corporativo (Verde Oliva / Forestal) */
export const OLI = "#7A8C38";

/** Color de énfasis, alertas y detalles de diana (Rojo) */
export const RED = "#C0392B";

/** Color de fondo para tarjetas y contenedores elevados (Blanco puro) */
export const BGW = "#FFFFFF";

/** Color de fondo para secciones alternas y elementos neutros (Cálido claro) */
export const BGL = "#F8F5EE";

/** Color de fondo de contraste medio para secciones secundarias */
export const BGM = "#F0EDE4";

/** Color de texto principal / títulos (Grafito oscuro) */
export const FG = "#1A1814";

/** Color de texto secundario / metadatos / descripciones (Gris piedra) */
export const MFG = "#7A7567";

/** Color estándar para bordes y divisores estructurales */
export const BDR = "rgba(122,140,56,0.18)";

/* -------------------------------------------------------------------------- */
/* 2. NAVEGACIÓN PRINCIPAL                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Enlaces ancla consumidos por el Navbar y el Footer.
 * El atributo `href` debe coincidir con los atributos `id` de las secciones.
 */
export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Horarios", href: "#horarios" },
  { label: "Normativas", href: "#normativas" },
  { label: "Cursos", href: "#cursos" },
  { label: "Documentación", href: "#documentacion" },
  { label: "Contacto", href: "#contacto" },
];

/* -------------------------------------------------------------------------- */
/* 3. HORARIOS E INSTALACIONES                                                */
/* -------------------------------------------------------------------------- */

/**
 * Esquema cromático para las etiquetas de estado de apertura.
 * Vincula el texto de la etiqueta con sus colores de fondo y texto.
 */
export const TAG_STYLE = {
  "Acceso Libre": { bg: "rgba(122,140,56,0.10)", color: OLI },
  "Curso Iniciación": { bg: "rgba(192,57,43,0.10)", color: RED },
  "Instalación Cerrada": { bg: "#EDE8DC", color: MFG },
};

/**
 * Horarios de apertura del Campo de Tiro Forestal Exterior (Recorrido 3D).
 */
export const FIELD_ROWS = [
  { day: "Sábado", time: "08:00 – 12:00", tag: "Acceso Libre" },
  { day: "Domingo", time: "08:00 – 12:00", tag: "Acceso Libre" },
];

/**
 * Horarios de la Galería de Tiro / Sala Interior.
 */
export const HALL_ROWS = [
  { day: "Sábado", time: "08:00 – 12:00", tag: "Acceso Libre" },
  { day: "Domingo", time: "08:00 – 12:00", tag: "Acceso Libre" },
];

/* -------------------------------------------------------------------------- */
/* 4. CALENDARIO DE EVENTOS Y TIRADAS                                         */
/* -------------------------------------------------------------------------- */

/**
 * Registro de competiciones, trofeos y jornadas organizadas por el club.
 * Estructura requerida para cada elemento:
 *  - id: Identificador único de cadena.
 *  - title: Nombre oficial del evento.
 *  - subtitle: Modalidad o ubicación concreta del recorrido.
 *  - date: Fecha formateada para visualización del usuario (ej. '18 OCT 2026').
 *  - isoDate: Fecha en formato estándar 'AAAA-MM-DD' para filtrado cronológico.
 *  - category: Tipología del evento ('Tirada Local', 'Liga', 'Campeonato').
 *  - color: Color del badge/indicador.
 *  - pdf: Ruta al cartel/circular técnica dentro de la carpeta /public.
 */
export const EVENTS = [];

/* -------------------------------------------------------------------------- */
/* 5. OFERTA FORMATIVA Y CURSOS                                               */
/* -------------------------------------------------------------------------- */

/**
 * Formaciones técnicas y cursos de iniciación activos del club.
 * Estructura requerida:
 *  - type: Modalidad ('curso' o 'taller').
 *  - date: Fechas de realización o estado de convocatoria.
 *  - title: Nombre de la acción formativa.
 *  - level: Nivel de exigencia requerido ('Principiante', 'Intermedio', 'Avanzado').
 *  - duration: Volumen horario o número de sesiones.
 *  - desc: Resumen de contenidos y material incluido.
 *  - spots: Plazas disponibles en tiempo real (0 indica convocatoria cerrada/por determinar).
 */
export const COURSES = [
  {
    type: "curso",
    date: "Por determinar",
    title: "Iniciación al Tiro con Arco",
    level: "Principiante",
    duration: "Por determinar",
    desc: "Introducción al tiro con arco. Equipo incluido.",
    spots: 0,
  },
];

/* -------------------------------------------------------------------------- */
/* 6. CENTRO DE DOCUMENTACIÓN OFICIAL                                         */
/* -------------------------------------------------------------------------- */

/**
 * Documentos normativos e institucionales alojados en /public/pdfs/reglas/.
 * Estructura requerida:
 *  - title: Nombre descriptivo del documento.
 *  - date: Estado de aprobación o vigencia.
 *  - desc: Explicación resumida de la validez legal y temática.
 *  - pdf: Ruta estática absoluta al archivo PDF en /public (null si no está subido).
 *  - draft: Estado de publicación. Si es true, el componente omite el documento del renderizado.
 */
export const DOCUMENTS = [
  {
    title: "Estatutos del Club",
    date: "Aprobados por la Asamblea General",
    desc: "Estatutos oficiales reguladores del Club Deportivo Elemental de Tiro con Arco Alijares.",
    pdf: "/pdfs/reglas/estatutos_cdalijares.pdf",
    draft: false,
  },
  {
    title: "Normas de Uso del Campo",
    date: "Reglamento de Seguridad Vigente",
    desc: "Normativa interna reguladora del campo de tiro forestal, líneas de tiro y seguridad.",
    pdf: "/pdfs/reglas/normas_uso_campo.pdf",
    draft: false,
  },
  {
    title: "Protocolo de Nuevos Socios",
    date: "En trámite",
    desc: "Guía de bienvenida y trámites federativos para nuevas altas.",
    pdf: null,
    draft: true,
  },
];

/* -------------------------------------------------------------------------- */
/* 7. NORMAS CRÍTICAS DE SEGURIDAD EN LÍNEA DE TIRO                           */
/* -------------------------------------------------------------------------- */

/**
 * Cuatro principios fundamentales de seguridad deportiva mostrados en /normativas.
 *  - iconKey: Identificador de icono mapeado en el componente receptor (Lucide React).
 *  - title: Denominación de la norma.
 *  - text: Protocolo de obligado cumplimiento en las instalaciones.
 */
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

/* -------------------------------------------------------------------------- */
/* 8. REDES SOCIALES Y ENLACES EXTERNOS                                       */
/* -------------------------------------------------------------------------- */

/**
 * Enlaces oficiales a los perfiles sociales y plataformas federativas del club.
 * Estructura requerida:
 *  - name: Nombre identificativo de la plataforma.
 *  - href: URL completa del perfil oficial del club.
 *  - icon: Clave interna utilizada por el Footer para renderizar el icono vectorial.
 */
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com/tu_usuario_aqui", // Reemplazar por el enlace real
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/tu_pagina_aqui", // Reemplazar por el enlace real
    icon: "facebook",
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@tu_usuario_aqui", // Reemplazar por el enlace real
    icon: "tiktok",
  },
  {
    name: "FCMTA",
    href: "https://fcmta.com/", // Web de la Federación Castellano-Manchega de Tiro con Arco
    icon: "fcmta",
  },
];