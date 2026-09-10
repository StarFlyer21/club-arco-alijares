import { EVENTS } from "../constants";
import SectionHeader from "../components/SectionHeader";
import FlyerCard from "../components/FlyerCard";

export default function Eventos() {
  // Obtenemos la fecha de hoy a las 00:00:00 local
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  // 1. Filtramos solo los eventos cuya fecha sea hoy o futura
  // 2. Los ordenamos cronológicamente (el más cercano primero)
  // 3. Tomamos únicamente los 6 primeros
  const proximosEventos = EVENTS
    .filter((evento) => {
      if (!evento.isoDate) return false;
      const fechaEvento = new Date(`${evento.isoDate}T00:00:00`);
      return !isNaN(fechaEvento.getTime()) && fechaEvento >= hoy;
    })
    .sort((a, b) => {
      const fechaA = new Date(`${a.isoDate}T00:00:00`).getTime();
      const fechaB = new Date(`${b.isoDate}T00:00:00`).getTime();
      return fechaA - fechaB;
    })
    .slice(0, 6);

  return (
    <section id="eventos" style={{ background: "#F0EDE4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          n="05"
          title="Próximos Eventos y Tiradas"
          subtitle="Competiciones y tiradas oficiales organizadas por el club. Consulta el cartel y programa de cada evento."
        />

        {proximosEventos.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {proximosEventos.map((event) => (
              <FlyerCard key={event.id || event.title} {...event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-stone-500 py-12">
            No hay tiradas programadas en las próximas fechas. Vuelve a consultar pronto.
          </p>
        )}
      </div>
    </section>
  );
}