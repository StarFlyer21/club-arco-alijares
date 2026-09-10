/**
 * ============================================================================
 * C.D. ALIJARES — PIE DE PÁGINA INSTITUCIONAL (FOOTER)
 * ============================================================================
 * Estructura de cierre global de la web organizada en 4 columnas:
 *  1. Identidad corporativa, emblema visual y resumen deportivo.
 *  2. Menú de navegación ancla hacia las secciones principales.
 *  3. Documentación legal y transparencia institucional.
 *  4. Canales oficiales (Redes sociales activas y Federación territorial).
 *  5. Barra inferior de copyright, territorialidad y año de vigencia.
 */

import { NAV_LINKS, BGW, FG, MFG, RED } from "../constants";

/**
 * Registro de canales externos y plataformas oficiales del club.
 * Los enlaces no activos (como Instagram) se mantienen comentados para
 * evitar redirecciones rotas hasta que la directiva facilite los accesos.
 */
const SOCIAL_LINKS = [
   /*{
      name: "Instagram",
      href: "https://instagram.com/",
      icon: (
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
         </svg>
      )
   },*/
   {
      name: "Facebook",
      href: "https://www.facebook.com/people/CD-Alijares-Tiro-con-Arco/100043869533252/",
      icon: (
         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
         </svg>
      )
   },
   {
      name: "TikTok",
      href: "https://www.tiktok.com/@tiro_con_arco_alijares",
      icon: (
         <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.86-.09z" />
         </svg>
      )
   },
   {
      name: "FCMTA (Federación)",
      href: "https://www.fcmta.com/",
      icon: (
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m22 2-7.5 7.5" />
            <path d="m18 2 4 4" />
            <circle cx="12" cy="12" r="4" />
         </svg>
      )
   }
];

export default function Footer() {
   return (
      <footer style={{ background: "#1A2010", color: "#8A9A6A" }} className="py-14">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
               {/* Columna 1: Identidad deportiva y federativa */}
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full flex items-center justify-center border-2" style={{ background: BGW, borderColor: FG }}>
                        {/* Diana diurna representativa del club */}
                        <svg width="16" height="16" viewBox="0 0 24 24">
                           <circle cx="12" cy="12" r="10" fill="none" stroke={RED} strokeWidth="1.8" />
                           <circle cx="12" cy="12" r="6" fill="none" stroke={FG} strokeWidth="1.5" />
                           <circle cx="12" cy="12" r="3" fill={RED} />
                        </svg>
                     </div>
                     <span className="font-semibold" style={{ fontFamily: "'Spectral', serif", color: "#F8F5EE" }}>
                        C.D. Alijares
                     </span>
                  </div>
                  <p className="text-sm leading-relaxed">
                     Club deportivo de tiro con arco tradicional 3D en entorno forestal. Federados en la Federación de Tiro con Arco de Castilla-La Mancha (FCMTA) y la RFETA.
                  </p>
               </div>

               {/* Columna 2: Enlaces a secciones principales del portal */}
               <div>
                  <div className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "#F8F5EE", fontFamily: "'DM Mono', monospace" }}>
                     Navegación
                  </div>
                  <ul className="space-y-2 text-sm">
                     {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                           <a
                              href={link.href}
                              className="transition-colors duration-200"
                              style={{ color: MFG }}
                              onMouseEnter={(event) => {
                                 event.currentTarget.style.color = "#F8F5EE";
                              }}
                              onMouseLeave={(event) => {
                                 event.currentTarget.style.color = MFG;
                              }}
                           >
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Columna 3: Información jurídica y estatutaria */}
               <div>
                  <div className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "#F8F5EE", fontFamily: "'DM Mono', monospace" }}>
                     Legal
                  </div>
                  <ul className="space-y-2 text-sm">
                     {["Política de Privacidad", "Aviso Legal", "Protección de Datos", "Estatutos del Club"].map((item) => (
                        <li key={item}>
                           <a
                              href="#"
                              className="transition-colors duration-200"
                              style={{ color: MFG }}
                              onMouseEnter={(event) => {
                                 event.currentTarget.style.color = "#F8F5EE";
                              }}
                              onMouseLeave={(event) => {
                                 event.currentTarget.style.color = MFG;
                              }}
                           >
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Columna 4: Accesos directos a plataformas oficiales */}
               <div>
                  <div className="text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: "#F8F5EE", fontFamily: "'DM Mono', monospace" }}>
                     Comunidad y Federación
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                     {SOCIAL_LINKS.map((social) => (
                        <a
                           key={social.name}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           title={social.name}
                           aria-label={social.name}
                           className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border"
                           style={{
                              borderColor: "rgba(122,140,56,0.3)",
                              color: MFG,
                              background: "rgba(0,0,0,0.15)"
                           }}
                           onMouseEnter={(event) => {
                              event.currentTarget.style.color = "#F8F5EE";
                              event.currentTarget.style.borderColor = FG;
                           }}
                           onMouseLeave={(event) => {
                              event.currentTarget.style.color = MFG;
                              event.currentTarget.style.borderColor = "rgba(122,140,56,0.3)";
                           }}
                        >
                           {social.icon}
                        </a>
                     ))}
                  </div>
               </div>
            </div>

            {/* Barra de cierre: Derechos reservados y sede territorial */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid rgba(122,140,56,0.2)", color: "#5A6A4A" }}>
               <span>© 2026 C.D. Alijares. Todos los derechos reservados.</span>
               <span style={{ fontFamily: "'DM Mono', monospace" }}>Toledo · España</span>
            </div>
         </div>
      </footer>
   );
}