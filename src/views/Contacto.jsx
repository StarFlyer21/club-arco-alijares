/**
 * ============================================================================
 * C.D. ALIJARES — SECCIÓN DE CONTACTO E INSCRIPCIÓN
 * ============================================================================
 * Gestiona el formulario oficial de inscripción/contacto conectado a FormSubmit,
 * los datos directos del club y el visor interactivo 360° de Street View.
 */

import { useState } from "react";
import { MapPin, Mail, Phone, Target, Loader2 } from "lucide-react";
import { BDR, BGL, BGW, FG, MFG, OLI } from "../constants";
import SectionHeader from "../components/SectionHeader";

export default function Contacto() {
  // Estado local para los campos del formulario y el selector de discapacidad
  const [disability, setDisability] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    observations: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Buzón corporativo receptor de las solicitudes procesadas
  const CORREO_DESTINO = "info@arcoalijares3d.es";

  /**
   * Envía los datos del formulario a través del endpoint AJAX de FormSubmit
   * para procesar el correo de notificación sin redirecciones externas.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CORREO_DESTINO}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: form.name,
          Email: form.email,
          Telefono: form.phone,
          "Discapacidad reconocida": disability === "si" ? "Sí" : "No",
          Observaciones: form.observations || "Sin observaciones adicionales",
          _subject: `Nueva Solicitud Web: ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Respuesta no válida del servidor");
      }
    } catch (err) {
      setErrorMsg("Hubo un error al enviar tu solicitud. Inténtalo de nuevo o escribe directamente a nuestro correo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" style={{ background: "#F0EDE4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="07"
          title="Formulario de Inscripción"
          subtitle="Rellena el formulario y nos pondremos en contacto contigo."
        />

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Bloque izquierdo: Formulario o estado de éxito */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="border p-10 text-center" style={{ borderColor: `${OLI}55`, background: BGW }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(122,140,56,0.1)" }}
                >
                  <Target className="w-6 h-6" style={{ color: OLI }} />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Spectral', serif" }}>
                  Solicitud enviada con éxito
                </h3>
                <p className="text-sm" style={{ color: MFG }}>
                  Hemos recibido tu solicitud de inscripción. El equipo del club se pondrá en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                style={{ background: BGW, padding: "2rem", border: `1px solid ${BDR}` }}
              >
                {/* Mensaje de error si falla la llamada de red */}
                {errorMsg && (
                  <div className="p-3 bg-red-100 border border-red-300 text-red-700 text-xs">
                    {errorMsg}
                  </div>
                )}

                {/* Campos personales: Nombre y Correo electrónico */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ej. María García López"
                      className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-200"
                      style={{ borderColor: BDR, background: BGL, color: FG }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="correo@gmail.com"
                      className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-200"
                      style={{ borderColor: BDR, background: BGL, color: FG }}
                    />
                  </div>
                </div>

                {/* Teléfono de contacto */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                    Teléfono de contacto *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-200"
                    style={{ borderColor: BDR, background: BGL, color: FG }}
                  />
                </div>

                {/* Selector de adaptación por discapacidad */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest mb-3" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                    Discapacidad reconocida
                  </label>
                  <div className="flex gap-3">
                    {["si", "no"].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setDisability(value)}
                        className="px-7 py-2.5 text-sm font-medium border transition-all duration-200"
                        style={
                          disability === value
                            ? { background: OLI, borderColor: OLI, color: "#FFF" }
                            : { background: BGL, borderColor: BDR, color: MFG }
                        }
                      >
                        {value === "si" ? "Sí" : "No"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Observaciones adicionales */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: MFG, fontFamily: "'DM Mono', monospace" }}>
                    Observaciones
                    {disability === "si" && <span style={{ color: OLI }}> — detalla tu situación si lo deseas</span>}
                  </label>
                  <textarea
                    rows={4}
                    value={form.observations}
                    onChange={(e) => setForm({ ...form, observations: e.target.value })}
                    placeholder="Cualquier información adicional relevante..."
                    className="w-full px-4 py-3 text-sm border outline-none transition-colors duration-200 resize-none"
                    style={{ borderColor: BDR, background: BGL, color: FG }}
                  />
                </div>

                {/* Envío con indicador de carga reactivo */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 text-sm font-medium tracking-widest uppercase transition-colors duration-200 flex items-center justify-center gap-2"
                  style={{ background: OLI, color: "#FFF" }}
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {loading ? "Enviando..." : "Enviar Solicitud de Inscripción"}
                </button>

                <p className="text-xs text-center" style={{ color: MFG }}>
                  Tus datos serán tratados conforme al RGPD del club.
                </p>
              </form>
            )}
          </div>

          {/* Bloque derecho: Tarjetas de información y vista Street View */}
          <div className="space-y-5">
            {/* Datos de contacto directos */}
            <div className="border p-6" style={{ background: BGW, borderColor: BDR }}>
              <h4 className="font-semibold text-lg mb-4" style={{ fontFamily: "'Spectral', serif" }}>
                Información de Contacto
              </h4>
              <div className="space-y-3 text-sm">
                {[
                  { Icon: MapPin, content: <span>Calle del Santísimo Cristo de la Sala, s/n<br />45593 Bargas · Toledo</span> },
                  { Icon: Phone, content: <span>+34 647 43 49 14</span> },
                  { Icon: Mail, content: <span>info@arcoalijares3d.es</span> },
                ].map(({ Icon, content }, index) => (
                  <div key={index} className="flex items-start gap-3" style={{ color: MFG }}>
                    <Icon className="w-4 h-4 mt-0.5 shrink-0" style={{ color: OLI }} />
                    {content}
                  </div>
                ))}
              </div>
            </div>

            {/* Visor interactivo 360° de Street View del campo de tiro */}
            <div
              className="border overflow-hidden flex flex-col"
              style={{ background: BGW, borderColor: BDR }}
            >
              <div className="relative w-full h-72">
                <iframe
                  title="Street View Campo C.D. Alijares"
                  src="https://www.google.com/maps/embed?pb=!4v1789063564676!6m8!1m7!1skMvn65JWRWb5vV0HNM0Gpw!2m2!1d39.94415637652533!2d-4.016324364416731!3f20.233697758185645!4f2.3648013642931858!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="p-4 flex items-center justify-between gap-3 text-xs" style={{ borderTop: `1px solid ${BDR}` }}>
                <div>
                  <p className="font-semibold" style={{ color: FG }}>Acceso e Instalaciones</p>
                  <p style={{ color: MFG }}>Bargas · Toledo</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/uPr9VMqT4rjhQdka6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 font-medium border transition-colors duration-200 shrink-0"
                  style={{ borderColor: OLI, color: OLI }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = OLI;
                    e.currentTarget.style.color = "#FFF";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = OLI;
                  }}
                >
                  Pantalla completa ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}