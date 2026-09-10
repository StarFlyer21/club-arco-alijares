import { useEffect, useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { BDR, BGW, FG, MFG, NAV_LINKS, OLI, RED } from "../constants";

export default function Navbar() {
   const [mobileOpen, setMobileOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();

      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   return (
      <header
         className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         style={{
            background: BGW,
            borderBottom: scrolled ? `1px solid ${BDR}` : "1px solid transparent",
            boxShadow: scrolled ? "0 1px 12px rgba(26,24,20,0.07)" : "none",
         }}
      >
         <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
            <a href="#inicio" className="flex items-center gap-3">
               <div className="w-9 h-9 rounded-full flex items-center justify-center border-2" style={{ background: BGW, borderColor: FG }}>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                     <circle cx="12" cy="12" r="10" fill="none" stroke={RED} strokeWidth="1.8" />
                     <circle cx="12" cy="12" r="6" fill="none" stroke={FG} strokeWidth="1.5" />
                     <circle cx="12" cy="12" r="3" fill={RED} />
                  </svg>
               </div>
               <div>
                  <div className="text-base font-semibold leading-none" style={{ fontFamily: "'Spectral', serif", color: FG }}>
                     C.D. Alijares
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase" style={{ color: MFG }}>
                     Club Deportivo
                  </div>
               </div>
            </a>

            <nav className="hidden md:flex items-center gap-7">
               {NAV_LINKS.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     className="text-xs tracking-widest uppercase transition-colors duration-200"
                     style={{ color: MFG }}
                     onMouseEnter={(event) => {
                        event.currentTarget.style.color = FG;
                     }}
                     onMouseLeave={(event) => {
                        event.currentTarget.style.color = MFG;
                     }}
                  >
                     {link.label}
                  </a>
               ))}
               <a
                  href="#contacto"
                  className="text-xs tracking-widest uppercase px-4 py-2 transition-colors duration-200 inline-flex items-center gap-1.5"
                  style={{ background: OLI, color: "#FFF" }}
                  onMouseEnter={(event) => {
                     event.currentTarget.style.background = "#6A7B2E";
                  }}
                  onMouseLeave={(event) => {
                     event.currentTarget.style.background = OLI;
                  }}
               >
                  Inscríbete <ChevronRight className="w-3.5 h-3.5" />
               </a>
            </nav>

            <button className="md:hidden p-1" style={{ color: FG }} onClick={() => setMobileOpen((open) => !open)}>
               {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
         </div>

         {mobileOpen && (
            <div className="md:hidden px-6 pb-5 flex flex-col gap-4" style={{ borderTop: `1px solid ${BDR}`, background: BGW }}>
               {NAV_LINKS.map((link) => (
                  <a
                     key={link.href}
                     href={link.href}
                     className="text-xs tracking-widest uppercase"
                     style={{ color: MFG }}
                     onClick={() => setMobileOpen(false)}
                  >
                     {link.label}
                  </a>
               ))}
            </div>
         )}
      </header>
   );
}
