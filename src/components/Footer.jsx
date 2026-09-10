import { NAV_LINKS, BGW, FG, MFG, RED } from "../constants";

export default function Footer() {
   return (
      <footer style={{ background: "#1A2010", color: "#8A9A6A" }} className="py-14">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 mb-10">
               <div className="md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full flex items-center justify-center border-2" style={{ background: BGW, borderColor: FG }}>
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
                  <p className="text-sm leading-relaxed max-w-xs">
                     Club deportivo de tiro con arco tradicional 3D en entorno forestal. Federados en la Real Federación Española de Tiro con Arco.
                  </p>
               </div>

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
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid rgba(122,140,56,0.2)", color: "#5A6A4A" }}>
               <span>© 2026 C.D. Alijares. Todos los derechos reservados.</span>
               <span style={{ fontFamily: "'DM Mono', monospace" }}>Toledo · España</span>
            </div>
         </div>
      </footer>
   );
}
